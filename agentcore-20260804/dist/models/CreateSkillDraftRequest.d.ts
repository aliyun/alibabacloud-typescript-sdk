import * as $dara from '@darabonba/typescript';
export declare class CreateSkillDraftRequestBody extends $dara.Model {
    /**
     * @remarks
     * The version to fork from. If you do not specify this parameter, a new skill is created.
     *
     * @example
     * 0.0.1
     */
    basedOnVersion?: string;
    /**
     * @remarks
     * The commit message.
     *
     * @example
     * Initial version
     */
    commitMsg?: string;
    /**
     * @remarks
     * The JSON string of the skill card, which contains the complete skill information.
     *
     * @example
     * {"name":"customer-service-skill","description":"..."}
     */
    skillCard?: string;
    /**
     * @remarks
     * The skill name.
     *
     * This parameter is required.
     *
     * @example
     * customer-service-skill
     */
    skillName?: string;
    /**
     * @remarks
     * Specifies the draft version number. If not specified, the version number automatically increments.
     *
     * @example
     * 0.0.2
     */
    targetVersion?: string;
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
export declare class CreateSkillDraftRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: CreateSkillDraftRequestBody;
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
