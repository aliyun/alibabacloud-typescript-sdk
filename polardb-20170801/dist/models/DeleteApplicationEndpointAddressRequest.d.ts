import * as $dara from '@darabonba/typescript';
export declare class DeleteApplicationEndpointAddressRequest extends $dara.Model {
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
     * The ID of the server-side endpoint to delete.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    endpointId?: string;
    /**
     * @remarks
     * The network type of the connection address to delete. The value is fixed to `Public`.
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
