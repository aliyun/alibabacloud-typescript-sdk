// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosticMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page in a paging query. Maximum value: 100.
   * 
   * Default value:
   * 
   * - If this parameter is not set, the default value is 10.
   * - If the value is set to a number greater than 100, the default value is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The list of diagnostic metrics.
   */
  metricIds?: string[];
  /**
   * @remarks
   * The pagination token. Set this parameter to the `NextToken` value returned in the previous call. You do not need to set this parameter for the first request.
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
   * The supported resource type.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      metricIds: 'MetricIds',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      metricIds: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metricIds)) {
      $dara.Model.validateArray(this.metricIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

