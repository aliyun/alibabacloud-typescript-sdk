import * as $dara from '@darabonba/typescript';
export declare class CreateVirtualMFADeviceRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the MFA device.
     *
     * The name must be 1 to 64 characters in length and can contain letters, digits, and hyphens (-).
     *
     * This parameter is required.
     *
     * @example
     * device001
     */
    virtualMFADeviceName?: string;
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
