import * as $dara from '@darabonba/typescript';
export declare class CreateVirtualMFADeviceResponseBodyVirtualMFADevice extends $dara.Model {
    /**
     * @remarks
     * The key of the MFA device.
     *
     * @example
     * LD3CJ23Z2VGEX6R7ZTQCOA4XL2KODS5PKH7442NLKYX2PVHSHYB7UT3TS5HA****
     */
    base32StringSeed?: string;
    /**
     * @remarks
     * The Base64-encoded QR code of the key.
     *
     * @example
     * YXNkZmFzZDlmeW5hc2Q5OGZoODd4bXJmcThhaGU5aSBmYXNkZiBzYWRmIGFGIDRxd2VjIGEgdHEz****
     */
    QRCodePNG?: string;
    /**
     * @remarks
     * The serial number of the MFA device.
     *
     * @example
     * acs:ram::177242285274****:mfa/device001
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
export declare class CreateVirtualMFADeviceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * C609CC97-10FE-43EB-BE32-BDC219D8F1E4
     */
    requestId?: string;
    /**
     * @remarks
     * The information about the MFA device.
     */
    virtualMFADevice?: CreateVirtualMFADeviceResponseBodyVirtualMFADevice;
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
