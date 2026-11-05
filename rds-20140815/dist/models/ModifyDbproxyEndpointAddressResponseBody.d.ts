import * as $dara from '@darabonba/typescript';
export declare class ModifyDBProxyEndpointAddressResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 50F6C32B-DD73-4DA1-ADA2-0EAF2B0FCD8A
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
