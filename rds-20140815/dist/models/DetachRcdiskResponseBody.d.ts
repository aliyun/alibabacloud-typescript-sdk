import * as $dara from '@darabonba/typescript';
export declare class DetachRCDiskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * C8E88DED-533F-4B3C-9207-731FBF394CCA
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
