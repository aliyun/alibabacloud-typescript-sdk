import * as $dara from '@darabonba/typescript';
export declare class CreateGwConsumerOrderRequest extends $dara.Model {
    /**
     * @remarks
     * The idempotency token.
     *
     * @example
     * 6000170000591aed949d0f54a343f1a42***********
     */
    clientToken?: string;
    /**
     * @remarks
     * The expiration time of the API key. Specify the time in the ISO 8601 standard. The specified time must be later than the current time.
     *
     * @example
     * 2027-07-23T03:09:08Z
     */
    expireTime?: string;
    /**
     * @remarks
     * The ID of the AI gateway instance.
     *
     * This parameter is required.
     *
     * @example
     * pg-2ze24rr575j5b18cg
     */
    gatewayId?: string;
    /**
     * @remarks
     * The number of API keys to generate, which indicates the number of capacity plans to order. Valid values: 1 to 30.
     *
     * This parameter is required.
     *
     * @example
     * 6
     */
    keyCount?: number;
    /**
     * @remarks
     * The number of credits for each API key. The value must be a string representing a positive integer.
     *
     * This parameter is required.
     *
     * @example
     * 3000
     */
    packageSpec?: string;
    /**
     * @remarks
     * The region ID.
     * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to view region details.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
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
