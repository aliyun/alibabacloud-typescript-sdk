// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceAuthRangeResponseBodyInstanceAuthRange extends $dara.Model {
  /**
   * @example
   * 1-2000000000:1
   */
  advancedCount?: string;
  /**
   * @example
   * 0-9000000000:10
   */
  antiRansomwareCapacity?: string;
  /**
   * @example
   * 1
   */
  antiRansomwareService?: number;
  /**
   * @example
   * 1-2000000000:1
   */
  antiVirusCore?: string;
  /**
   * @example
   * 1-2000000000:1
   */
  containerCore?: string;
  /**
   * @example
   * 1-2000000000:1
   */
  containerCount?: string;
  /**
   * @example
   * 15000-9999999999:55000
   */
  cspmCapacity?: string;
  /**
   * @example
   * 1-2000000000:1
   */
  enterpriseCount?: string;
  /**
   * @example
   * 20-500:1
   */
  honeypotCapacity?: string;
  /**
   * @example
   * 0-200000:20
   */
  imageScanCapacity?: string;
  /**
   * @example
   * 0-100000000:1
   */
  raspCapacity?: string;
  /**
   * @example
   * 10-9999999999:10
   */
  sdkCapacity?: string;
  /**
   * @example
   * 0-600000000:10
   */
  slsCapacity?: string;
  /**
   * @example
   * 0-9999999999:1000
   */
  threatAnalysisCapacity?: string;
  /**
   * @example
   * 0-9999999999:100
   */
  threatAnalysisFlow?: string;
  /**
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
  instanceAuthRange?: GetInstanceAuthRangeResponseBodyInstanceAuthRange;
  /**
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

