// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceAuthRangeResponseBodyInstanceAuthRange extends $dara.Model {
  /**
   * @remarks
   * The number of servers for Advanced Edition. Valid values:
   * 
   * - **1-2000000000**: The value range.
   * - **1**: The step size.
   * 
   * @example
   * 1-2000000000:1
   */
  advancedCount?: string;
  /**
   * @remarks
   * The anti-ransomware capacity. Valid values:
   * 
   * - **1-9000000000**: The value range.
   * - **10**: The step size.
   * 
   * @example
   * 0-9000000000:10
   */
  antiRansomwareCapacity?: string;
  /**
   * @remarks
   * The Anti-ransomware service. Valid values:
   * - **0**: Not activated.
   * - **1**: Activated.
   * 
   * @example
   * 1
   */
  antiRansomwareService?: number;
  /**
   * @remarks
   * The number of cores for Anti-virus Edition. Valid values:
   * 
   * - **1-2000000000**: The value range.
   * - **1**: The step size.
   * 
   * @example
   * 1-2000000000:1
   */
  antiVirusCore?: string;
  /**
   * @remarks
   * The number of cores for Ultimate Edition. Valid values:
   * 
   * - **1-2000000000**: The value range.
   * - **1**: The step size.
   * 
   * @example
   * 1-2000000000:1
   */
  containerCore?: string;
  /**
   * @remarks
   * The number of servers for Ultimate Edition. Valid values:
   * 
   * - **1-2000000000**: The value range.
   * - **1**: The step size.
   * 
   * @example
   * 1-2000000000:1
   */
  containerCount?: string;
  /**
   * @remarks
   * The Cloud Security Posture Management (CSPM) scan quota. Valid values:
   * 
   * - **15000-9999999999**: The value range.
   * - **55000**: The step size.
   * 
   * @example
   * 15000-9999999999:55000
   */
  cspmCapacity?: string;
  /**
   * @remarks
   * The Cloud Security Posture Management (CSPM) instance authorization capacity.
   * 
   * @example
   * 100
   */
  cspmInstanceCapacity?: string;
  /**
   * @remarks
   * The value range for the number of servers for Enterprise Edition. Valid values:
   * - **Value**: 1-2000000000
   * - **Step size**: 1
   * 
   * @example
   * 1-2000000000:1
   */
  enterpriseCount?: string;
  /**
   * @remarks
   * The cloud honeypot quota. Valid values:
   * 
   * - **20-500**: The value range.
   * - **1**: The step size.
   * 
   * @example
   * 20-500:1
   */
  honeypotCapacity?: string;
  /**
   * @remarks
   * The image scan quota. Valid values:
   * 
   * - **1-200000**: The value range.
   * - **20**: The step size.
   * 
   * @example
   * 0-200000:20
   */
  imageScanCapacity?: string;
  /**
   * @remarks
   * The Application Protection quota. Valid values:
   * 
   * - **1-100000000**: The value range.
   * - **1**: The step size.
   * 
   * @example
   * 0-100000000:1
   */
  raspCapacity?: string;
  /**
   * @remarks
   * The malicious file detection SDK quota. Valid values:
   * 
   * - **10-9999999999**: The value range.
   * - **10**: The step size.
   * 
   * @example
   * 10-9999999999:10
   */
  sdkCapacity?: string;
  /**
   * @remarks
   * The log storage capacity. Valid values:
   * 
   * - **1-600000000**: The value range.
   * - **10**: The step size.
   * 
   * @example
   * 0-600000000:10
   */
  slsCapacity?: string;
  /**
   * @remarks
   * The threat analysis capacity. Valid values:
   * 
   * - **1-9999999999**: The value range.
   * - **1000**: The step size.
   * 
   * @example
   * 0-9999999999:1000
   */
  threatAnalysisCapacity?: string;
  /**
   * @remarks
   * The log ingestion traffic for Cloud Threat Detection and Response (CTDR). Valid values:
   * 
   * - **1-9999999999**: The value range.
   * - **100**: The step size.
   * 
   * @example
   * 0-9999999999:100
   */
  threatAnalysisFlow?: string;
  /**
   * @remarks
   * The web tamper-proofing authorization quota. Valid values:
   * 
   * - **1-9999**: The value range.
   * - **1**: The step size.
   * 
   * @example
   * 0-9999:1
   */
  webLockCapacity?: string;
  static names(): { [key: string]: string } {
    return {
      advancedCount: 'AdvancedCount',
      antiRansomwareCapacity: 'AntiRansomwareCapacity',
      antiRansomwareService: 'AntiRansomwareService',
      antiVirusCore: 'AntiVirusCore',
      containerCore: 'ContainerCore',
      containerCount: 'ContainerCount',
      cspmCapacity: 'CspmCapacity',
      cspmInstanceCapacity: 'CspmInstanceCapacity',
      enterpriseCount: 'EnterpriseCount',
      honeypotCapacity: 'HoneypotCapacity',
      imageScanCapacity: 'ImageScanCapacity',
      raspCapacity: 'RaspCapacity',
      sdkCapacity: 'SdkCapacity',
      slsCapacity: 'SlsCapacity',
      threatAnalysisCapacity: 'ThreatAnalysisCapacity',
      threatAnalysisFlow: 'ThreatAnalysisFlow',
      webLockCapacity: 'WebLockCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedCount: 'string',
      antiRansomwareCapacity: 'string',
      antiRansomwareService: 'number',
      antiVirusCore: 'string',
      containerCore: 'string',
      containerCount: 'string',
      cspmCapacity: 'string',
      cspmInstanceCapacity: 'string',
      enterpriseCount: 'string',
      honeypotCapacity: 'string',
      imageScanCapacity: 'string',
      raspCapacity: 'string',
      sdkCapacity: 'string',
      slsCapacity: 'string',
      threatAnalysisCapacity: 'string',
      threatAnalysisFlow: 'string',
      webLockCapacity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceAuthRangeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance authorization ranges.
   */
  instanceAuthRange?: GetInstanceAuthRangeResponseBodyInstanceAuthRange;
  /**
   * @remarks
   * The ID of the request. This ID is a unique identifier generated by Alibaba Cloud for the request and can be used for troubleshooting.
   * 
   * @example
   * F8B6F758-BCD4-597A-8A2C-DA5A552C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceAuthRange: 'InstanceAuthRange',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceAuthRange: GetInstanceAuthRangeResponseBodyInstanceAuthRange,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceAuthRange && typeof (this.instanceAuthRange as any).validate === 'function') {
      (this.instanceAuthRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

