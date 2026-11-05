import * as $dara from '@darabonba/typescript';
export declare class ModifyDBInstanceEndpointAddressResponseBodyData extends $dara.Model {
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
export declare class ModifyDBInstanceEndpointAddressResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of returned fields.
     */
    data?: ModifyDBInstanceEndpointAddressResponseBodyData;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 90496720-2319-42A8-87CD-FCE4DF95EBED
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
