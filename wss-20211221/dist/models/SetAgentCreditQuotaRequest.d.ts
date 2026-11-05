import * as $dara from '@darabonba/typescript';
export declare class SetAgentCreditQuotaRequest extends $dara.Model {
    /**
     * @remarks
     * The list of Agent IDs.
     */
    agentIds?: string[];
    /**
     * @remarks
     * The Agent type.
     *
     * @example
     * JVSClaw
     */
    agentType?: string;
    /**
     * @remarks
     * The business type.
     *
     * @example
     * BUSINESS
     */
    bizType?: string;
    /**
     * @remarks
     * The credit quota.
     *
     * @example
     * 200
     */
    creditQuota?: number;
    /**
     * @remarks
     * The operator scenarios type. Valid values:
     * - If this parameter is not specified or is set to NaturalMonthlyOwn: calendar month exclusive.
     * - JzYearlyShare: Jiaozi yearly shared.
     * - JzYearlyOwn: Jiaozi yearly exclusive.
     *
     * @example
     * NaturalMonthlyOwn
     */
    sceneType?: string;
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
