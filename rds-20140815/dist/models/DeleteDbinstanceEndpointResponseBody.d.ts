import * as $dara from '@darabonba/typescript';
export declare class DeleteDBInstanceEndpointResponseBodyData extends $dara.Model {
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
export declare class DeleteDBInstanceEndpointResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of returned data.
     */
    data?: DeleteDBInstanceEndpointResponseBodyData;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 224DB9F7-3100-4899-AB9C-C938BCCB43E7
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
