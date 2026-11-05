import * as $dara from '@darabonba/typescript';
export declare class BindAppDomainRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WD20250820143531000001
     */
    bizId?: string;
    /**
     * @remarks
     * The domain hosting method. Valid values:
     * - CUSTOMER_ESA: Uses the customer\\"s own Edge Security Acceleration (ESA). Only supported when DomainType is set to CUSTOM.
     *
     * If this parameter is not specified, the original hosting process is used.
     *
     * @example
     * CDN
     */
    deployType?: string;
    /**
     * @remarks
     * The domain name.
     *
     * @example
     * xiaoniu.link
     */
    domainName?: string;
    /**
     * @remarks
     * The domain management type. Valid values:
     * - CUSTOM
     * - PLATFORM_PREFIX
     *
     * Default value: CUSTOM.
     *
     * @example
     * CUSTOM
     */
    domainType?: string;
    /**
     * @remarks
     * The extended information (OverwriteExistingRecord).
     *
     * @example
     * {\\"deliveryNodeName\\":\\"Website acceptance\\",\\"deliveryNodeStatus\\":\\"Reject\\",\\"deliveryOperatorRole\\":\\"Customer\\"}
     */
    extend?: string;
    /**
     * @remarks
     * The operation type for domain binding.
     *
     * @example
     * vul_fix
     */
    operateType?: string;
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
