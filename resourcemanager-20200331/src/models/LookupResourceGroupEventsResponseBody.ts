// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LookupResourceGroupEventsResponseBodyEventsSourceResourceGroupInfo extends $dara.Model {
  /**
   * @remarks
   * The resource group name.
   * 
   * @example
   * TestGroupA
   */
  resourceGroupDisplayName?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekz25pfurj****
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

export class LookupResourceGroupEventsResponseBodyEventsTargetResourceGroupInfo extends $dara.Model {
  /**
   * @remarks
   * The resource group name.
   * 
   * @example
   * TestGroupB
   */
  resourceGroupDisplayName?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmwfrxcre****
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

export class LookupResourceGroupEventsResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The type of the resource change event.
   * 
   * @example
   * Add
   */
  changeType?: string;
  /**
   * @remarks
   * The time when the event was triggered.
   * 
   * @example
   * 2025-12-04T18:35:17Z
   */
  eventTime?: string;
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
   * rg-acfm2sohr74****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * i-wz9fpfe64****
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
   * The service code.
   * 
   * You can obtain the code from the **Service code** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * ecs
   */
  service?: string;
  /**
   * @remarks
   * The source resource group.
   */
  sourceResourceGroupInfo?: LookupResourceGroupEventsResponseBodyEventsSourceResourceGroupInfo;
  /**
   * @remarks
   * The destination resource group.
   */
  targetResourceGroupInfo?: LookupResourceGroupEventsResponseBodyEventsTargetResourceGroupInfo;
  static names(): { [key: string]: string } {
    return {
      changeType: 'ChangeType',
      eventTime: 'EventTime',
      regionId: 'RegionId',
      resourceGroupDisplayName: 'ResourceGroupDisplayName',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      service: 'Service',
      sourceResourceGroupInfo: 'SourceResourceGroupInfo',
      targetResourceGroupInfo: 'TargetResourceGroupInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'string',
      eventTime: 'string',
      regionId: 'string',
      resourceGroupDisplayName: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      service: 'string',
      sourceResourceGroupInfo: LookupResourceGroupEventsResponseBodyEventsSourceResourceGroupInfo,
      targetResourceGroupInfo: LookupResourceGroupEventsResponseBodyEventsTargetResourceGroupInfo,
    };
  }

  validate() {
    if(this.sourceResourceGroupInfo && typeof (this.sourceResourceGroupInfo as any).validate === 'function') {
      (this.sourceResourceGroupInfo as any).validate();
    }
    if(this.targetResourceGroupInfo && typeof (this.targetResourceGroupInfo as any).validate === 'function') {
      (this.targetResourceGroupInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupResourceGroupEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried events.
   */
  events?: LookupResourceGroupEventsResponseBodyEvents[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F7701451-340B-5CB3-AEA7-7D831F7F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': LookupResourceGroupEventsResponseBodyEvents },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

