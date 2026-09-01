// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultiUserInstancesResponseBodyDaInstanceAntiRansomwareCapacity extends $dara.Model {
  /**
   * @remarks
   * The assigned anti-ransomware capacity. Unit: GB.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * The anti-ransomware capacity of the administrator account. Unit: GB.
   * 
   * @example
   * 14
   */
  count?: number;
  /**
   * @remarks
   * The used anti-ransomware capacity. Unit: GB.
   * 
   * @example
   * 2
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      assigned: 'Assigned',
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigned: 'number',
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodyDaInstanceCspmCapacity extends $dara.Model {
  /**
   * @remarks
   * The assigned number of cloud platform configuration check scans. Unit: scans/month.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * The purchased number of cloud platform configuration check scans. Unit: scans/month.
   * 
   * @example
   * 180000
   */
  count?: number;
  /**
   * @remarks
   * The used number of cloud platform configuration check scans. Unit: scans/month.
   * 
   * @example
   * 31569
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      assigned: 'Assigned',
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigned: 'number',
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodyDaInstanceCspmInstanceCapacity extends $dara.Model {
  assigned?: number;
  count?: number;
  used?: number;
  static names(): { [key: string]: string } {
    return {
      assigned: 'Assigned',
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigned: 'number',
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodyDaInstanceHoneypotCapacity extends $dara.Model {
  /**
   * @remarks
   * The assigned honeypot quota.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * The purchased honeypot quota.
   * 
   * @example
   * 45
   */
  count?: number;
  /**
   * @remarks
   * The used number of cloud honeypot authorizations.
   * 
   * @example
   * 9
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      assigned: 'Assigned',
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigned: 'number',
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodyDaInstanceImageScanCapacity extends $dara.Model {
  /**
   * @remarks
   * The assigned image scan quota.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * The purchased image scan quota.
   * 
   * @example
   * 60
   */
  count?: number;
  /**
   * @remarks
   * The used image scan quota.
   * 
   * @example
   * 1
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      assigned: 'Assigned',
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigned: 'number',
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodyDaInstanceRaspCapacity extends $dara.Model {
  /**
   * @remarks
   * The assigned number of application protection quotas. Unit: quotas/month.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * The purchased number of application protection quotas. Unit: quotas/month.
   * 
   * @example
   * 7
   */
  count?: number;
  /**
   * @remarks
   * The used number of application protection quotas. Unit: quotas/month.
   * 
   * @example
   * 6
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      assigned: 'Assigned',
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigned: 'number',
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodyDaInstanceSdkCapacity extends $dara.Model {
  /**
   * @remarks
   * The assigned malicious file detection SDK quota.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * The purchased malicious file detection SDK quota.
   * 
   * @example
   * 50
   */
  count?: number;
  /**
   * @remarks
   * The used number of malicious file detection SDK authorizations.
   * 
   * @example
   * 0
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      assigned: 'Assigned',
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigned: 'number',
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodyDaInstanceSlsCapacity extends $dara.Model {
  /**
   * @remarks
   * The assigned log storage capacity. Unit: GB.
   * 
   * @example
   * 10
   */
  assigned?: number;
  /**
   * @remarks
   * The log storage capacity of the administrator account. Unit: GB.
   * 
   * @example
   * 150
   */
  count?: number;
  /**
   * @remarks
   * The used log storage capacity. Unit: GB.
   * 
   * @example
   * 5
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      assigned: 'Assigned',
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigned: 'number',
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodyDaInstanceThreatAnalysisCapacity extends $dara.Model {
  /**
   * @remarks
   * The assigned threat analysis capacity. Unit: GB.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * The purchased threat analysis capacity. Unit: GB.
   * 
   * @example
   * 3000
   */
  count?: number;
  /**
   * @remarks
   * The used threat analysis capacity. Unit: GB.
   * 
   * @example
   * 1548
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      assigned: 'Assigned',
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigned: 'number',
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodyDaInstanceThreatAnalysisFlow extends $dara.Model {
  /**
   * @remarks
   * The assigned threat detection and response log ingestion traffic. Unit: GB/day.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * The purchased threat detection and response log ingestion traffic. Unit: GB/day.
   * 
   * @example
   * 300
   */
  count?: number;
  /**
   * @remarks
   * The used threat detection and response log ingestion traffic. Unit: GB/day.
   * 
   * @example
   * 0
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      assigned: 'Assigned',
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigned: 'number',
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodyDaInstanceVersionSummaryCoreCount extends $dara.Model {
  /**
   * @remarks
   * The assigned number of authorized cores.
   * 
   * @example
   * 4
   */
  assigned?: number;
  /**
   * @remarks
   * The purchased authorized core quota.
   * 
   * @example
   * 150
   */
  count?: number;
  /**
   * @remarks
   * The used number of authorized cores.
   * 
   * @example
   * 68
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      assigned: 'Assigned',
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigned: 'number',
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodyDaInstanceVersionSummaryEcsCount extends $dara.Model {
  /**
   * @remarks
   * The assigned number of purchased authorized servers.
   * 
   * @example
   * 3
   */
  assigned?: number;
  /**
   * @remarks
   * The purchased authorized server quota.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The used authorized server quota.
   * 
   * @example
   * 14
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      assigned: 'Assigned',
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigned: 'number',
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodyDaInstanceVersionSummary extends $dara.Model {
  /**
   * @remarks
   * The authorization type consumed during binding. Valid values:
   * 
   * @example
   * ASSET_AND_CORE
   */
  authBindType?: string;
  /**
   * @remarks
   * The usage and allocation of authorized core quotas for the administrator account.
   */
  coreCount?: ListMultiUserInstancesResponseBodyDaInstanceVersionSummaryCoreCount;
  /**
   * @remarks
   * The usage and allocation of authorized server quotas for the administrator account.
   */
  ecsCount?: ListMultiUserInstancesResponseBodyDaInstanceVersionSummaryEcsCount;
  /**
   * @remarks
   * The purchased Security Center edition. Valid values:
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      authBindType: 'AuthBindType',
      coreCount: 'CoreCount',
      ecsCount: 'EcsCount',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authBindType: 'string',
      coreCount: ListMultiUserInstancesResponseBodyDaInstanceVersionSummaryCoreCount,
      ecsCount: ListMultiUserInstancesResponseBodyDaInstanceVersionSummaryEcsCount,
      version: 'number',
    };
  }

  validate() {
    if(this.coreCount && typeof (this.coreCount as any).validate === 'function') {
      (this.coreCount as any).validate();
    }
    if(this.ecsCount && typeof (this.ecsCount as any).validate === 'function') {
      (this.ecsCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodyDaInstanceWebLockCapacity extends $dara.Model {
  /**
   * @remarks
   * The assigned tamper-proofing quota.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * The purchased tamper-proofing quota.
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * The used tamper-proofing quota.
   * 
   * @example
   * 3
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      assigned: 'Assigned',
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigned: 'number',
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodyDaInstance extends $dara.Model {
  /**
   * @remarks
   * The aliuid of the administrator account.
   * 
   * @example
   * 1766185894104675
   */
  aliUid?: number;
  /**
   * @remarks
   * The anti-ransomware capacity usage and allocation of the administrator account.
   */
  antiRansomwareCapacity?: ListMultiUserInstancesResponseBodyDaInstanceAntiRansomwareCapacity;
  /**
   * @remarks
   * The cloud platform configuration check scan usage and allocation of the administrator account.
   */
  cspmCapacity?: ListMultiUserInstancesResponseBodyDaInstanceCspmCapacity;
  cspmInstanceCapacity?: ListMultiUserInstancesResponseBodyDaInstanceCspmInstanceCapacity;
  /**
   * @remarks
   * The usage and allocation of honeypot quotas for the administrator account.
   */
  honeypotCapacity?: ListMultiUserInstancesResponseBodyDaInstanceHoneypotCapacity;
  /**
   * @remarks
   * The usage and allocation of image scan quotas for the administrator account.
   */
  imageScanCapacity?: ListMultiUserInstancesResponseBodyDaInstanceImageScanCapacity;
  /**
   * @remarks
   * The Security Center instance ID purchased by the administrator account.
   * 
   * @example
   * i-bp1gmm4pnacse343nqal
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance purchase type. Valid values:
   * 
   * @example
   * 0
   */
  instancePurchaseType?: number;
  /**
   * @remarks
   * The application protection usage and allocation of the administrator account.
   */
  raspCapacity?: ListMultiUserInstancesResponseBodyDaInstanceRaspCapacity;
  /**
   * @remarks
   * The usage and allocation of malicious file detection SDK quotas for the administrator account.
   */
  sdkCapacity?: ListMultiUserInstancesResponseBodyDaInstanceSdkCapacity;
  /**
   * @remarks
   * The log storage capacity usage and allocation of the administrator account.
   */
  slsCapacity?: ListMultiUserInstancesResponseBodyDaInstanceSlsCapacity;
  /**
   * @remarks
   * The instance status of the administrator account. Valid values:
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The threat analysis capacity usage and allocation of the administrator account.
   */
  threatAnalysisCapacity?: ListMultiUserInstancesResponseBodyDaInstanceThreatAnalysisCapacity;
  /**
   * @remarks
   * The usage and allocation of threat detection and response log ingestion traffic for the administrator account.
   */
  threatAnalysisFlow?: ListMultiUserInstancesResponseBodyDaInstanceThreatAnalysisFlow;
  /**
   * @remarks
   * The user type. Valid values:
   * 
   * @example
   * 1
   */
  userType?: number;
  /**
   * @remarks
   * The purchased Security Center edition. Valid values:
   * 
   * @example
   * 3
   */
  version?: number;
  /**
   * @remarks
   * The authorization usage statistics information for the administrator account.
   */
  versionSummary?: ListMultiUserInstancesResponseBodyDaInstanceVersionSummary[];
  /**
   * @remarks
   * The usage and allocation of tamper-proofing quotas for the administrator account.
   */
  webLockCapacity?: ListMultiUserInstancesResponseBodyDaInstanceWebLockCapacity;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      antiRansomwareCapacity: 'AntiRansomwareCapacity',
      cspmCapacity: 'CspmCapacity',
      cspmInstanceCapacity: 'CspmInstanceCapacity',
      honeypotCapacity: 'HoneypotCapacity',
      imageScanCapacity: 'ImageScanCapacity',
      instanceId: 'InstanceId',
      instancePurchaseType: 'InstancePurchaseType',
      raspCapacity: 'RaspCapacity',
      sdkCapacity: 'SdkCapacity',
      slsCapacity: 'SlsCapacity',
      status: 'Status',
      threatAnalysisCapacity: 'ThreatAnalysisCapacity',
      threatAnalysisFlow: 'ThreatAnalysisFlow',
      userType: 'UserType',
      version: 'Version',
      versionSummary: 'VersionSummary',
      webLockCapacity: 'WebLockCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      antiRansomwareCapacity: ListMultiUserInstancesResponseBodyDaInstanceAntiRansomwareCapacity,
      cspmCapacity: ListMultiUserInstancesResponseBodyDaInstanceCspmCapacity,
      cspmInstanceCapacity: ListMultiUserInstancesResponseBodyDaInstanceCspmInstanceCapacity,
      honeypotCapacity: ListMultiUserInstancesResponseBodyDaInstanceHoneypotCapacity,
      imageScanCapacity: ListMultiUserInstancesResponseBodyDaInstanceImageScanCapacity,
      instanceId: 'string',
      instancePurchaseType: 'number',
      raspCapacity: ListMultiUserInstancesResponseBodyDaInstanceRaspCapacity,
      sdkCapacity: ListMultiUserInstancesResponseBodyDaInstanceSdkCapacity,
      slsCapacity: ListMultiUserInstancesResponseBodyDaInstanceSlsCapacity,
      status: 'number',
      threatAnalysisCapacity: ListMultiUserInstancesResponseBodyDaInstanceThreatAnalysisCapacity,
      threatAnalysisFlow: ListMultiUserInstancesResponseBodyDaInstanceThreatAnalysisFlow,
      userType: 'number',
      version: 'number',
      versionSummary: { 'type': 'array', 'itemType': ListMultiUserInstancesResponseBodyDaInstanceVersionSummary },
      webLockCapacity: ListMultiUserInstancesResponseBodyDaInstanceWebLockCapacity,
    };
  }

  validate() {
    if(this.antiRansomwareCapacity && typeof (this.antiRansomwareCapacity as any).validate === 'function') {
      (this.antiRansomwareCapacity as any).validate();
    }
    if(this.cspmCapacity && typeof (this.cspmCapacity as any).validate === 'function') {
      (this.cspmCapacity as any).validate();
    }
    if(this.cspmInstanceCapacity && typeof (this.cspmInstanceCapacity as any).validate === 'function') {
      (this.cspmInstanceCapacity as any).validate();
    }
    if(this.honeypotCapacity && typeof (this.honeypotCapacity as any).validate === 'function') {
      (this.honeypotCapacity as any).validate();
    }
    if(this.imageScanCapacity && typeof (this.imageScanCapacity as any).validate === 'function') {
      (this.imageScanCapacity as any).validate();
    }
    if(this.raspCapacity && typeof (this.raspCapacity as any).validate === 'function') {
      (this.raspCapacity as any).validate();
    }
    if(this.sdkCapacity && typeof (this.sdkCapacity as any).validate === 'function') {
      (this.sdkCapacity as any).validate();
    }
    if(this.slsCapacity && typeof (this.slsCapacity as any).validate === 'function') {
      (this.slsCapacity as any).validate();
    }
    if(this.threatAnalysisCapacity && typeof (this.threatAnalysisCapacity as any).validate === 'function') {
      (this.threatAnalysisCapacity as any).validate();
    }
    if(this.threatAnalysisFlow && typeof (this.threatAnalysisFlow as any).validate === 'function') {
      (this.threatAnalysisFlow as any).validate();
    }
    if(Array.isArray(this.versionSummary)) {
      $dara.Model.validateArray(this.versionSummary);
    }
    if(this.webLockCapacity && typeof (this.webLockCapacity as any).validate === 'function') {
      (this.webLockCapacity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number in paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per batch in a batched query.
   * 
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @remarks
   * The NextToken value returned when the NextToken-based pagination method is used.
   * 
   * @example
   * B604532DEF982B875E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * The maximum number of entries per page in paging query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 55
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      maxResults: 'number',
      nextToken: 'string',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodySaleInstanceListAntiRansomwareCapacity extends $dara.Model {
  /**
   * @remarks
   * The allocated anti-ransomware capacity. Unit: GB.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The used anti-ransomware capacity. Unit: GB.
   * 
   * @example
   * 0
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodySaleInstanceListCspmCapacity extends $dara.Model {
  /**
   * @remarks
   * The allocated number of cloud platform configuration check scans. Unit: scans/month.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The used number of cloud platform configuration check scans. Unit: scans/month.
   * 
   * @example
   * 0
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodySaleInstanceListCspmInstanceCapacity extends $dara.Model {
  count?: number;
  used?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodySaleInstanceListHoneypotCapacity extends $dara.Model {
  /**
   * @remarks
   * The allocated number of cloud honeypot authorizations.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The used number of cloud honeypot authorizations.
   * 
   * @example
   * 0
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodySaleInstanceListImageScanCapacity extends $dara.Model {
  /**
   * @remarks
   * The allocated number of image scan authorizations.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The used number of image scan authorizations.
   * 
   * @example
   * 0
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodySaleInstanceListRaspCapacity extends $dara.Model {
  /**
   * @remarks
   * The allocated number of application protection quotas. Unit: quotas/month.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The used number of application protection quotas. Unit: quotas/month.
   * 
   * @example
   * 0
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodySaleInstanceListSdkCapacity extends $dara.Model {
  /**
   * @remarks
   * The allocated number of malicious file detection SDK authorizations.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The used number of malicious file detection SDK authorizations.
   * 
   * @example
   * 0
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodySaleInstanceListSlsCapacity extends $dara.Model {
  /**
   * @remarks
   * The allocated log storage capacity. Unit: GB.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The used log storage capacity. Unit: GB.
   * 
   * @example
   * 0
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodySaleInstanceListThreatAnalysisCapacity extends $dara.Model {
  /**
   * @remarks
   * The allocated threat analysis capacity. Unit: GB.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The used threat analysis capacity. Unit: GB.
   * 
   * @example
   * 0
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodySaleInstanceListThreatAnalysisFlow extends $dara.Model {
  /**
   * @remarks
   * The allocated threat detection and response log ingestion traffic. Unit: GB/day.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The used threat detection and response log ingestion traffic. Unit: GB/day.
   * 
   * @example
   * 0
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodySaleInstanceListVersionSummaryCoreCount extends $dara.Model {
  /**
   * @remarks
   * The assigned number of authorized cores.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * The allocated number of authorized cores.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The used number of authorized cores.
   * 
   * @example
   * 0
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      assigned: 'Assigned',
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigned: 'number',
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodySaleInstanceListVersionSummaryEcsCount extends $dara.Model {
  /**
   * @remarks
   * The assigned number of purchased authorized servers.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * The allocated number of authorized servers.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The used number of authorized servers.
   * 
   * @example
   * 0
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      assigned: 'Assigned',
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigned: 'number',
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodySaleInstanceListVersionSummary extends $dara.Model {
  /**
   * @remarks
   * The authorization type consumed during binding. Valid values:
   * 
   * @example
   * ASSET_AND_CORE
   */
  authBindType?: string;
  /**
   * @remarks
   * The authorization quota usage for cores of the member account.
   */
  coreCount?: ListMultiUserInstancesResponseBodySaleInstanceListVersionSummaryCoreCount;
  /**
   * @remarks
   * The authorization quota usage for servers of the member account.
   */
  ecsCount?: ListMultiUserInstancesResponseBodySaleInstanceListVersionSummaryEcsCount;
  /**
   * @remarks
   * The Security Center edition of the member account. Valid values:
   * 
   * @example
   * 5
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      authBindType: 'AuthBindType',
      coreCount: 'CoreCount',
      ecsCount: 'EcsCount',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authBindType: 'string',
      coreCount: ListMultiUserInstancesResponseBodySaleInstanceListVersionSummaryCoreCount,
      ecsCount: ListMultiUserInstancesResponseBodySaleInstanceListVersionSummaryEcsCount,
      version: 'number',
    };
  }

  validate() {
    if(this.coreCount && typeof (this.coreCount as any).validate === 'function') {
      (this.coreCount as any).validate();
    }
    if(this.ecsCount && typeof (this.ecsCount as any).validate === 'function') {
      (this.ecsCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodySaleInstanceListWebLockCapacity extends $dara.Model {
  /**
   * @remarks
   * The allocated number of web tamper-proofing authorizations.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The used number of web tamper-proofing authorizations.
   * 
   * @example
   * 0
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBodySaleInstanceList extends $dara.Model {
  /**
   * @remarks
   * The UID of the member account.
   * 
   * @example
   * 103784262032
   */
  aliUid?: number;
  /**
   * @remarks
   * The anti-ransomware capacity usage of the member account.
   */
  antiRansomwareCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListAntiRansomwareCapacity;
  /**
   * @remarks
   * The cloud platform configuration check scan usage of the member account.
   */
  cspmCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListCspmCapacity;
  cspmInstanceCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListCspmInstanceCapacity;
  /**
   * @remarks
   * The cloud honeypot authorization usage of the member account.
   */
  honeypotCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListHoneypotCapacity;
  /**
   * @remarks
   * The image scan authorization usage of the member account.
   */
  imageScanCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListImageScanCapacity;
  /**
   * @remarks
   * The Security Center instance ID purchased by the member account.
   * 
   * @example
   * api-service-spec
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance purchase type. Valid values:
   * 
   * @example
   * 1
   */
  instancePurchaseType?: number;
  /**
   * @remarks
   * The application protection usage of the member account.
   */
  raspCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListRaspCapacity;
  /**
   * @remarks
   * The malicious file detection SDK authorization usage of the member account.
   */
  sdkCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListSdkCapacity;
  /**
   * @remarks
   * The log storage capacity usage of the member account.
   */
  slsCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListSlsCapacity;
  /**
   * @remarks
   * The instance status of the member account. Valid values:
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The threat analysis capacity usage of the member account.
   */
  threatAnalysisCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListThreatAnalysisCapacity;
  /**
   * @remarks
   * The threat detection and response log ingestion traffic usage of the member account.
   */
  threatAnalysisFlow?: ListMultiUserInstancesResponseBodySaleInstanceListThreatAnalysisFlow;
  /**
   * @remarks
   * The user type. Valid values:
   * 
   * @example
   * 2
   */
  userType?: number;
  /**
   * @remarks
   * The Security Center edition of the member account. Valid values:
   * 
   * @example
   * 3
   */
  version?: number;
  /**
   * @remarks
   * The authorization usage statistics of the member account.
   */
  versionSummary?: ListMultiUserInstancesResponseBodySaleInstanceListVersionSummary[];
  /**
   * @remarks
   * The web tamper-proofing authorization usage of the member account.
   */
  webLockCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListWebLockCapacity;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      antiRansomwareCapacity: 'AntiRansomwareCapacity',
      cspmCapacity: 'CspmCapacity',
      cspmInstanceCapacity: 'CspmInstanceCapacity',
      honeypotCapacity: 'HoneypotCapacity',
      imageScanCapacity: 'ImageScanCapacity',
      instanceId: 'InstanceId',
      instancePurchaseType: 'InstancePurchaseType',
      raspCapacity: 'RaspCapacity',
      sdkCapacity: 'SdkCapacity',
      slsCapacity: 'SlsCapacity',
      status: 'Status',
      threatAnalysisCapacity: 'ThreatAnalysisCapacity',
      threatAnalysisFlow: 'ThreatAnalysisFlow',
      userType: 'UserType',
      version: 'Version',
      versionSummary: 'VersionSummary',
      webLockCapacity: 'WebLockCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      antiRansomwareCapacity: ListMultiUserInstancesResponseBodySaleInstanceListAntiRansomwareCapacity,
      cspmCapacity: ListMultiUserInstancesResponseBodySaleInstanceListCspmCapacity,
      cspmInstanceCapacity: ListMultiUserInstancesResponseBodySaleInstanceListCspmInstanceCapacity,
      honeypotCapacity: ListMultiUserInstancesResponseBodySaleInstanceListHoneypotCapacity,
      imageScanCapacity: ListMultiUserInstancesResponseBodySaleInstanceListImageScanCapacity,
      instanceId: 'string',
      instancePurchaseType: 'number',
      raspCapacity: ListMultiUserInstancesResponseBodySaleInstanceListRaspCapacity,
      sdkCapacity: ListMultiUserInstancesResponseBodySaleInstanceListSdkCapacity,
      slsCapacity: ListMultiUserInstancesResponseBodySaleInstanceListSlsCapacity,
      status: 'number',
      threatAnalysisCapacity: ListMultiUserInstancesResponseBodySaleInstanceListThreatAnalysisCapacity,
      threatAnalysisFlow: ListMultiUserInstancesResponseBodySaleInstanceListThreatAnalysisFlow,
      userType: 'number',
      version: 'number',
      versionSummary: { 'type': 'array', 'itemType': ListMultiUserInstancesResponseBodySaleInstanceListVersionSummary },
      webLockCapacity: ListMultiUserInstancesResponseBodySaleInstanceListWebLockCapacity,
    };
  }

  validate() {
    if(this.antiRansomwareCapacity && typeof (this.antiRansomwareCapacity as any).validate === 'function') {
      (this.antiRansomwareCapacity as any).validate();
    }
    if(this.cspmCapacity && typeof (this.cspmCapacity as any).validate === 'function') {
      (this.cspmCapacity as any).validate();
    }
    if(this.cspmInstanceCapacity && typeof (this.cspmInstanceCapacity as any).validate === 'function') {
      (this.cspmInstanceCapacity as any).validate();
    }
    if(this.honeypotCapacity && typeof (this.honeypotCapacity as any).validate === 'function') {
      (this.honeypotCapacity as any).validate();
    }
    if(this.imageScanCapacity && typeof (this.imageScanCapacity as any).validate === 'function') {
      (this.imageScanCapacity as any).validate();
    }
    if(this.raspCapacity && typeof (this.raspCapacity as any).validate === 'function') {
      (this.raspCapacity as any).validate();
    }
    if(this.sdkCapacity && typeof (this.sdkCapacity as any).validate === 'function') {
      (this.sdkCapacity as any).validate();
    }
    if(this.slsCapacity && typeof (this.slsCapacity as any).validate === 'function') {
      (this.slsCapacity as any).validate();
    }
    if(this.threatAnalysisCapacity && typeof (this.threatAnalysisCapacity as any).validate === 'function') {
      (this.threatAnalysisCapacity as any).validate();
    }
    if(this.threatAnalysisFlow && typeof (this.threatAnalysisFlow as any).validate === 'function') {
      (this.threatAnalysisFlow as any).validate();
    }
    if(Array.isArray(this.versionSummary)) {
      $dara.Model.validateArray(this.versionSummary);
    }
    if(this.webLockCapacity && typeof (this.webLockCapacity as any).validate === 'function') {
      (this.webLockCapacity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiUserInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the administrator account.
   */
  daInstance?: ListMultiUserInstancesResponseBodyDaInstance;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListMultiUserInstancesResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of this request, which is a unique identifier generated by Alibaba Cloud for this request. It can be used to troubleshoot and locate issues.
   * 
   * @example
   * 88F2A6CD-E500-5038-B992-0107B99AA88C
   */
  requestId?: string;
  /**
   * @remarks
   * The details of member accounts.
   */
  saleInstanceList?: ListMultiUserInstancesResponseBodySaleInstanceList[];
  static names(): { [key: string]: string } {
    return {
      daInstance: 'DaInstance',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      saleInstanceList: 'SaleInstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daInstance: ListMultiUserInstancesResponseBodyDaInstance,
      pageInfo: ListMultiUserInstancesResponseBodyPageInfo,
      requestId: 'string',
      saleInstanceList: { 'type': 'array', 'itemType': ListMultiUserInstancesResponseBodySaleInstanceList },
    };
  }

  validate() {
    if(this.daInstance && typeof (this.daInstance as any).validate === 'function') {
      (this.daInstance as any).validate();
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.saleInstanceList)) {
      $dara.Model.validateArray(this.saleInstanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

