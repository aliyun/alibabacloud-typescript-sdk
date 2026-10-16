// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoGroupingRemediationsRequest extends $dara.Model {
  /**
   * @remarks
   * The earliest time. This parameter is empty by default. The format is YYYY-MM-DD HH:mm:ss without a time zone identifier.
   * 
   * @example
   * 2022-01-01 00:00:00
   */
  earliestRemediationTime?: string;
  /**
   * @remarks
   * The latest time. This parameter is empty by default. The format is YYYY-MM-DD HH:mm:ss without a time zone identifier.
   * 
   * @example
   * 2022-02-01 00:00:00
   */
  latestRemediationTime?: string;
  /**
   * @remarks
   * The maximum number of records to return in this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that marks the position from which to start reading. If this parameter is left empty, data is read from the beginning.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * i-23v38****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * You can obtain the resource type from the **Resource Type** column in [Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
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
   * The cloud service ID.
   * 
   * You can obtain the cloud service ID from the **Cloud Service Code** column in [Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * ecs
   */
  service?: string;
  /**
   * @remarks
   * The ID of the target resource group for remediation.
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

