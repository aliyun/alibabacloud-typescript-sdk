import * as $dara from '@darabonba/typescript';
export declare class DeleteDBInstanceEndpointAddressResponseBodyData extends $dara.Model {
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
export declare class DeleteDBInstanceEndpointAddressResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of returned data.
     */
    data?: DeleteDBInstanceEndpointAddressResponseBodyData;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * F2911788-25E8-42E5-A3A3-1B38D263F01E
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
