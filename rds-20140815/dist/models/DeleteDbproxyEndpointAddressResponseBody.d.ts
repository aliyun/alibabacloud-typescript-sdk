import * as $dara from '@darabonba/typescript';
export declare class DeleteDBProxyEndpointAddressResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 343356C6-64B2-4245-ADEB-C9BD165EDD11
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
