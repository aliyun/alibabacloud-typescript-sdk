import * as $dara from '@darabonba/typescript';
export declare class DescribeBackupDatabaseResponseBody extends $dara.Model {
    /**
     * @remarks
     * The database names, in the format of "db1,db2".
     *
     * @example
     * db1,db2
     */
    databaseNames?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 08A3B71B-FE08-xxxx-974F-CC7EA6DBxxxx
     */
    requestId?: string;
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
