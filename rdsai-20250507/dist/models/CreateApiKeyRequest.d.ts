import * as $dara from '@darabonba/typescript';
export declare class CreateApiKeyRequest extends $dara.Model {
    /**
     * @remarks
     * The daily token quota for the API key.
     *
     * @example
     * 1000000000
     */
    dailyTokenQuota?: number;
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rds_copilot***_public_cn-*********6
     */
    instanceId?: string;
    /**
     * @remarks
     * The name of the API key.
     *
     * @example
     * api-*****
     */
    keyName?: string;
    /**
     * @remarks
     * The quota limit percentage.
     *
     * @example
     * 0.2
     */
    limitRate?: number;
    /**
     * @remarks
     * The quota limit type. Valid values:
     * - ratio: percentage.
     * - fixed: fixed value.
     * - auto: automatic allocation.
     *
     * @example
     * fixed
     */
    limitType?: string;
    /**
     * @remarks
     * The number of API keys to create. Default value: **1**.
     *
     * @example
     * 1
     */
    quantity?: number;
    /**
     * @remarks
     * The ARN of the RAM role bound to the API key. The account to which the role belongs must be the same as the caller account.
     *
     * @example
     * acs:ram::1234567890123456:role/example-role
     */
    roleArn?: string;
    /**
     * @remarks
     * The name of the RAM role bound to the API key.
     *
     * @example
     * example-role
     */
    roleName?: string;
    /**
     * @remarks
     * The token quota for the current key.
     *
     * @example
     * 100000
     */
    tokenQuota?: number;
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
