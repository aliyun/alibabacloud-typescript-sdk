// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosticMetricSetsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page for a paging query. Maximum value: 100.
   * 
   * Default value:
   * 
   * - If no Settings are specified, the default value is 10.
   * - If the Settings value is greater than 100, the default value is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The IDs of the diagnostic metric sets.
   */
  metricSetIds?: string[];
  /**
   * @remarks
   * The pagination token. Set the value to the `NextToken` value returned from the previous call. Leave this parameter empty for the first call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * - User: user-created.
   * - Common: public.
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

