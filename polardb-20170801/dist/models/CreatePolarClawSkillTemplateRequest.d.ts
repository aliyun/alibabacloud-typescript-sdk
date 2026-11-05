import * as $dara from '@darabonba/typescript';
export declare class CreatePolarClawSkillTemplateRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The application type.
     *
     * > If you are calling this operation for the first time, you do not need to specify this parameter.
     *
     * @example
     * polardb_polarclaw
     */
    applicationType?: string;
    /**
     * @remarks
     * The region ID.
     *
     * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query all available regions for the current account, including region IDs.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The description of the skill template.
     *
     * @example
     * skill template for test.
     */
    skillTemplateDesc?: string;
    /**
     * @remarks
     * The name of the skill template.
     *
     * This parameter is required.
     *
     * @example
     * skill_template_test
     */
    skillTemplateName?: string;
    /**
     * @remarks
     * The skill template parameters.
     *
     * This parameter is required.
     *
     * @example
     * [{\\"skillName\\":\\"polarclawhub\\",\\"version\\":\\"0.0.0\\"},{\\"skillName\\":\\"github\\",\\"version\\":\\"1.0.0\\"}]
     */
    skillTemplateParam?: string;
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
