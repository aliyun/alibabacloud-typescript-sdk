// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceAuthRangeResponseBodyInstanceAuthRange extends $dara.Model {
  /**
   * @remarks
   * Advanced version count. Values:
   * 
   * - **1-2000000000**: Range
   * - **1**: Step
   * 
   * @example
   * 1-2000000000:1
   */
  advancedCount?: string;
  /**
   * @remarks
   * Anti-ransomware capacity. Values:
   * 
   * - **1-9000000000**: Range
   * - **10**: Step
   * 
   * @example
   * 0-9000000000:10
   */
  antiRansomwareCapacity?: string;
  /**
   * @remarks
   * Anti-ransomware service. Values:
   * - **0**: Not enabled
   * - **1**: Enabled
   * 
   * @example
   * 1
   */
  antiRansomwareService?: number;
  /**
   * @remarks
   * Anti-virus core count. Values:
   * 
   * - **1-2000000000**: Range
   * - **1**: Step
   * 
   * @example
   * 1-2000000000:1
   */
  antiVirusCore?: string;
  /**
   * @remarks
   * Flagship version core count. Values:
   * 
   * - **1-2000000000**: Range
   * - **1**: Step
   * 
   * @example
   * 1-2000000000:1
   */
  containerCore?: string;
  /**
   * @remarks
   * Flagship version count. Values:
   * 
   * - **1-2000000000**: Range
   * - **1**: Step
   * 
   * @example
   * 1-2000000000:1
   */
  containerCount?: string;
  /**
   * @remarks
   * Number of cloud platform configuration check scans. Value:
   * 
   * - **15000-9999999999**：Range
   * - **55000**：Step
   * 
   * @example
   * 15000-9999999999:55000
   */
  cspmCapacity?: string;
  /**
   * @remarks
   * Enterprise version count. Range:
   * - **Value**: 1-2000000000
   * - **Step**: 1
   * 
   * @example
   * 1-2000000000:1
   */
  enterpriseCount?: string;
  /**
   * @remarks
   * Number of authorized honeypots. Value:
   * 
   * - **20-500**：Range
   * - **1**：Step
   * 
   * @example
   * 20-500:1
   */
  honeypotCapacity?: string;
  /**
   * @remarks
   * Image scan authorization count. Values:
   * 
   * - **1-200000**: Range
   * - **20**: Step
   * 
   * @example
   * 0-200000:20
   */
  imageScanCapacity?: string;
  /**
   * @remarks
   * Application protection count. Values:
   * 
   * - **1-100000000**: Range
   * - **1**: Step
   * 
   * @example
   * 0-100000000:1
   */
  raspCapacity?: string;
  /**
   * @remarks
   * Number of authorized malicious file detection SDKs. Value:
   * 
   * - **10-9999999999**：Range
   * - **10**：Step
   * 
   * @example
   * 10-9999999999:10
   */
  sdkCapacity?: string;
  /**
   * @remarks
   * Log storage capacity. Values:
   * 
   * - **1-600000000**: Range
   * - **10**: Step
   * 
   * @example
   * 0-600000000:10
   */
  slsCapacity?: string;
  /**
   * @remarks
   * Threat analysis capacity. Values:
   * 
   * - **1-9999999999**: Range
   * - **1000**: Step
   * 
   * @example
   * 0-9999999999:1000
   */
  threatAnalysisCapacity?: string;
  /**
   * @remarks
   * Threat analysis and response log access traffic. Values:
   * 
   * - **1-9999999999**: Range
   * - **100**: Step
   * 
   * @example
   * 0-9999999999:100
   */
  threatAnalysisFlow?: string;
  /**
   * @remarks
   * Web tamper-proof authorization count. Values:
   * 
   * - **1-9999**: Range
   * - **1**: Step
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
   * Instance range validation
   */
  instanceAuthRange?: GetInstanceAuthRangeResponseBodyInstanceAuthRange;
  /**
   * @remarks
   * The ID of the current call request, which is a unique identifier generated by Alibaba Cloud for this request and can be used to troubleshoot and locate issues.
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

