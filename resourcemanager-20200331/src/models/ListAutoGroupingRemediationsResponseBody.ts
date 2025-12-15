// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoGroupingRemediationsResponseBodyRemediationsTargetResourceGroupInfo extends $dara.Model {
  /**
   * @remarks
   * The resource group name.
   * 
   * @example
   * ProjectA
   */
  resourceGroupDisplayName?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmygrk****wfa
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupDisplayName: 'ResourceGroupDisplayName',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupDisplayName: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoGroupingRemediationsResponseBodyRemediations extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The remediation record ID.
   * 
   * @example
   * 0028d4****cfe94956ef6708a373f396fbc840e306f
   */
  remediationId?: string;
  /**
   * @remarks
   * The remediation time.
   * 
   * @example
   * 2022-01-01 00:00:00
   */
  remediationTime?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * i-uf664f66v1****drkea4
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * You can obtain the resource type from the **Resource type** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * instance
   */
  resourceType?: string;
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
   * The information about the new resource group.
   */
  targetResourceGroupInfo?: ListAutoGroupingRemediationsResponseBodyRemediationsTargetResourceGroupInfo;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      remediationId: 'RemediationId',
      remediationTime: 'RemediationTime',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      service: 'Service',
      targetResourceGroupInfo: 'TargetResourceGroupInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      remediationId: 'string',
      remediationTime: 'string',
      resourceId: 'string',
      resourceType: 'string',
      service: 'string',
      targetResourceGroupInfo: ListAutoGroupingRemediationsResponseBodyRemediationsTargetResourceGroupInfo,
    };
  }

  validate() {
    if(this.targetResourceGroupInfo && typeof (this.targetResourceGroupInfo as any).validate === 'function') {
      (this.targetResourceGroupInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoGroupingRemediationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The remediation records.
   */
  remediations?: ListAutoGroupingRemediationsResponseBodyRemediations[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6F959E33-7B6D-5F58-BB0B-ED616DC7C70B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      remediations: 'Remediations',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      remediations: { 'type': 'array', 'itemType': ListAutoGroupingRemediationsResponseBodyRemediations },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.remediations)) {
      $dara.Model.validateArray(this.remediations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

