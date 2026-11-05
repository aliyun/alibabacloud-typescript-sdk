import * as $dara from '@darabonba/typescript';
export declare class UnbindMFADeviceResponseBodyMFADevice extends $dara.Model {
    /**
     * @remarks
     * The serial number of the MFA device.
     *
     * @example
     * acs:ram::151298381312****:mfa/device001
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
export declare class UnbindMFADeviceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The information about the MFA device.
     */
    MFADevice?: UnbindMFADeviceResponseBodyMFADevice;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * A26CB3E9-1021-452A-AC57-3134B3BA0E4C
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
