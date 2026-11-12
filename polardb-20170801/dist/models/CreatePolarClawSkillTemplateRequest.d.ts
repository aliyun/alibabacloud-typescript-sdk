import * as $dara from '@darabonba/typescript';
export declare class CreatePolarClawSkillTemplateRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID. This parameter is required. If this parameter is not provided, an InvalidApplicationId.Malformed (HTTP 400) error is returned.
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
     * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to view all available regions for the current account, including region IDs.
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
     * The skill template parameters. Specify a standard JSON object string with the skill identifier as the key, such as {"skill1":{"skillName":"polarclawhub","version":"0.0.0"}}. JSON arrays or single-quote formats are not accepted.
     *
     * This parameter is required.
     *
     * @example
     * {"skill1":{"skillName":"polarclawhub","version":"0.0.0"}}
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
