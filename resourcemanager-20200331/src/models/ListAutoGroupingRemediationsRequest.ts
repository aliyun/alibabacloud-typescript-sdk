// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoGroupingRemediationsRequest extends $dara.Model {
  /**
   * @remarks
   * The earliest remediation time. This parameter is empty by default.
   * 
   * @example
   * 2022-01-01 00:00:00
   */
  earliestRemediationTime?: string;
  /**
   * @remarks
   * The latest remediation time. This parameter is empty by default.
   * 
   * @example
   * 2022-02-01 00:00:00
   */
  latestRemediationTime?: string;
  /**
   * @remarks
   * The maximum number of data entries to return.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource ID,
   * 
   * @example
   * i-23v38****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type,
   * 
   * You can obtain the resource type from the **Resource type** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gr-acfnugygwms32yy
   */
  ruleId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud service.
   * 
   * You can obtain the ID from the **Service code** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * ecs
   */
  service?: string;
  /**
   * @remarks
   * The ID of the new resource group.
   * 
   * @example
   * rg-aekz26emqhc****
   */
  targetResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      earliestRemediationTime: 'EarliestRemediationTime',
      latestRemediationTime: 'LatestRemediationTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      ruleId: 'RuleId',
      service: 'Service',
      targetResourceGroupId: 'TargetResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      earliestRemediationTime: 'string',
      latestRemediationTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceId: 'string',
      resourceType: 'string',
      ruleId: 'string',
      service: 'string',
      targetResourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

