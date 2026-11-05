import * as $dara from '@darabonba/typescript';
export declare class DeleteVirtualMFADeviceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 04F0F334-1335-436C-A1D7-6C044FE73368
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
