import * as $dara from '@darabonba/typescript';
export declare class UpdatePolarClawAgentSkillsShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The PolarClaw Agent ID.
     *
     * This parameter is required.
     *
     * @example
     * work
     */
    agentId?: string;
    /**
     * @remarks
     * The PolarClaw application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-xxx
     */
    applicationId?: string;
    /**
     * @remarks
     * The skill allowlist. A value of null indicates that all skills are allowed.
     *
     * @example
     * ["alibacloud-rds-copilot"]
     */
    skillsShrink?: string;
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
