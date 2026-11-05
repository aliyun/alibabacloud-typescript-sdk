import * as $dara from '@darabonba/typescript';
export declare class ModifyPolarClawSkillRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The modification type. Valid values:
     * * **evaluate**: Evaluates the skill.
     *
     * This parameter is required.
     *
     * @example
     * evaluate
     */
    modifyType?: string;
    /**
     * @remarks
     * The destination path.
     *
     * @example
     * /home/node/.openclaw/workspace/skills/polarclawhub
     */
    path?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The skill name.
     *
     * This parameter is required.
     *
     * @example
     * polarclawhub
     */
    skillName?: string;
    /**
     * @remarks
     * The skill version.
     *
     * @example
     * 0.0.0
     */
    skillVersion?: string;
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
