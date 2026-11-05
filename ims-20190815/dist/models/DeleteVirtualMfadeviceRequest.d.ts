import * as $dara from '@darabonba/typescript';
export declare class DeleteVirtualMFADeviceRequest extends $dara.Model {
    /**
     * @remarks
     * The serial number of the MFA device.
     *
     * This parameter is required.
     *
     * @example
     * acs:ram::123456789012****:mfa/device002
     */
    serialNumber?: string;
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
