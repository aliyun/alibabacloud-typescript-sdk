// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LookupResourceGroupEventsResponseBodyEventsSourceResourceGroupInfo extends $dara.Model {
  /**
   * @example
   * TestGroupA
   */
  resourceGroupDisplayName?: string;
  /**
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
   * @example
   * TestGroupB
   */
  resourceGroupDisplayName?: string;
  /**
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
   * @example
   * Add
   */
  changeType?: string;
  /**
   * @example
   * 2025-12-04T18:35:17Z
   */
  eventTime?: string;
  /**
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @example
   * ProjectA
   */
  resourceGroupDisplayName?: string;
  /**
   * @example
   * rg-acfm2sohr74****
   */
  resourceGroupId?: string;
  /**
   * @example
   * i-wz9fpfe64****
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
  sourceResourceGroupInfo?: LookupResourceGroupEventsResponseBodyEventsSourceResourceGroupInfo;
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
  events?: LookupResourceGroupEventsResponseBodyEvents[];
  /**
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
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

