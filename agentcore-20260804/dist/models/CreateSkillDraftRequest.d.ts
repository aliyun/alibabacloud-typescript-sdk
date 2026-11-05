import * as $dara from '@darabonba/typescript';
export declare class CreateSkillDraftRequestBody extends $dara.Model {
    /**
     * @remarks
     * The version from which to fork the draft. If not specified, a new Skill is created.
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
     * The Skill card JSON string that contains the complete Skill information.
     *
     * @example
     * {"name":"customer-service-skill","description":"..."}
     */
    skillCard?: string;
    /**
     * @remarks
     * The Skill name.
     *
     * This parameter is required.
     *
     * @example
     * customer-service-skill
     */
    skillName?: string;
    /**
     * @remarks
     * The draft version number. If not specified, the version number is automatically incremented.
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
