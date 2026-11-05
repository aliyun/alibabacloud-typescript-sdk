import * as $dara from '@darabonba/typescript';
export declare class GetVerificationInfoResponseBodySecurityEmailDevice extends $dara.Model {
    /**
     * @remarks
     * The security email address.
     *
     * @example
     * username@example.com
     */
    email?: string;
    /**
     * @remarks
     * The status of the security email address. Valid values:
     * - active: Activated.
     * - pending: Pending activation.
     *
     * @example
     * active
     */
    status?: string;
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
export declare class GetVerificationInfoResponseBodySecurityPhoneDevice extends $dara.Model {
    /**
     * @remarks
     * The area code.
     *
     * @example
     * 86
     */
    areaCode?: string;
    /**
     * @remarks
     * The phone number.
     *
     * @example
     * 13900001234
     */
    phoneNumber?: string;
    /**
     * @remarks
     * The status of the secure phone. Valid values:
     * - active: Activated.
     * - pending: Pending activation.
     *
     * @example
     * active
     */
    status?: string;
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
export declare class GetVerificationInfoResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * B182C041-8C64-5F2F-A07B-FC67FAF89CF9
     */
    requestId?: string;
    /**
     * @remarks
     * The security email address information.
     */
    securityEmailDevice?: GetVerificationInfoResponseBodySecurityEmailDevice;
    /**
     * @remarks
     * The secure phone information.
     */
    securityPhoneDevice?: GetVerificationInfoResponseBodySecurityPhoneDevice;
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
