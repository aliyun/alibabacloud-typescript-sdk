import * as $dara from '@darabonba/typescript';
export declare class OnlineSkillRequestBody extends $dara.Model {
    /**
     * @remarks
     * The operation scope. Valid values:
     * - skill: the entire Skill.
     * - version: a specified version.
     *
     * @example
     * version
     */
    scope?: string;
    /**
     * @remarks
     * The Skill version number.
     *
     * @example
     * 0.0.1
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
export declare class OnlineSkillRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: OnlineSkillRequestBody;
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
