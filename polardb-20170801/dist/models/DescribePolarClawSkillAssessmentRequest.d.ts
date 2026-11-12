import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawSkillAssessmentRequest extends $dara.Model {
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
     * The region ID.
     *
     * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query all available regions for the current account, including region IDs.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The name of the skill. This parameter is required. If it is not provided, the API returns an InvalidParameter.SkillName error (HTTP 400).
     *
     * @example
     * polarclawhub
     */
    skillName?: string;
    /**
     * @remarks
     * The version of the skill. This parameter is required. If it is not provided, the API returns an InvalidParameter.SkillVersion error (HTTP 400).
     *
     * @example
     * 1.0.0
     */
    skillVersion?: string;
    /**
     * @remarks
     * The source of the skill. Valid values: PUBLIC, SELF, and OTHER. This parameter is required. If it is not provided, the API returns an InvalidParameter.Source error (HTTP 400).
     *
     * @example
     * PUBLIC
     */
    source?: string;
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
