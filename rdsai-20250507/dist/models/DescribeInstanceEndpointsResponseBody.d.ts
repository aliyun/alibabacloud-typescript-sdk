import * as $dara from '@darabonba/typescript';
export declare class DescribeInstanceEndpointsResponseBodyDBInstanceEndpoints extends $dara.Model {
    /**
     * @remarks
     * The endpoint.
     *
     * @example
     * pgm-xxxx.rds.aliyuncs.com
     */
    connectionString?: string;
    /**
     * @remarks
     * The network type. Valid values:
     *
     * - **public**: Internet.
     * - **vpc**: private network.
     *
     * @example
     * vpc
     */
    ipType?: string;
    /**
     * @remarks
     * The connection port.
     *
     * @example
     * 5432
     */
    port?: string;
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
export declare class DescribeInstanceEndpointsResponseBodyInstanceEndpoints extends $dara.Model {
    /**
     * @remarks
     * The endpoint.
     *
     * @example
     * 8.152.XXX.XXX:8000
     */
    connectionString?: string;
    /**
     * @remarks
     * The domain name.
     *
     * @example
     * xxx.apsaradb.com
     */
    domain?: string;
    /**
     * @remarks
     * The IP address.
     *
     * @example
     * 8.152.XXX.XXX
     */
    IP?: string;
    /**
     * @remarks
     * The network type. Valid values:
     *
     * - **public**: Internet.
     * - **vpc**: private network.
     *
     * @example
     * public
     */
    ipType?: string;
    /**
     * @remarks
     * The connection port.
     *
     * @example
     * 8000
     */
    port?: string;
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
export declare class DescribeInstanceEndpointsResponseBody extends $dara.Model {
    /**
     * @remarks
     * Reserved parameter.
     *
     * @example
     * Reserved parameter
     */
    branchName?: string;
    /**
     * @remarks
     * The list of endpoint information for the database instance.
     */
    DBInstanceEndpoints?: DescribeInstanceEndpointsResponseBodyDBInstanceEndpoints[];
    /**
     * @remarks
     * The list of endpoint information for the AI application instance.
     */
    instanceEndpoints?: DescribeInstanceEndpointsResponseBodyInstanceEndpoints[];
    /**
     * @remarks
     * The instance ID of the AI application.
     *
     * @example
     * ra-supabase-8moov5lxba****
     */
    instanceName?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 32DEFB4A-861F-5D1D-ADD5-918E4FD7AB8C
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
