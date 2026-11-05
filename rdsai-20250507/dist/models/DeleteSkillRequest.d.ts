import * as $dara from '@darabonba/typescript';
export declare class DeleteSkillRequest extends $dara.Model {
    /**
     * @remarks
     * The unique identifier of the Skill.
     *
     * @example
     * 1fbb6d8b-8845-4e65-871e-48bc6830****
     */
    skillId?: string;
    /**
     * @remarks
     * The ContextDB workspace ID.
     *
     * @example
     * 00000000-0000-4000-8000-000000000001
     */
    workspaceId?: string;
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
