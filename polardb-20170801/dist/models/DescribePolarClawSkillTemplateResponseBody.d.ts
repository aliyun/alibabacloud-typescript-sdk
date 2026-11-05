import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawSkillTemplateResponseBodySkillTemplates extends $dara.Model {
    /**
     * @remarks
     * Indicates whether it is actually created.
     *
     * @example
     * 2026-03-21 12:00:00
     */
    created?: string;
    /**
     * @remarks
     * The last modification time of the parameter template.
     *
     * @example
     * 2026-04-23 23:00:00
     */
    modified?: string;
    /**
     * @remarks
     * The description of the skill template.
     *
     * @example
     * skill template for test
     */
    skillTemplateDesc?: string;
    /**
     * @remarks
     * The skill template ID.
     *
     * @example
     * pcpg-skill-**************
     */
    skillTemplateId?: string;
    /**
     * @remarks
     * The name of the skill template.
     *
     * @example
     * skill-template-test
     */
    skillTemplateName?: string;
    /**
     * @remarks
     * The list of associated skill details.
     */
    skills?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The source application ID.
     *
     * @example
     * pa-**************
     */
    srcApplicationId?: string;
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
export declare class DescribePolarClawSkillTemplateResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * CDB3258F-B5DE-43C4-8935-CBA0CA******
     */
    requestId?: string;
    /**
     * @remarks
     * The skill template group.
     */
    skillTemplates?: DescribePolarClawSkillTemplateResponseBodySkillTemplates[];
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
