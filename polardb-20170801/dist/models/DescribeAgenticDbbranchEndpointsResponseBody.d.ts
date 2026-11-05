import * as $dara from '@darabonba/typescript';
export declare class DescribeAgenticDBBranchEndpointsResponseBodyItemsAddressItems extends $dara.Model {
    /**
     * @remarks
     * The endpoint.
     *
     * @example
     * pe-cedar-cygfzprh775g.polaragentic.pre.rds.aliyuncs.com
     */
    address?: string;
    /**
     * @remarks
     * The full PostgreSQL connection string.
     *
     * @example
     * postgresql://cloud_admin:******@pe-cedar-cygfzprh775g.polaragentic.pre.rds.aliyuncs.com:5460/neondb
     */
    connectionString?: string;
    /**
     * @remarks
     * The network type. Valid values:
     * - Private: private network.
     * - Public: public network.
     *
     * @example
     * Private
     */
    netType?: string;
    /**
     * @remarks
     * The port.
     *
     * @example
     * 5460
     */
    port?: number;
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
export declare class DescribeAgenticDBBranchEndpointsResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The account name.
     *
     * @example
     * cloud_admin
     */
    account?: string;
    /**
     * @remarks
     * The compatible connection address. A public endpoint is returned first. If no public endpoint is available, a private endpoint is returned.
     *
     * @example
     * 10.0.1.100
     */
    address?: string;
    /**
     * @remarks
     * The list of public and private network endpoints.
     */
    addressItems?: DescribeAgenticDBBranchEndpointsResponseBodyItemsAddressItems[];
    /**
     * @remarks
     * The compatible connection string. A public connection string is returned first. If no public connection string is available, a private connection string is returned.
     *
     * @example
     * postgresql://cloud_admin:******@10.0.1.100:5432/neondb
     */
    connectionString?: string;
    /**
     * @remarks
     * The database name.
     *
     * @example
     * neondb
     */
    database?: string;
    /**
     * @remarks
     * The endpoint ID.
     *
     * @example
     * ep-3m4n5o6p7q8r
     */
    endpointId?: string;
    /**
     * @remarks
     * The endpoint type.
     *
     * @example
     * ReadWrite
     */
    endpointType?: string;
    /**
     * @remarks
     * The password.
     *
     * @example
     * ******
     */
    password?: string;
    /**
     * @remarks
     * The compatible connection port that corresponds to the Address parameter.
     *
     * @example
     * 5432
     */
    port?: number;
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
export declare class DescribeAgenticDBBranchEndpointsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of endpoints.
     */
    items?: DescribeAgenticDBBranchEndpointsResponseBodyItems[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * E5F6A7B8-C9D0-1234-EFAB-567890123EFA
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
