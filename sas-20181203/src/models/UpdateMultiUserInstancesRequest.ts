// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMultiUserInstancesRequestMemberInstancesVersionSummary extends $dara.Model {
  /**
   * @remarks
   * The number of authorized cores assigned to the member.
   * 
   * @example
   * 6
   */
  coreCount?: number;
  /**
   * @remarks
   * The number of authorized instances assigned to the member.
   * 
   * @example
   * 3
   */
  ecsCount?: number;
  /**
   * @remarks
   * The Security Center edition of the member accounts. Valid values:  
   * - **1**: Free Edition 
   * - **3**: Enterprise Edition
   * - **5**: Premium Edition
   * - **6**: Anti-virus Edition    
   * - **7**: Ultimate Edition   
   * - **8**: multi-edition   
   * - **10**: value-added services only
   * 
   * @example
   * 5
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      coreCount: 'CoreCount',
      ecsCount: 'EcsCount',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreCount: 'number',
      ecsCount: 'number',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMultiUserInstancesRequestMemberInstances extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account UID of the member.
   * 
   * @example
   * 1766185894104675
   */
  aliUid?: number;
  /**
   * @remarks
   * The anti-ransomware capacity assigned to the member. Unit: GB.
   * 
   * @example
   * 10
   */
  antiRansomwareCapacity?: number;
  /**
   * @remarks
   * The billing type. Valid values:
   * * **PREPAID**: upfront.
   * * **POSTPAID** (default): pay-as-you-go.
   * 
   * @example
   * PREPAID
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of cloud platform configuration check scans assigned to the member. Unit: scans per month.
   * 
   * @example
   * 0
   */
  cspmCapacity?: number;
  cspmInstanceCapacity?: number;
  /**
   * @remarks
   * The number of honeypot quotas assigned to the member.
   * 
   * @example
   * 0
   */
  honeypotCapacity?: number;
  /**
   * @remarks
   * The number of image scan quotas assigned to the member.
   * 
   * @example
   * 1
   */
  imageScanCapacity?: number;
  /**
   * @remarks
   * The Security Center instance ID purchased by the member accounts.
   * 
   * @example
   * sas-p0anpb26my69
   */
  instanceId?: string;
  /**
   * @remarks
   * The operation type. Valid values:  
   * - **ADD**: increase 
   * - **CHANGE**: update
   * - **DEL**: delete
   * 
   * @example
   * CHANGE
   */
  optType?: string;
  /**
   * @remarks
   * The number of application protection quotas assigned to the member. Unit: quotas per month.
   * 
   * @example
   * 0
   */
  raspCapacity?: number;
  /**
   * @remarks
   * The number of malicious file detection SDK quotas assigned to the member.
   * 
   * @example
   * 10
   */
  sdkCapacity?: number;
  /**
   * @remarks
   * The log storage capacity assigned to the member. Unit: GB.
   * 
   * @example
   * 10
   */
  slsCapacity?: number;
  /**
   * @remarks
   * The instance status of the member accounts. Valid values:
   * - **1**: active.
   * - **2**: expired.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The threat analysis capacity assigned to the member. Unit: GB.
   * 
   * @example
   * 10
   */
  threatAnalysisCapacity?: number;
  /**
   * @remarks
   * The log ingestion traffic for threat detection and response assigned to the member. Unit: GB/day.
   * 
   * @example
   * 0
   */
  threatAnalysisFlow?: number;
  /**
   * @remarks
   * The Security Center edition to bind. Valid values:  
   * - **1**: Free Edition 
   * - **3**: Enterprise Edition
   * - **5**: Advanced Edition
   * - **6**: Anti-virus Edition    
   * - **7**: Ultimate Edition
   * 
   * @example
   * 7
   */
  version?: string;
  /**
   * @remarks
   * The authorization usage information of the member accounts.
   */
  versionSummary?: UpdateMultiUserInstancesRequestMemberInstancesVersionSummary[];
  /**
   * @remarks
   * The number of web tamper-proofing authorization quotas assigned to the member.
   * 
   * @example
   * 0
   */
  webLockCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      antiRansomwareCapacity: 'AntiRansomwareCapacity',
      chargeType: 'ChargeType',
      cspmCapacity: 'CspmCapacity',
      cspmInstanceCapacity: 'CspmInstanceCapacity',
      honeypotCapacity: 'HoneypotCapacity',
      imageScanCapacity: 'ImageScanCapacity',
      instanceId: 'InstanceId',
      optType: 'OptType',
      raspCapacity: 'RaspCapacity',
      sdkCapacity: 'SdkCapacity',
      slsCapacity: 'SlsCapacity',
      status: 'Status',
      threatAnalysisCapacity: 'ThreatAnalysisCapacity',
      threatAnalysisFlow: 'ThreatAnalysisFlow',
      version: 'Version',
      versionSummary: 'VersionSummary',
      webLockCapacity: 'WebLockCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      antiRansomwareCapacity: 'number',
      chargeType: 'string',
      cspmCapacity: 'number',
      cspmInstanceCapacity: 'number',
      honeypotCapacity: 'number',
      imageScanCapacity: 'number',
      instanceId: 'string',
      optType: 'string',
      raspCapacity: 'number',
      sdkCapacity: 'number',
      slsCapacity: 'number',
      status: 'number',
      threatAnalysisCapacity: 'number',
      threatAnalysisFlow: 'number',
      version: 'string',
      versionSummary: { 'type': 'array', 'itemType': UpdateMultiUserInstancesRequestMemberInstancesVersionSummary },
      webLockCapacity: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.versionSummary)) {
      $dara.Model.validateArray(this.versionSummary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMultiUserInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The member instances.
   */
  memberInstances?: UpdateMultiUserInstancesRequestMemberInstances[];
  static names(): { [key: string]: string } {
    return {
      memberInstances: 'MemberInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberInstances: { 'type': 'array', 'itemType': UpdateMultiUserInstancesRequestMemberInstances },
    };
  }

  validate() {
    if(Array.isArray(this.memberInstances)) {
      $dara.Model.validateArray(this.memberInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

