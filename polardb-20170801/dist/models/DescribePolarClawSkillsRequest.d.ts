import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawSkillsRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies the agent workspace perspective. If this parameter is specified, the Disabled and AvailableToAgent fields are returned based on the specified agent. If this parameter is not specified, the default agent is used.
     *
     * @example
     * test1
     */
    agentId?: string;
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The page number. The value must be an integer greater than 0 and less than or equal to the maximum value of the Integer data type.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values: 30, 50, and 100. Default value: 30.
     *
     * @example
     * 30
     */
    pageSize?: number;
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
