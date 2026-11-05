import * as $dara from '@darabonba/typescript';
export declare class ModifyApplicationEndpointAddressRequestNewPorts extends $dara.Model {
    /**
     * @remarks
     * The new port value.
     *
     * @example
     * 443
     */
    newPort?: number;
    /**
     * @remarks
     * The old port value.
     *
     * @example
     * 18789
     */
    oldPort?: number;
    /**
     * @remarks
     * The port name.
     *
     * @example
     * polarclaw
     */
    portName?: string;
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
export declare class ModifyApplicationEndpointAddressRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The endpoint ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    endpointId?: string;
    /**
     * @remarks
     * The network type of the endpoint address. Valid values:
     *
     * * **Public**: public network.
     * * **Private**: private network.
     *
     * This parameter is required.
     *
     * @example
     * Public
     */
    netType?: string;
    /**
     * @remarks
     * The new endpoint address prefix.
     *
     * @example
     * xg06iror0l
     */
    newConnectionStringPrefix?: string;
    /**
     * @remarks
     * The list of new ports.
     */
    newPorts?: ModifyApplicationEndpointAddressRequestNewPorts[];
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
