// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMultiUserInstancesRequestMemberInstancesVersionSummary extends $dara.Model {
  /**
   * @example
   * 6
   */
  coreCount?: number;
  /**
   * @example
   * 3
   */
  ecsCount?: number;
  /**
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
   * @example
   * 1766185894104675
   */
  aliUid?: number;
  /**
   * @example
   * 10
   */
  antiRansomwareCapacity?: number;
  /**
   * @example
   * PREPAID
   */
  chargeType?: string;
  /**
   * @example
   * 0
   */
  cspmCapacity?: number;
  /**
   * @example
   * 0
   */
  honeypotCapacity?: number;
  /**
   * @example
   * 1
   */
  imageScanCapacity?: number;
  /**
   * @example
   * sas-p0anpb26my69
   */
  instanceId?: string;
  /**
   * @example
   * CHANGE
   */
  optType?: string;
  /**
   * @example
   * 0
   */
  raspCapacity?: number;
  /**
   * @example
   * 10
   */
  sdkCapacity?: number;
  /**
   * @example
   * 10
   */
  slsCapacity?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 10
   */
  threatAnalysisCapacity?: number;
  /**
   * @example
   * 0
   */
  threatAnalysisFlow?: number;
  /**
   * @example
   * 7
   */
  version?: string;
  versionSummary?: UpdateMultiUserInstancesRequestMemberInstancesVersionSummary[];
  /**
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

