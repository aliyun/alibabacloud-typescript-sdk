import * as $dara from '@darabonba/typescript';
export declare class UpdateApiKeyQuotaShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The instance name.
     *
     * @example
     * rds_copilot***_public_cn-*********6
     */
    instanceId?: string;
    /**
     * @remarks
     * The list of API keys.
     */
    keysShrink?: string;
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
