import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInitializeVariableResponseBodyVariablesVariable extends $dara.Model {
    charset?: string;
    collate?: string;
    ctype?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DescribeDBInitializeVariableResponseBodyVariables extends $dara.Model {
    variable?: DescribeDBInitializeVariableResponseBodyVariablesVariable[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DescribeDBInitializeVariableResponseBody extends $dara.Model {
    /**
     * @remarks
     * The database type. Valid values:
     *
     * - Oracle
     *
     * - PostgreSQL
     *
     * - MySQL
     *
     * @example
     * PostgreSQL
     */
    DBType?: string;
    /**
     * @remarks
     * The database version.
     *
     * @example
     * 11
     */
    DBVersion?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 475F58B7-F394-4394-AA6E-4F1CBA******
     */
    requestId?: string;
    variables?: DescribeDBInitializeVariableResponseBodyVariables;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
