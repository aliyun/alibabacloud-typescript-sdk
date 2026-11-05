import * as $dara from '@darabonba/typescript';
export declare class ModifyDBInstanceEndpointResponseBodyData extends $dara.Model {
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
export declare class ModifyDBInstanceEndpointResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of returned fields.
     */
    data?: ModifyDBInstanceEndpointResponseBodyData;
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
