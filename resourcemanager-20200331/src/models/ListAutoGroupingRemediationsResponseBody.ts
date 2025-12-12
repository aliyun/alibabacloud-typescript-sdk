// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoGroupingRemediationsResponseBodyRemediationsTargetResourceGroupInfo extends $dara.Model {
  /**
   * @example
   * ProjectA
   */
  resourceGroupDisplayName?: string;
  /**
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
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @example
   * 0028d4****cfe94956ef6708a373f396fbc840e306f
   */
  remediationId?: string;
  /**
   * @example
   * 2022-01-01 00:00:00
   */
  remediationTime?: string;
  /**
   * @example
   * i-uf664f66v1****drkea4
   */
  resourceId?: string;
  /**
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @example
   * ecs
   */
  service?: string;
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
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  remediations?: ListAutoGroupingRemediationsResponseBodyRemediations[];
  /**
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

