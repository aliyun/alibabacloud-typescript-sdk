// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosticMetricSetsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: 100.
   * 
   * Default value:
   * 
   * - If this parameter is not specified, the default value is 10.
   * - If the specified value is greater than 100, the default value is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The list of diagnostic metric set IDs.
   */
  metricSetIds?: string[];
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous call. You do not need to set this parameter for the first request.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The type of the diagnostic metric set. Valid values:
   * 
   * - User: user.
   * - Common: common.
   * 
   * Default value: User.
   * 
   * @example
   * User
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      metricSetIds: 'MetricSetIds',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      metricSetIds: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      regionId: 'string',
      resourceType: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metricSetIds)) {
      $dara.Model.validateArray(this.metricSetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

