import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawSkillTemplateRequest extends $dara.Model {
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
     * > If you are calling this operation for the first time, you do not need to specify this parameter.
     *
     * @example
     * polardb_polarclaw
     */
    applicationType?: string;
    /**
     * @remarks
     * The region ID.
     * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query available regions.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The skill template ID.
     *
     * This parameter is required.
     *
     * @example
     * pcpg-skill-**************
     */
    skillTemplateId?: string;
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
