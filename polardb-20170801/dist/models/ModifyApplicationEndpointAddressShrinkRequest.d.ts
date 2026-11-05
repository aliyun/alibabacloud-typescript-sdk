import * as $dara from '@darabonba/typescript';
export declare class ModifyApplicationEndpointAddressShrinkRequest extends $dara.Model {
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
    newPortsShrink?: string;
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
