import * as $dara from '@darabonba/typescript';
export declare class InstallPolarClawSkillRequest extends $dara.Model {
    /**
     * @remarks
     * The target agent in the workspace. If this parameter is not specified, the default agent is used.
     *
     * @example
     * test1
     */
    agentId?: string;
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
     * Specifies whether to force reinstallation.
     *
     * @example
     * true
     */
    force?: boolean;
    /**
     * @remarks
     * The scope. Valid values: workspace (default) and global (shared directory). This parameter is mutually exclusive with AgentId.
     *
     * @example
     * global
     */
    scope?: string;
    /**
     * @remarks
     * The version number.
     *
     * @example
     * 1.2.0
     */
    skillVersion?: string;
    /**
     * @remarks
     * The skill identifier.
     *
     * @example
     * alibacloud-rds-copilot
     */
    slug?: string;
    /**
     * @remarks
     * The source.
     *
     * @example
     * clawhub
     */
    source?: string;
    /**
     * @remarks
     * The URL for installing the skill. This parameter is not supported. If a value is provided, a 400 InvalidParameters error is returned.
     *
     * @example
     * https://example.com/skill.tar.gz
     */
    url?: string;
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
