// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddonMeta } from "./AddonMeta";


export class ListIntegrationPolicyCollectorsResponseBodyCollectorsConditions extends $dara.Model {
  /**
   * @remarks
   * The time of the first transition, in ISO 8601 format, including the UTC identifier or time zone offset.
   * 
   * @example
   * 2024-08-27T13:59:23+08:00
   */
  firstTransitionTime?: string;
  /**
   * @remarks
   * The time of the last transition, in ISO 8601 format, including the UTC identifier or time zone offset.
   * 
   * @example
   * 2024-08-27T13:59:23+08:00
   */
  lastTransitionTime?: string;
  /**
   * @remarks
   * The condition details.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The reason for the failure.
   * 
   * @example
   * Probe
   */
  reason?: string;
  /**
   * @remarks
   * The conditions.
   * 
   * @example
   * True
   */
  status?: string;
  /**
   * @remarks
   * The type of the condition.
   * 
   * @example
   * Ready
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      firstTransitionTime: 'firstTransitionTime',
      lastTransitionTime: 'lastTransitionTime',
      message: 'message',
      reason: 'reason',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstTransitionTime: 'string',
      lastTransitionTime: 'string',
      message: 'string',
      reason: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationPolicyCollectorsResponseBodyCollectorsWorkloadsManagedInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-xxxxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-xxxxxx
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'securityGroupId',
      vswitchId: 'vswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationPolicyCollectorsResponseBodyCollectorsWorkloads extends $dara.Model {
  /**
   * @remarks
   * The IP address of the host.
   * 
   * @example
   * 10.10.10.10
   */
  hostIp?: string;
  /**
   * @remarks
   * The IP address of the workload.
   * 
   * @example
   * 11.193.82.198
   */
  ip?: string;
  /**
   * @remarks
   * Indicates whether the component is managed.
   * 
   * @example
   * false
   */
  managed?: boolean;
  /**
   * @remarks
   * The policy management information.
   */
  managedInfo?: ListIntegrationPolicyCollectorsResponseBodyCollectorsWorkloadsManagedInfo;
  /**
   * @remarks
   * The condition details.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The name of the workload.
   * 
   * @example
   * exporter-xxx
   */
  name?: string;
  /**
   * @remarks
   * The namespace of the workload.
   * 
   * @example
   * prod-db
   */
  namespace?: string;
  /**
   * @remarks
   * The kind of the owner reference.
   * 
   * @example
   * Deployment
   */
  ownerReferenceKind?: string;
  /**
   * @remarks
   * The name of the owner reference.
   * 
   * @example
   * exporter
   */
  ownerReferenceName?: string;
  /**
   * @remarks
   * The start time, in ISO 8601 format, including the UTC identifier or time zone offset.
   * 
   * @example
   * 2024-08-27T13:59:23+08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * {}
   */
  status?: string;
  /**
   * @remarks
   * The version of the workload.
   * 
   * @example
   * v2.4.4
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      hostIp: 'hostIp',
      ip: 'ip',
      managed: 'managed',
      managedInfo: 'managedInfo',
      message: 'message',
      name: 'name',
      namespace: 'namespace',
      ownerReferenceKind: 'ownerReferenceKind',
      ownerReferenceName: 'ownerReferenceName',
      startTime: 'startTime',
      status: 'status',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostIp: 'string',
      ip: 'string',
      managed: 'boolean',
      managedInfo: ListIntegrationPolicyCollectorsResponseBodyCollectorsWorkloadsManagedInfo,
      message: 'string',
      name: 'string',
      namespace: 'string',
      ownerReferenceKind: 'string',
      ownerReferenceName: 'string',
      startTime: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.managedInfo && typeof (this.managedInfo as any).validate === 'function') {
      (this.managedInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationPolicyCollectorsResponseBodyCollectors extends $dara.Model {
  /**
   * @remarks
   * The add-on details.
   */
  addonMeta?: AddonMeta;
  /**
   * @remarks
   * The name of the collector.
   * 
   * @example
   * collector-kkxx
   */
  collectorName?: string;
  /**
   * @remarks
   * The type of the collector.
   * 
   * @example
   * Exporter
   */
  collectorType?: string;
  /**
   * @remarks
   * The conditions.
   */
  conditions?: ListIntegrationPolicyCollectorsResponseBodyCollectorsConditions[];
  /**
   * @remarks
   * Indicates whether the component is managed.
   * 
   * @example
   * false
   */
  managed?: boolean;
  /**
   * @remarks
   * The name of the add-on release.
   * 
   * @example
   * ecs-loong-collector-i-f8z1176fg57rlwmc1rfi
   */
  releaseName?: string;
  /**
   * @remarks
   * The state of the collector.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The version of the component.
   * 
   * @example
   * 2.6.2
   */
  version?: string;
  /**
   * @remarks
   * The list of workloads.
   */
  workloads?: ListIntegrationPolicyCollectorsResponseBodyCollectorsWorkloads[];
  static names(): { [key: string]: string } {
    return {
      addonMeta: 'addonMeta',
      collectorName: 'collectorName',
      collectorType: 'collectorType',
      conditions: 'conditions',
      managed: 'managed',
      releaseName: 'releaseName',
      state: 'state',
      version: 'version',
      workloads: 'workloads',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonMeta: AddonMeta,
      collectorName: 'string',
      collectorType: 'string',
      conditions: { 'type': 'array', 'itemType': ListIntegrationPolicyCollectorsResponseBodyCollectorsConditions },
      managed: 'boolean',
      releaseName: 'string',
      state: 'string',
      version: 'string',
      workloads: { 'type': 'array', 'itemType': ListIntegrationPolicyCollectorsResponseBodyCollectorsWorkloads },
    };
  }

  validate() {
    if(this.addonMeta && typeof (this.addonMeta as any).validate === 'function') {
      (this.addonMeta as any).validate();
    }
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(Array.isArray(this.workloads)) {
      $dara.Model.validateArray(this.workloads);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationPolicyCollectorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of collectors.
   */
  collectors?: ListIntegrationPolicyCollectorsResponseBodyCollectors[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B9377D9-C56B-5C2E-A8A4-A01D6CC3F4B8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      collectors: 'collectors',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectors: { 'type': 'array', 'itemType': ListIntegrationPolicyCollectorsResponseBodyCollectors },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.collectors)) {
      $dara.Model.validateArray(this.collectors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

