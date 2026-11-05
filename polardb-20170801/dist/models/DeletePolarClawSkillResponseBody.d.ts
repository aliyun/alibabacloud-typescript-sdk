import * as $dara from '@darabonba/typescript';
export declare class DeletePolarClawSkillResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * CD3FA5F3-FAF3-44CA-AFFF-BAF869******
     */
    requestId?: string;
    /**
     * @remarks
     * The name of the skill.
     *
     * @example
     * polarclawhub
     */
    skillName?: string;
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
