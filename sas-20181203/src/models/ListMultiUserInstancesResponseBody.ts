// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultiUserInstancesResponseBodyDaInstanceAntiRansomwareCapacity extends $dara.Model {
  /**
   * @remarks
   * Allocated anti-ransomware capacity, in GB.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * Administrator account anti-ransomware capacity, in GB.
   * 
   * @example
   * 14
   */
  count?: number;
  /**
   * @remarks
   * Used anti-ransomware capacity, in GB.
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
   * Allocated CSPM scan count. Unit: per month.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * Purchased CSPM scan count. Unit: per month.
   * 
   * @example
   * 180000
   */
  count?: number;
  /**
   * @remarks
   * Used CSPM scan count. Unit: per month.
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

export class ListMultiUserInstancesResponseBodyDaInstanceHoneypotCapacity extends $dara.Model {
  /**
   * @remarks
   * Assigned number of honeypot licenses.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * Purchased honeypot authorization count.
   * 
   * @example
   * 45
   */
  count?: number;
  /**
   * @remarks
   * Used honeypot authorization count.
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
   * Assigned image scan authorization count.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * Purchased image scan authorization count.
   * 
   * @example
   * 60
   */
  count?: number;
  /**
   * @remarks
   * Used purchased image scan authorization count.
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
   * Allocated RASP capacity. Unit: per month.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * Purchased RASP capacity. Unit: per month.
   * 
   * @example
   * 7
   */
  count?: number;
  /**
   * @remarks
   * Used RASP capacity. Unit: per month.
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
   * Assigned number of malicious file detection SDK licenses.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * Purchased number of malicious file detection SDK licenses.
   * 
   * @example
   * 50
   */
  count?: number;
  /**
   * @remarks
   * Used number of malicious file detection SDK licenses.
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
   * Allocated log storage capacity, in GB.
   * 
   * @example
   * 10
   */
  assigned?: number;
  /**
   * @remarks
   * Administrator account log storage capacity, in GB.
   * 
   * @example
   * 150
   */
  count?: number;
  /**
   * @remarks
   * Used log storage capacity, in GB.
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
   * Assigned threat analysis capacity. Unit: GB.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * Purchased threat analysis capacity. Unit: GB.
   * 
   * @example
   * 3000
   */
  count?: number;
  /**
   * @remarks
   * Used threat analysis capacity. Unit: GB.
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
   * Assigned threat analysis and response log inbound traffic. Unit: GB/day.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * Purchased threat analysis and response log inbound traffic. Unit: GB/day.
   * 
   * @example
   * 300
   */
  count?: number;
  /**
   * @remarks
   * Used threat analysis and response log inbound traffic. Unit: GB/day.
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
   * Assigned number of core licenses.
   * 
   * @example
   * 4
   */
  assigned?: number;
  /**
   * @remarks
   * Purchased number of core licenses.
   * 
   * @example
   * 150
   */
  count?: number;
  /**
   * @remarks
   * Used number of core licenses.
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
   * Assigned number of purchased ECS instance licenses.
   * 
   * @example
   * 3
   */
  assigned?: number;
  /**
   * @remarks
   * Purchased number of ECS instance licenses.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * Used number of purchased ECS instance licenses.
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
   * The type of authorization consumed during binding. Values: 
   * - ASSET: consumes the number of authorized instances
   * - CORE: consumes the number of authorized cores
   * - ASSET_AND_CORE: consumes both the number of authorized instances and cores
   * 
   * @example
   * ASSET_AND_CORE
   */
  authBindType?: string;
  /**
   * @remarks
   * Usage and allocation details of the core licenses for the administrator account.
   */
  coreCount?: ListMultiUserInstancesResponseBodyDaInstanceVersionSummaryCoreCount;
  /**
   * @remarks
   * Usage and allocation details of the ECS instance licenses for the administrator account.
   */
  ecsCount?: ListMultiUserInstancesResponseBodyDaInstanceVersionSummaryEcsCount;
  /**
   * @remarks
   * Purchased version of Cloud Security Center. Values:  
   * - **1**: Free Edition 
   * - **3**: Enterprise Edition
   * - **5**: Advanced Edition
   * - **6**: Antivirus Edition    
   * - **7**: Flagship Edition   
   * - **8**: Multiple Editions   
   * - **10**: Only Value-Added Services Purchased
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
   * Assigned web lock (anti-tampering) authorization count.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * Purchased web lock (anti-tampering) authorization count.
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * Used web lock (anti-tampering) authorization count.
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
   * AliUid of the administrator account.
   * 
   * @example
   * 1766185894104675
   */
  aliUid?: number;
  /**
   * @remarks
   * Usage and allocation of administrator account anti-ransomware capacity.
   */
  antiRansomwareCapacity?: ListMultiUserInstancesResponseBodyDaInstanceAntiRansomwareCapacity;
  /**
   * @remarks
   * Usage and allocation of administrator account CSPM (Cloud Security Posture Management) scan count.
   */
  cspmCapacity?: ListMultiUserInstancesResponseBodyDaInstanceCspmCapacity;
  /**
   * @remarks
   * Usage and allocation of honeypot authorization count for the administrator account.
   */
  honeypotCapacity?: ListMultiUserInstancesResponseBodyDaInstanceHoneypotCapacity;
  /**
   * @remarks
   * Usage and allocation of image scan authorization count for the administrator account.
   */
  imageScanCapacity?: ListMultiUserInstancesResponseBodyDaInstanceImageScanCapacity;
  /**
   * @remarks
   * Cloud Security Center instance ID purchased by the administrator account.
   * 
   * @example
   * i-bp1gmm4pnacse343nqal
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance purchase type. Values:
   * - **0**：Self-purchased.
   * - **1**：Allocated.
   * 
   * @example
   * 0
   */
  instancePurchaseType?: number;
  /**
   * @remarks
   * Usage and allocation of administrator account RASP (Runtime Application Self-Protection) capacity.
   */
  raspCapacity?: ListMultiUserInstancesResponseBodyDaInstanceRaspCapacity;
  /**
   * @remarks
   * Usage and allocation details of the malicious file detection SDK licenses for the administrator account.
   */
  sdkCapacity?: ListMultiUserInstancesResponseBodyDaInstanceSdkCapacity;
  /**
   * @remarks
   * Usage and allocation of administrator account log storage capacity.
   */
  slsCapacity?: ListMultiUserInstancesResponseBodyDaInstanceSlsCapacity;
  /**
   * @remarks
   * Administrator account instance status. Values: 
   * - **1**: Active.
   * - **2**: Inactive.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Usage and allocation of administrator account threat analysis capacity.
   */
  threatAnalysisCapacity?: ListMultiUserInstancesResponseBodyDaInstanceThreatAnalysisCapacity;
  /**
   * @remarks
   * Usage and allocation of threat analysis and response log inbound traffic for the administrator account.
   */
  threatAnalysisFlow?: ListMultiUserInstancesResponseBodyDaInstanceThreatAnalysisFlow;
  /**
   * @remarks
   * User type. Values: 
   * * **Administrator User**: 1
   * * **Regular User**: 2
   * 
   * @example
   * 1
   */
  userType?: number;
  /**
   * @remarks
   * Purchased version of Cloud Security Center. Values:  
   * - **1**：Free Edition 
   * - **3**：Enterprise Edition
   * - **5**：Advanced Edition
   * - **6**：Anti-Virus Edition    
   * - **7**：Flagship Edition   
   * - **8**：Multiple Editions   
   * - **10**：Value-Added Services Only
   * 
   * @example
   * 3
   */
  version?: number;
  /**
   * @remarks
   * Authorization usage statistics for the administrator account.
   */
  versionSummary?: ListMultiUserInstancesResponseBodyDaInstanceVersionSummary[];
  /**
   * @remarks
   * Usage and allocation of web lock (anti-tampering) authorization count for the administrator account.
   */
  webLockCapacity?: ListMultiUserInstancesResponseBodyDaInstanceWebLockCapacity;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      antiRansomwareCapacity: 'AntiRansomwareCapacity',
      cspmCapacity: 'CspmCapacity',
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
   * The current page number in a paginated query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of items to return in each batch query.
   * 
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @remarks
   * The NextToken value returned when using the NextToken method.
   * 
   * @example
   * B604532DEF982B875E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * The maximum number of items to return per page in a paginated query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of items.
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
   * Allocated anti-ransomware capacity, in GB.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * Used anti-ransomware capacity, in GB.
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
   * Allocated CSPM scan count. Unit: per month.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * Used CSPM scan count. Unit: per month.
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
   * Number of honeypot authorizations allocated.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * Number of honeypot authorizations used.
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
   * Allocated image scanning authorizations.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * Used image scanning authorizations.
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
   * Allocated RASP capacity. Unit: per month.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * Used RASP capacity. Unit: per month.
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
   * Number of malicious file detection SDK authorizations allocated.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * Number of malicious file detection SDK authorizations used.
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
   * Allocated log storage capacity, in GB.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * Used log storage capacity, in GB.
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
   * Allocated threat analysis capacity. Unit: GB.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * Used threat analysis capacity. Unit: GB.
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
   * Allocated threat analysis and response log ingestion traffic. Unit: GB/day.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * Used threat analysis and response log ingestion traffic. Unit: GB/day.
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
   * Assigned number of cores.
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * Allocated number of cores.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * Number of cores used.
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
   * 已分配已购授权台数。
   * 
   * @example
   * 0
   */
  assigned?: number;
  /**
   * @remarks
   * Number of ECS authorizations allocated.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * Number of ECS authorizations used.
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
   * Authorization type consumed during binding, with values:
   * - **ASSET**：Consumes the number of authorized instances
   * - **CORE**：Consumes the number of authorized cores
   * - **ASSET_AND_CORE**：Consumes both the number of authorized instances and cores.
   * 
   * @example
   * ASSET_AND_CORE
   */
  authBindType?: string;
  /**
   * @remarks
   * Usage of core authorization for the member account.
   */
  coreCount?: ListMultiUserInstancesResponseBodySaleInstanceListVersionSummaryCoreCount;
  /**
   * @remarks
   * Usage details of ECS authorizations for the member account.
   */
  ecsCount?: ListMultiUserInstancesResponseBodySaleInstanceListVersionSummaryEcsCount;
  /**
   * @remarks
   * Version of the Cloud Security Center for the member account. Values:  
   * - **1**: Free Edition 
   * - **3**: Enterprise Edition
   * - **5**: Advanced Edition
   * - **6**: Anti-Virus Edition    
   * - **7**: Flagship Edition   
   * - **8**: Multiple Versions   
   * - **10**: Value-Added Services Only
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
   * Number of web tamper-proof authorizations allocated.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * Number of web tamper-proof authorizations used.
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
   * UID of the member account.
   * 
   * @example
   * 103784262032
   */
  aliUid?: number;
  /**
   * @remarks
   * Anti-ransomware capacity usage of the member account.
   */
  antiRansomwareCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListAntiRansomwareCapacity;
  /**
   * @remarks
   * Member account CSPM (Cloud Security Posture Management) scan usage.
   */
  cspmCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListCspmCapacity;
  /**
   * @remarks
   * Usage details of honeypot authorizations for the member account.
   */
  honeypotCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListHoneypotCapacity;
  /**
   * @remarks
   * Member account image scanning authorization usage.
   */
  imageScanCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListImageScanCapacity;
  /**
   * @remarks
   * Cloud Security Center instance ID purchased by the member account.
   * 
   * @example
   * api-service-spec
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance purchase type. Values: 
   * - **0**: Self-purchased.
   * - **1**: Allocated.
   * 
   * @example
   * 1
   */
  instancePurchaseType?: number;
  /**
   * @remarks
   * Member account RASP (Runtime Application Self-Protection) usage.
   */
  raspCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListRaspCapacity;
  /**
   * @remarks
   * Usage details of malicious file detection SDK authorizations for the member account.
   */
  sdkCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListSdkCapacity;
  /**
   * @remarks
   * Log storage capacity usage of the member account.
   */
  slsCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListSlsCapacity;
  /**
   * @remarks
   * Status of the member account instance. Values: 
   * - **1**: Active.
   * - **2**: Inactive.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Member account threat analysis capacity usage.
   */
  threatAnalysisCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListThreatAnalysisCapacity;
  /**
   * @remarks
   * Member account threat analysis and response log ingestion traffic usage.
   */
  threatAnalysisFlow?: ListMultiUserInstancesResponseBodySaleInstanceListThreatAnalysisFlow;
  /**
   * @remarks
   * User type. Values:
   * * **Administrator User**：1
   * * **Regular User**：2
   * 
   * @example
   * 2
   */
  userType?: number;
  /**
   * @remarks
   * Version of the Cloud Security Center for the member account. Values:  
   * - **1**: Free Edition 
   * - **3**: Enterprise Edition
   * - **5**: Advanced Edition
   * - **6**: Anti-Virus Edition    
   * - **7**: Flagship Edition   
   * - **8**: Multiple Versions   
   * - **10**: Only Purchased Value-Added Services
   * 
   * @example
   * 3
   */
  version?: number;
  /**
   * @remarks
   * Authorization usage statistics for the member account.
   */
  versionSummary?: ListMultiUserInstancesResponseBodySaleInstanceListVersionSummary[];
  /**
   * @remarks
   * Member account web lock (anti-tampering) authorization usage.
   */
  webLockCapacity?: ListMultiUserInstancesResponseBodySaleInstanceListWebLockCapacity;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      antiRansomwareCapacity: 'AntiRansomwareCapacity',
      cspmCapacity: 'CspmCapacity',
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
   * Details of the administrator account.
   */
  daInstance?: ListMultiUserInstancesResponseBodyDaInstance;
  /**
   * @remarks
   * Pagination information.
   */
  pageInfo?: ListMultiUserInstancesResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of this call request, which is a unique identifier generated by Alibaba Cloud for the request and can be used to troubleshoot and locate issues.
   * 
   * @example
   * 88F2A6CD-E500-5038-B992-0107B99AA88C
   */
  requestId?: string;
  /**
   * @remarks
   * Details of member accounts.
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

