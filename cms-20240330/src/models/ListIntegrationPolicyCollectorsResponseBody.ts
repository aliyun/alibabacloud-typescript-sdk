// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddonMeta } from "./AddonMeta";


export class ListIntegrationPolicyCollectorsResponseBodyCollectorsConditions extends $dara.Model {
  /**
   * @example
   * 2024-08-27T13:59:23+08:00
   */
  firstTransitionTime?: string;
  /**
   * @example
   * 2024-08-27T13:59:23+08:00
   */
  lastTransitionTime?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * Probe
   */
  reason?: string;
  /**
   * @example
   * True
   */
  status?: string;
  /**
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
   * @example
   * sg-xxxxx
   */
  securityGroupId?: string;
  /**
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
   * @example
   * 10.10.10.10
   */
  hostIp?: string;
  /**
   * @example
   * 11.193.82.198
   */
  ip?: string;
  /**
   * @example
   * false
   */
  managed?: boolean;
  managedInfo?: ListIntegrationPolicyCollectorsResponseBodyCollectorsWorkloadsManagedInfo;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * exporter-xxx
   */
  name?: string;
  /**
   * @example
   * prod-db
   */
  namespace?: string;
  /**
   * @example
   * Deployment
   */
  ownerReferenceKind?: string;
  /**
   * @example
   * exporter
   */
  ownerReferenceName?: string;
  /**
   * @example
   * 2024-08-27T13:59:23+08:00
   */
  startTime?: string;
  /**
   * @example
   * {}
   */
  status?: string;
  /**
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
  addonMeta?: AddonMeta;
  /**
   * @example
   * collector-kkxx
   */
  collectorName?: string;
  /**
   * @example
   * Exporter
   */
  collectorType?: string;
  conditions?: ListIntegrationPolicyCollectorsResponseBodyCollectorsConditions[];
  /**
   * @example
   * false
   */
  managed?: boolean;
  releaseName?: string;
  /**
   * @example
   * xx
   */
  state?: string;
  /**
   * @example
   * 2.6.2
   */
  version?: string;
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
  collectors?: ListIntegrationPolicyCollectorsResponseBodyCollectors[];
  /**
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

