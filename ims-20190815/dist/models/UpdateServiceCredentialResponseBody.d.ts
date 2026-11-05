import * as $dara from '@darabonba/typescript';
export declare class UpdateServiceCredentialResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 53C8FBFD-F2E9-50F2-AD63-B6566B3D4D7B
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
