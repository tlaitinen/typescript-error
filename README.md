# Test case to reproduce a possible bug in TypeScript 3.2.4 


TypeScript compiler version 3.2.2 accepts both files
[error.ts](https://github.com/tlaitinen/typescript-error/blob/master/src/error.ts) and [no-error.ts](https://github.com/tlaitinen/typescript-error/blob/master/src/no-error.ts), 
but v3.2.4 no longer accepts [error.ts](https://github.com/tlaitinen/typescript-error/blob/master/src/error.ts).

## TypeScript 3.2.2

```
$ npm install typescript@3.2.2
$ npm run typecheck

> typescript-error@1.0.0 build /home/tero/typescript-error
> tsc --build tsconfig.json

$
```

## TypeScript 3.2.4

```
$ npm install typescript@3.2.4
$ npm run typecheck
 

> typescript-error@1.0.0 typecheck /home/tero/typescript-error
> tsc --build tsconfig.json

src/error.ts:18:5 - error TS2345: Argument of type 'typeof TestComponent' is not assignable to parameter of type 'ComponentType<Matching<{ entity: undefined; }, Props>>'.
  Type 'typeof TestComponent' is not assignable to type 'ComponentClass<Matching<{ entity: undefined; }, Props>, any>'.
    Type 'TestComponent' is not assignable to type 'Component<Matching<{ entity: undefined; }, Props>, any, any>'.
      Types of property 'props' are incompatible.
        Type 'Readonly<{ children?: ReactNode; }> & Readonly<Props>' is not assignable to type 'Readonly<{ children?: ReactNode; }> & Readonly<Matching<{ entity: undefined; }, Props>>'.
          Type 'Readonly<{ children?: ReactNode; }> & Readonly<Props>' is not assignable to type 'Readonly<Matching<{ entity: undefined; }, Props>>'.
            Types of property 'entity' are incompatible.
              Type 'E | undefined' is not assignable to type 'undefined extends E | undefined ? E | undefined : undefined'.
                Type 'undefined' is not assignable to type 'undefined extends E | undefined ? E | undefined : undefined'.

18   )(TestComponent);
       ~~~~~~~~~~~~~
```
