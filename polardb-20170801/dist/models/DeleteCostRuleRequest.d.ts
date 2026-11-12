import * as $dara from '@darabonba/typescript';
export declare class DeleteCostRuleRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the cost rule.
     *
     * This parameter is required.
     *
     * @example
     * 924d450014e64e88ac6e8486f8e990**
     */
    costRuleId?: string;
    /**
     * @remarks
     * The gateway instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pg-xxxxxxxx
     */
    gwClusterId?: string;
    /**
     * @remarks
     * The region ID.
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
