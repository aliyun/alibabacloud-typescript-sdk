// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMultiUserInstancesRequestMemberInstancesVersionSummary extends $dara.Model {
  /**
   * @remarks
   * Number of cores authorized for the member.
   * 
   * @example
   * 6
   */
  coreCount?: number;
  /**
   * @remarks
   * Number of authorizations allocated to the member.
   * 
   * @example
   * 3
   */
  ecsCount?: number;
  /**
   * @remarks
   * Version of the Cloud Security Center for the member account. Values:  
   * - **1**: Free Edition 
   * - **3**: Enterprise Edition
   * - **5**: Advanced Edition
   * - **6**: Antivirus Edition    
   * - **7**: Flagship Edition   
   * - **8**: Multiple Versions   
   * - **10**: Only Purchase Value-Added Services
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
   * Anti-ransomware capacity allocated to the member, in GB.
   * 
   * @example
   * 10
   */
  antiRansomwareCapacity?: number;
  /**
   * @remarks
   * Charge type, values:
   * * **PREPAID**: Prepaid.
   * * **POSTPAID** (default): Postpaid.
   * 
   * @example
   * PREPAID
   */
  chargeType?: string;
  /**
   * @remarks
   * Cloud platform configuration check scan count allocated to the member. Unit: times per month.
   * 
   * @example
   * 0
   */
  cspmCapacity?: number;
  /**
   * @remarks
   * Honeypot authorization count allocated to the member.
   * 
   * @example
   * 0
   */
  honeypotCapacity?: number;
  /**
   * @remarks
   * Image scan authorization count allocated to the member.
   * 
   * @example
   * 1
   */
  imageScanCapacity?: number;
  /**
   * @remarks
   * The Cloud Security Center instance ID purchased by the member account.
   * 
   * @example
   * sas-p0anpb26my69
   */
  instanceId?: string;
  /**
   * @remarks
   * Operation type. Values:  
   * - **ADD**: Add 
   * - **CHANGE**: Change
   * - **DEL**: Delete
   * 
   * @example
   * CHANGE
   */
  optType?: string;
  /**
   * @remarks
   * Application protection count allocated to the member. Unit: per month.
   * 
   * @example
   * 0
   */
  raspCapacity?: number;
  /**
   * @remarks
   * Malicious file detection SDK authorization count allocated to the member.
   * 
   * @example
   * 10
   */
  sdkCapacity?: number;
  /**
   * @remarks
   * Log storage capacity allocated to the member, in GB.
   * 
   * @example
   * 10
   */
  slsCapacity?: number;
  /**
   * @remarks
   * Status of the member account instance. Values: 
   * - **1**: Valid. 
   * - **2**: Invalid.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Threat analysis capacity allocated to the member. Unit: GB.
   * 
   * @example
   * 10
   */
  threatAnalysisCapacity?: number;
  /**
   * @remarks
   * Threat analysis and response log access traffic allocated to the member. Unit: GB/day.
   * 
   * @example
   * 0
   */
  threatAnalysisFlow?: number;
  /**
   * @remarks
   * The version of Cloud Security Center protection to be bound. Values:  
   * - **1**: Free Edition 
   * - **3**: Enterprise Edition
   * - **5**: Advanced Edition
   * - **6**: Antivirus Edition    
   * - **7**: Flagship Edition
   * 
   * @example
   * 7
   */
  version?: string;
  /**
   * @remarks
   * Member account authorization usage information.
   */
  versionSummary?: UpdateMultiUserInstancesRequestMemberInstancesVersionSummary[];
  /**
   * @remarks
   * Web tamper-proof authorization count allocated to the member.
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
   * Member instances.
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

