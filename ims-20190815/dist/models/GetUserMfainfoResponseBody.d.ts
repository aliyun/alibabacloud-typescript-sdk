import * as $dara from '@darabonba/typescript';
export declare class GetUserMFAInfoResponseBodyMFADevice extends $dara.Model {
    /**
     * @remarks
     * The serial number of the MFA device.
     *
     * @example
     * acs:ram::177242285274****:mfa/device001
     */
    serialNumber?: string;
    /**
     * @remarks
     * The type of the MFA device. Valid values:
     *
     * - VMFA: virtual MFA device.
     *
     * - U2F: Universal 2nd Factor (U2F) security key.
     *
     * @example
     * VMFA
     */
    type?: string;
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
export declare class GetUserMFAInfoResponseBody extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the MFA device is enabled. Valid values:
     *
     * - true
     *
     * - false
     *
     * @example
     * true
     */
    isMFAEnable?: boolean;
    /**
     * @remarks
     * The information about the MFA device.
     */
    MFADevice?: GetUserMFAInfoResponseBodyMFADevice;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * FCF7322A-20A9-4F68-8B7F-F86958839BC0
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
