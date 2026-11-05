import * as $dara from '@darabonba/typescript';
export declare class DeletePolarClawSkillRequest extends $dara.Model {
    /**
     * @remarks
     * The region ID of the region where the parameter template resides.
     *
     * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query region IDs.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The name of the skill.
     *
     * This parameter is required.
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
