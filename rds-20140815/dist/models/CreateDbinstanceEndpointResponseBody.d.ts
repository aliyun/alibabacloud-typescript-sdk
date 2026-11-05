import * as $dara from '@darabonba/typescript';
export declare class CreateDBInstanceEndpointResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The internal endpoint.
     *
     * @example
     * rm-****.mysql.rds.aliyuncs.com
     */
    connectionString?: string;
    /**
     * @remarks
     * The endpoint ID of the instance.
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
export declare class CreateDBInstanceEndpointResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of returned data.
     */
    data?: CreateDBInstanceEndpointResponseBodyData;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * C8E88DED-533F-4B3C-9207-731FBF394CCA
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
