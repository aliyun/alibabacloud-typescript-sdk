import * as $dara from '@darabonba/typescript';
export declare class CreateDBProxyEndpointAddressResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
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
