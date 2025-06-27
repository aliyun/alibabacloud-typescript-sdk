// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosticMetricSetsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * Default value:
   * 
   * *   If this parameter is left empty, the default value is 10.
   * *   If you set this parameter to a value that is greater than 100, the default value is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The IDs of diagnostic metric sets.
   */
  metricSetIds?: string[];
  /**
   * @remarks
   * The pagination token that is used in the request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the diagnostic metric set. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource type supported by the diagnostic metric set.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The type of the diagnostic metric set. Valid values:
   * 
   * *   User: custom diagnostic metric set
   * *   Common: public diagnostic metric set
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

