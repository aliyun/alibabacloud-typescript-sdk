import * as $dara from '@darabonba/typescript';
export declare class CreateDBInstanceEndpointAddressResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The public endpoint.
     *
     * @example
     * rm-****.mysql.rds.aliyuncs.com
     */
    connectionString?: string;
    /**
     * @remarks
     * The ID of the endpoint.
     *
     * @example
     * ep-****
     */
    DBInstanceEndpointId?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-****
     */
    DBInstanceName?: string;
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
export declare class CreateDBInstanceEndpointAddressResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of returned fields.
     */
    data?: CreateDBInstanceEndpointAddressResponseBodyData;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 08A3B71B-FE08-4B03-974F-CC7EA6DB1828
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
