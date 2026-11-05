import * as $dara from '@darabonba/typescript';
export declare class CreateOrGetVirtualLicenseOrderResponseBody extends $dara.Model {
    /**
     * @remarks
     * The number of activation codes that have been generated.
     *
     * @example
     * 1
     */
    activatedCodeCount?: number;
    /**
     * @remarks
     * The quota of activation codes that can be requested.
     *
     * @example
     * 10
     */
    activationCodeQuota?: number;
    /**
     * @remarks
     * The Alibaba Cloud order ID, which includes the virtual order ID.
     *
     * @example
     * 2233****445566
     */
    aliyunOrderId?: string;
    /**
     * @remarks
     * Indicates whether the System Identifier can be left empty when generating an activation code.
     *
     * @example
     * false
     */
    allowEmptySystemIdentifier?: boolean;
    /**
     * @remarks
     * The time when the order was created.
     *
     * @example
     * 2024-10-16 16:46:20
     */
    gmtCreated?: string;
    /**
     * @remarks
     * The time when the order was last updated.
     *
     * @example
     * 2024-10-16 16:46:20
     */
    gmtModified?: string;
    /**
     * @remarks
     * Indicates whether the order is a virtual order. Virtual orders allow pre-generation of activation codes.
     *
     * @example
     * true
     */
    isVirtualOrder?: boolean;
    /**
     * @remarks
     * Indicates whether the virtual order is frozen. A frozen virtual order does not allow further generation of activation codes.
     *
     * @example
     * false
     */
    isVirtualOrderFrozen?: boolean;
    /**
     * @remarks
     * The package type.
     *
     * @example
     * pre_generation_long_term
     */
    packageType?: string;
    /**
     * @remarks
     * The validity period of the package. Typical values are one year or long-term (30 years).
     *
     * @example
     * 30 years
     */
    packageValidity?: string;
    /**
     * @remarks
     * The purchase channel.
     *
     * @example
     * aliyun_market
     */
    purchaseChannel?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 45D24263-7E3A-4140-9472-************
     */
    requestId?: string;
    /**
     * @remarks
     * The virtual order ID.
     *
     * @example
     * 2024********483
     */
    virtualOrderId?: string;
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
