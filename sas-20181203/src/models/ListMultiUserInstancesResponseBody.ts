// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultiUserInstancesResponseBodyDaInstanceAntiRansomwareCapacity extends $dara.Model {
  /**
   * @remarks
   * The allocated anti-ransomware capacity. Unit: GB.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * The total anti-ransomware capacity of the administrator account. Unit: GB.
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
   * The number of assigned cloud platform configuration check scans. Unit: scans/month.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * The purchased cloud platform configuration check scan quota. Unit: scans per month.
   * 
   * @example
   * 180000
   */
  count?: number;
  /**
   * @remarks
   * The used cloud platform configuration check scan quota. Unit: scans per month.
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
  /**
   * @remarks
   * The number of assigned cloud platform configuration check instance authorizations.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * The number of purchased cloud platform configuration check instance authorizations.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The used number of authorized instances for cloud platform configuration checks.
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

export class ListMultiUserInstancesResponseBodyDaInstanceHoneypotCapacity extends $dara.Model {
  /**
   * @remarks
   * The number of assigned cloud honeypot authorizations.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * The number of purchased cloud honeypot authorizations.
   * 
   * @example
   * 45
   */
  count?: number;
  /**
   * @remarks
   * The used honeypot authorization quota.
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
   * The number of assigned image scan authorizations.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * The number of purchased image scan authorizations.
   * 
   * @example
   * 60
   */
  count?: number;
  /**
   * @remarks
   * The number of used image scan authorizations.
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
   * The allocated application protection quota. Unit: quotas per month.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * The purchased application protection quota. Unit: quotas per month.
   * 
   * @example
   * 7
   */
  count?: number;
  /**
   * @remarks
   * The used application protection quota. Unit: quotas per month.
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
   * The number of assigned malicious file detection SDK authorizations.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * The number of purchased malicious file detection SDK authorizations.
   * 
   * @example
   * 50
   */
  count?: number;
  /**
   * @remarks
   * The used malicious file detection SDK authorization quota.
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
   * The allocated log storage capacity. Unit: GB.
   * 
   * @example
   * 10
   */
  assigned?: number;
  /**
   * @remarks
   * The total log storage capacity of the administrator account. Unit: GB.
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
   * The assigned Cloud Threat Detection and Response log ingestion traffic. Unit: GB/day.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * The purchased Cloud Threat Detection and Response log ingestion traffic. Unit: GB/day.
   * 
   * @example
   * 300
   */
  count?: number;
  /**
   * @remarks
   * The used log ingestion traffic for CTDR. Unit: GB/day.
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
   * The assigned authorized core quota.
   * 
   * @example
   * 4
   */
  assigned?: number;
  /**
   * @remarks
   * The number of purchased core authorizations.
   * 
   * @example
   * 150
   */
  count?: number;
  /**
   * @remarks
   * The used authorized core quota.
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
   * The allocated purchased instance quota.
   * 
   * @example
   * 3
   */
  assigned?: number;
  /**
   * @remarks
   * The number of purchased instance authorizations.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The number of used instance authorizations.
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
   * - ASSET: Consumes instance authorizations.
   * - CORE: Consumes core authorizations.
   * - ASSET_AND_CORE: Consumes both instance and core authorizations.
   * 
   * @example
   * ASSET_AND_CORE
   */
  authBindType?: string;
  /**
   * @remarks
   * The usage and allocation of core authorizations for the administrator account.
   */
  coreCount?: ListMultiUserInstancesResponseBodyDaInstanceVersionSummaryCoreCount;
  /**
   * @remarks
   * The usage and allocation of instance authorizations for the administrator account.
   */
  ecsCount?: ListMultiUserInstancesResponseBodyDaInstanceVersionSummaryEcsCount;
  /**
   * @remarks
   * The purchased Security Center edition. Valid values:  
   * - **1**: Free Edition. 
   * - **3**: Enterprise Edition.
   * - **5**: Advanced Edition.
   * - **6**: Anti-virus Edition.    
   * - **7**: Ultimate Edition.   
   * - **8**: Multi-edition.   
   * - **10**: Value-added services only.
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
   * The number of assigned web tamper-proofing authorizations.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * The number of purchased web tamper-proofing authorizations.
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * The number of used web tamper-proofing authorizations.
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
   * The UID of the administrator account.
   * 
   * @example
   * 1766185894104675
   */
  aliUid?: number;
  /**
   * @remarks
   * The usage and allocation of the anti-ransomware capacity for the administrator account.
   */
  antiRansomwareCapacity?: ListMultiUserInstancesResponseBodyDaInstanceAntiRansomwareCapacity;
  /**
   * @remarks
   * The usage and allocation of the cloud platform configuration check scan quota for the administrator account.
   */
  cspmCapacity?: ListMultiUserInstancesResponseBodyDaInstanceCspmCapacity;
  /**
   * @remarks
   * The authorized instance capacity for cloud platform configuration checks.
   * 
   * @example
   * {"Count":0,"Used":0,"Assigned":0}
   */
  cspmInstanceCapacity?: ListMultiUserInstancesResponseBodyDaInstanceCspmInstanceCapacity;
  /**
   * @remarks
   * The usage and allocation of cloud honeypot authorizations for the administrator account.
   */
  honeypotCapacity?: ListMultiUserInstancesResponseBodyDaInstanceHoneypotCapacity;
  /**
   * @remarks
   * The usage and allocation of image scan authorizations for the administrator account.
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
   * The purchase type of the instance. Valid values:
   * - **0**: Self-purchased.
   * - **1**: Allocated.
   * 
   * @example
   * 0
   */
  instancePurchaseType?: number;
  /**
   * @remarks
   * The usage and allocation of the application protection quota for the administrator account.
   */
  raspCapacity?: ListMultiUserInstancesResponseBodyDaInstanceRaspCapacity;
  /**
   * @remarks
   * The usage and allocation of malicious file detection SDK authorizations for the administrator account.
   */
  sdkCapacity?: ListMultiUserInstancesResponseBodyDaInstanceSdkCapacity;
  /**
   * @remarks
   * The usage and allocation of the log storage capacity for the administrator account.
   */
  slsCapacity?: ListMultiUserInstancesResponseBodyDaInstanceSlsCapacity;
  /**
   * @remarks
   * The instance status of the administrator account. Valid values:
   * - **1**: Valid.
   * - **2**: Invalid.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The usage and allocation of the threat analysis capacity for the administrator account.
   */
  threatAnalysisCapacity?: ListMultiUserInstancesResponseBodyDaInstanceThreatAnalysisCapacity;
  /**
   * @remarks
   * The usage and allocation of Cloud Threat Detection and Response log ingestion traffic for the administrator account.
   */
  threatAnalysisFlow?: ListMultiUserInstancesResponseBodyDaInstanceThreatAnalysisFlow;
  /**
   * @remarks
   * The user type. Valid values:
   * - **1**: Administrator.
   * - **2**: Regular user.
   * 
   * @example
   * 1
   */
  userType?: number;
  /**
   * @remarks
   * The purchased Security Center edition. Valid values:  
   * - **1**: Free Edition. 
   * - **3**: Enterprise Edition.
   * - **5**: Advanced Edition.
   * - **6**: Anti-virus Edition.    
   * - **7**: Ultimate Edition.   
   * - **8**: Multi-edition.   
   * - **10**: Value-added services only.
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
   * The usage and allocation of web tamper-proofing authorizations for the administrator account.
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
   * The current page number in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per batch.
   * 
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @remarks
   * The NextToken value returned when the NextToken pagination method is used.
   * 
   * @example
   * B604532DEF982B875E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query.
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
   * The allocated cloud platform configuration check scan quota. Unit: scans per month.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The used cloud platform configuration check scan quota. Unit: scans per month.
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
  /**
   * @remarks
   * The authorized number of instances for cloud platform configuration checks.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The used number of authorized instances for cloud platform configuration checks.
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

export class ListMultiUserInstancesResponseBodySaleInstanceListHoneypotCapacity extends $dara.Model {
  /**
   * @remarks
   * The allocated honeypot authorization quota.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The used honeypot authorization quota.
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
   * The allocated image scan authorization quota.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The used image scan authorization quota.
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
   * The allocated application protection quota. Unit: quotas per month.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The used application protection quota. Unit: quotas per month.
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
   * The allocated malicious file detection SDK authorization quota.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The used malicious file detection SDK authorization quota.
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
   * The allocated log ingestion traffic for CTDR. Unit: GB/day.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The used log ingestion traffic for CTDR. Unit: GB/day.
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
   * The assigned authorized core quota.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * The allocated authorized core quota.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The used authorized core quota.
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
   * The allocated purchased instance quota.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * The allocated authorized instance quota.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The used authorized instance quota.
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
   * - **ASSET**: Consumes the authorized instance quota.
   * - **CORE**: Consumes the authorized core quota.
   * - **ASSET_AND_CORE**: Consumes both the authorized instance quota and the authorized core quota.
   * 
   * @example
   * ASSET_AND_CORE
   */
  authBindType?: string;
  /**
   * @remarks
   * The usage of the core authorization quota for the member accounts.
   */
  coreCount?: ListMultiUserInstancesResponseBodySaleInstanceListVersionSummaryCoreCount;
  /**
   * @remarks
   * The usage of the authorization quota for the member accounts.
   */
  ecsCount?: ListMultiUserInstancesResponseBodySaleInstanceListVersionSummaryEcsCount;
  /**
   * @remarks
   * The Security Center edition of the member accounts. Valid values:  
   * - **1**: Free Edition. 
   * - **3**: Enterprise Edition.
   * - **5**: Premium Edition.
   * - **6**: Anti-virus Edition.    
   * - **7**: Ultimate Edition.   
   * - **8**: Multi-edition.   
   * - **10**: Value-added services only.
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
   * The allocated web tamper-proofing authorization quota.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The used web tamper-proofing authorization quota.
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
   * The UID of the member accounts.
   * 
   * @example
   * 103784262032
   */
  aliUid?: number;
  /**
   * @remarks
   * The usage of the anti-ransomware capacity for the member accounts.
   */
  antiRansomwareCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListAntiRansomwareCapacity;
  /**
   * @remarks
   * The usage of the cloud platform configuration check scan quota for the member accounts.
   */
  cspmCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListCspmCapacity;
  /**
   * @remarks
   * The authorized instance capacity for cloud platform configuration checks.
   * 
   * @example
   * {"Count":0,"Used":0}
   */
  cspmInstanceCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListCspmInstanceCapacity;
  /**
   * @remarks
   * The usage of the honeypot authorization quota for the member accounts.
   */
  honeypotCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListHoneypotCapacity;
  /**
   * @remarks
   * The usage of the image scan authorization quota for the member accounts.
   */
  imageScanCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListImageScanCapacity;
  /**
   * @remarks
   * The Security Center instance ID purchased by the member accounts.
   * 
   * @example
   * api-service-spec
   */
  instanceId?: string;
  /**
   * @remarks
   * The purchase type of the instance. Valid values:
   * - **0**: Self-purchased.
   * - **1**: Allocated.
   * 
   * @example
   * 1
   */
  instancePurchaseType?: number;
  /**
   * @remarks
   * The usage of the application protection quota for the member accounts.
   */
  raspCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListRaspCapacity;
  /**
   * @remarks
   * The usage of the malicious file detection SDK authorization quota for the member accounts.
   */
  sdkCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListSdkCapacity;
  /**
   * @remarks
   * The usage of the log storage capacity for the member accounts.
   */
  slsCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListSlsCapacity;
  /**
   * @remarks
   * The instance status of the member accounts. Valid values:
   * - **1**: Valid.
   * - **2**: Invalid.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The usage of the threat analysis capacity for the member accounts.
   */
  threatAnalysisCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListThreatAnalysisCapacity;
  /**
   * @remarks
   * The usage of the log ingestion traffic for Cloud Threat Detection and Response (CTDR) for the member accounts.
   */
  threatAnalysisFlow?: ListMultiUserInstancesResponseBodySaleInstanceListThreatAnalysisFlow;
  /**
   * @remarks
   * The user type. Valid values:
   * - **1**: Administrator.
   * - **2**: Regular user.
   * 
   * @example
   * 2
   */
  userType?: number;
  /**
   * @remarks
   * The Security Center edition of the member accounts. Valid values:  
   * - **1**: Free Edition. 
   * - **3**: Enterprise Edition.
   * - **5**: Premium Edition.
   * - **6**: Anti-virus Edition.    
   * - **7**: Ultimate Edition.   
   * - **8**: Multi-edition.   
   * - **10**: Value-added services only.
   * 
   * @example
   * 3
   */
  version?: number;
  /**
   * @remarks
   * The statistics information of authorization usage for the member accounts.
   */
  versionSummary?: ListMultiUserInstancesResponseBodySaleInstanceListVersionSummary[];
  /**
   * @remarks
   * The usage of the web tamper-proofing authorization quota for the member accounts.
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
   * The ID of the request. This unique identifier is generated by Alibaba Cloud for the request and can be used to troubleshoot issues.
   * 
   * @example
   * 88F2A6CD-E500-5038-B992-0107B99AA88C
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the member accounts.
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

