import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstanceTDEResponseBodyDatabasesDatabase extends $dara.Model {
    DBName?: string;
    TDEStatus?: string;
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
export declare class DescribeDBInstanceTDEResponseBodyDatabases extends $dara.Model {
    database?: DescribeDBInstanceTDEResponseBodyDatabasesDatabase[];
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
export declare class DescribeDBInstanceTDEResponseBody extends $dara.Model {
    databases?: DescribeDBInstanceTDEResponseBodyDatabases;
    /**
     * @remarks
     * The ID of the key used for TDE.
     *
     * @example
     * key-szz644a355asjcuilll4u
     */
    encryptionKey?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * C816A4BF-A6EC-4722-95F9-2055859CCFD2
     */
    requestId?: string;
    /**
     * @remarks
     * The key management method for instance-level TDE. Valid values:
     * - **Aliyun_Generate_Key**
     * - **Customer_Provided_Key**
     * - **Unknown**
     *
     * @example
     * Aliyun_Generate_Key
     */
    TDEMode?: string;
    /**
     * @remarks
     * The instance-level TDE status. Valid values:
     * - **Enabled**
     * - **Disabled**
     *
     * @example
     * Enabled
     */
    TDEStatus?: string;
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
