import * as $dara from '@darabonba/typescript';
export declare class DescribeApplicationSSLResponseBody extends $dara.Model {
    /**
     * @remarks
     * The Common Name of the certificate. This field is empty when SSL is not enabled.
     *
     * @example
     * xxx.polarclaw.rds.aliyuncs.com
     */
    certCommonName?: string;
    /**
     * @remarks
     * The certificate expiration time in UTC. This field is empty when SSL is not enabled.
     *
     * @example
     * 2027-08-09T10:23:26Z
     */
    certExpiredTime?: string;
    /**
     * @remarks
     * The SHA-256 (DER) fingerprint of the server certificate in lowercase hex. Use this value for client pinning. This is consistent with openssl -fingerprint -sha256. This field is empty when SSL is not enabled.
     *
     * @example
     * 20769803152bf6a3abed626f6b8cae3a1f0d0f2c3b4a59687776655443322110
     */
    certFingerprintSha256Der?: string;
    /**
     * @remarks
     * The most recent certificate installation time in UTC. This field is empty when SSL is not enabled.
     *
     * @example
     * 2026-08-09T10:23:49Z
     */
    certModifiedTime?: string;
    /**
     * @remarks
     * The certificate source. Valid values:
     *
     * - ca: issued by the platform.
     * - customer: provided by the user.
     *
     * This field is empty when SSL is not enabled.
     *
     * @example
     * ca
     */
    certSource?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 2F029645-FED9-4FE8-A6D3-488954******
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether automatic rotation of platform-issued certificates is enabled.
     *
     * @example
     * true
     */
    SSLAutoRotate?: boolean;
    /**
     * @remarks
     * Indicates whether SSL is enabled.
     *
     * @example
     * true
     */
    SSLEnabled?: boolean;
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
