import * as $dara from '@darabonba/typescript';
export declare class CreateApplicationEndpointAddressRequest extends $dara.Model {
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
     * The service endpoint ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    endpointId?: string;
    /**
     * @remarks
     * The network type of the new connection address. The value must be `Public`, which indicates an Internet address.
     *
     * This parameter is required.
     *
     * @example
     * Public
     */
    netType?: string;
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
