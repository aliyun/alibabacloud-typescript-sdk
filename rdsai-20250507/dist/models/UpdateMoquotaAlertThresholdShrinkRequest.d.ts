import * as $dara from '@darabonba/typescript';
export declare class UpdateMOQuotaAlertThresholdShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The list of API keys.
     *
     * This parameter is required.
     */
    apikeyShrink?: string;
    /**
     * @remarks
     * The instance name.
     *
     * This parameter is required.
     *
     * @example
     * rds_copilot***_public_cn-*********6
     */
    instanceId?: string;
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
