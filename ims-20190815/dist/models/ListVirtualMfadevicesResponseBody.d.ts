import * as $dara from '@darabonba/typescript';
export declare class ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADeviceUser extends $dara.Model {
    displayName?: string;
    userId?: string;
    userPrincipalName?: string;
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
export declare class ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADevice extends $dara.Model {
    activateDate?: string;
    serialNumber?: string;
    user?: ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADeviceUser;
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
export declare class ListVirtualMFADevicesResponseBodyVirtualMFADevices extends $dara.Model {
    virtualMFADevice?: ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADevice[];
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
export declare class ListVirtualMFADevicesResponseBody extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the returned results are truncated. Valid values:
     *
     * - true
     * - false
     *
     * @example
     * true
     */
    isTruncated?: boolean;
    /**
     * @remarks
     * The token for querying the next page of results.
     * > This parameter is returned only when `IsTruncated` is `true`.
     *
     * @example
     * EXAMPLE
     */
    marker?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 32272612-DF82-485E-8BA9-AFA4E0C3D0BA
     */
    requestId?: string;
    virtualMFADevices?: ListVirtualMFADevicesResponseBodyVirtualMFADevices;
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
