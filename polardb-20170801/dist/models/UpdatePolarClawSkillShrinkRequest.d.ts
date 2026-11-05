import * as $dara from '@darabonba/typescript';
export declare class UpdatePolarClawSkillShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The skill API key. An empty string indicates that the key is deleted.
     *
     * @example
     * my-api
     */
    apiKey?: string;
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-xxx
     */
    applicationId?: string;
    /**
     * @remarks
     * Specifies whether the skill is enabled.
     *
     * @example
     * true
     */
    enabled?: boolean;
    /**
     * @remarks
     * The environment variables. This is a map of key-value pairs. An empty value indicates that the variable is deleted.
     *
     * @example
     * {"NETA_TOKEN":"my-token"}
     */
    envShrink?: string;
    /**
     * @remarks
     * The skill identifier key.
     *
     * This parameter is required.
     *
     * @example
     * alibacloud-rds-copilot
     */
    skillKey?: string;
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
