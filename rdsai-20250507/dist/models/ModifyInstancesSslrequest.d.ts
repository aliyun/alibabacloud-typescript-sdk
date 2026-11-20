import * as $dara from '@darabonba/typescript';
export declare class ModifyInstancesSSLRequest extends $dara.Model {
    /**
     * @remarks
     * The certificate type. Only **custom** is supported, which indicates that a custom certificate is used.
     * > This parameter is required when **SSLEnabled** is set to **1**.
     *
     * @example
     * custom
     */
    CAType?: string;
    /**
     * @remarks
     * The IDs of the ApsaraDB RDS AI application instances. You can specify up to 10 instance IDs.
     *
     * This parameter is required.
     *
     * @example
     * [
     *     "ra-supabase-xxx",
     *     "ra-supabase-xxx"
     *   ]
     */
    instanceNames?: string[];
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * Specifies whether to enable SSL. Valid values:
     * * **1**: Enabled.
     * * **0**: Disabled.
     *
     * This parameter is required.
     *
     * @example
     * 1
     */
    SSLEnabled?: number;
    /**
     * @remarks
     * The content of the custom certificate.
     *
     * > This parameter is required when **CAType** is set to **custom**.
     *
     * @example
     * -----BEGIN CERTIFICATE-----MIID*****QqEP-----END CERTIFICATE-----
     */
    serverCert?: string;
    /**
     * @remarks
     * The private key of the certificate.
     *
     * > This parameter is required when **CAType** is set to **custom**.
     *
     * @example
     * -----BEGIN PRIVATE KEY-----MIIE****ihfg==-----END PRIVATE KEY-----
     */
    serverKey?: string;
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
