import * as $dara from '@darabonba/typescript';
export declare class ModifyAppInstanceSpecRequest extends $dara.Model {
    /**
     * @remarks
     * The application type.
     *
     * @example
     * Application
     */
    applicationType?: string;
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WD20250703155602000001
     */
    bizId?: string;
    /**
     * @remarks
     * The client token that is used to ensure the idempotence of the request. Generate a unique value from your client. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length.
     *
     * @example
     * 2108341e17661121129745384e79f9
     */
    clientToken?: string;
    /**
     * @remarks
     * The deployment region.
     *
     * @example
     * HongKong
     */
    deployArea?: string;
    /**
     * @remarks
     * The extended information.
     *
     * @example
     * {\\"deliveryNodeName\\":\\"Website acceptance\\",\\"deliveryNodeStatus\\":\\"Reject\\",\\"deliveryOperatorRole\\":\\"Customer\\"}
     */
    extend?: string;
    /**
     * @remarks
     * The payment type.
     *
     * @example
     * PayAsYouGo
     */
    paymentType?: string;
    /**
     * @remarks
     * The website version.
     *
     * @example
     * 0
     */
    siteVersion?: string;
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
