import * as $dara from '@darabonba/typescript';
export declare class GetCloudDriveServiceMountTokenResponseBodyToken extends $dara.Model {
    /**
     * @remarks
     * Enterprise File Gateway domain name.
     *
     * @example
     * h****
     */
    domainId?: string;
    /**
     * @remarks
     * Expiration Time.
     *
     * @example
     * 2022-10-10T04:41:35Z
     */
    expiredAfter?: string;
    /**
     * @remarks
     * Current status of the Enterprise File Gateway user.
     *
     * @example
     * enabled
     */
    status?: string;
    /**
     * @remarks
     * The token.
     *
     * @example
     * 7836fa6eced7dc8d54c775k34iu3h4i2kh534f****
     */
    token?: string;
    /**
     * @remarks
     * The total capacity of the enterprise drive. Unit: GiB
     *
     * @example
     * 6050416754750
     */
    totalSize?: number;
    /**
     * @remarks
     * Used capacity. Unit: GiB.
     *
     * @example
     * 605089
     */
    usedSize?: number;
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
export declare class GetCloudDriveServiceMountTokenResponseBody extends $dara.Model {
    /**
     * @remarks
     * Request ID.
     *
     * @example
     * DC27288A-F9E1-5092-9B5B-71C27D15****
     */
    requestId?: string;
    /**
     * @remarks
     * The tokens.
     */
    token?: GetCloudDriveServiceMountTokenResponseBodyToken;
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
