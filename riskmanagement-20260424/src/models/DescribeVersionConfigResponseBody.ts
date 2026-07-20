// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVersionConfigResponseBodyDataBody extends $dara.Model {
  /**
   * @example
   * 10
   */
  agentlessCapacity?: number;
  /**
   * @example
   * 1
   */
  allowPartialBuy?: number;
  /**
   * @example
   * 1680
   */
  antiRansomwareCapacity?: number;
  /**
   * @example
   * 1
   */
  antiRansomwareService?: number;
  /**
   * @example
   * 0
   */
  appWhiteList?: number;
  /**
   * @example
   * 20
   */
  appWhiteListAuthCount?: number;
  /**
   * @example
   * 30
   */
  assetLevel?: number;
  /**
   * @example
   * 0
   */
  canTryPostPaidPackage?: number;
  /**
   * @example
   * 10
   */
  cspmCapacity?: number;
  /**
   * @example
   * 1
   */
  highestVersion?: number;
  /**
   * @example
   * 0
   */
  honeypotCapacity?: number;
  /**
   * @example
   * 1900
   */
  imageScanCapacity?: number;
  /**
   * @example
   * 1
   */
  instanceBuyType?: number;
  /**
   * @example
   * 100
   */
  intelligentAnalysisFlow?: number;
  /**
   * @example
   * true
   */
  isNewContainerVersion?: boolean;
  /**
   * @example
   * true
   */
  isNewMultiVersion?: boolean;
  /**
   * @example
   * false
   */
  isOverBalance?: boolean;
  /**
   * @example
   * true
   */
  isPostpay?: boolean;
  /**
   * @example
   * 0
   */
  isTrialVersion?: number;
  /**
   * @example
   * 1603934844000
   */
  lastTrailEndTime?: number;
  /**
   * @example
   * 1
   */
  mergedVersion?: number;
  /**
   * @example
   * null
   */
  multiVersion?: string;
  /**
   * @example
   * 0
   */
  mvAuthCount?: number;
  /**
   * @example
   * 0
   */
  mvUnusedAuthCount?: number;
  /**
   * @example
   * 0
   */
  newThreatAnalysis?: number;
  /**
   * @example
   * 0
   */
  onboardedAssets?: number;
  /**
   * @example
   * 1657244824669
   */
  openTime?: number;
  /**
   * @example
   * 1
   */
  postPayHostVersion?: number;
  /**
   * @example
   * postpay-sas-frme8vjfiw2j
   */
  postPayInstanceId?: string;
  /**
   * @example
   * {\\"BASIC_SERVICE\\":0,\\"VUL\\":0}
   */
  postPayModuleSwitch?: string;
  /**
   * @example
   * 1698915219000
   */
  postPayOpenTime?: number;
  /**
   * @example
   * 1
   */
  postPayStatus?: number;
  /**
   * @example
   * 7
   */
  raspCapacity?: number;
  /**
   * @example
   * 1625846400000
   */
  releaseTime?: number;
  /**
   * @example
   * A6FB9AC3-4431-538F-BA8A-2A13AEA208A4
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  sasLog?: number;
  /**
   * @example
   * 0
   */
  sasScreen?: number;
  /**
   * @example
   * 10
   */
  sdkCapacity?: number;
  /**
   * @example
   * 200
   */
  slsCapacity?: number;
  /**
   * @example
   * 10
   */
  threatAnalysisCapacity?: number;
  /**
   * @example
   * 10
   */
  threatAnalysisFlow?: number;
  /**
   * @example
   * 0
   */
  userDefinedAlarms?: number;
  /**
   * @example
   * 3
   */
  version?: number;
  /**
   * @example
   * 10
   */
  vmCores?: number;
  /**
   * @example
   * 8
   */
  vulFixCapacity?: number;
  /**
   * @example
   * 0
   */
  webLock?: number;
  /**
   * @example
   * 0
   */
  webLockAuthCount?: number;
  static names(): { [key: string]: string } {
    return {
      agentlessCapacity: 'AgentlessCapacity',
      allowPartialBuy: 'AllowPartialBuy',
      antiRansomwareCapacity: 'AntiRansomwareCapacity',
      antiRansomwareService: 'AntiRansomwareService',
      appWhiteList: 'AppWhiteList',
      appWhiteListAuthCount: 'AppWhiteListAuthCount',
      assetLevel: 'AssetLevel',
      canTryPostPaidPackage: 'CanTryPostPaidPackage',
      cspmCapacity: 'CspmCapacity',
      highestVersion: 'HighestVersion',
      honeypotCapacity: 'HoneypotCapacity',
      imageScanCapacity: 'ImageScanCapacity',
      instanceBuyType: 'InstanceBuyType',
      intelligentAnalysisFlow: 'IntelligentAnalysisFlow',
      isNewContainerVersion: 'IsNewContainerVersion',
      isNewMultiVersion: 'IsNewMultiVersion',
      isOverBalance: 'IsOverBalance',
      isPostpay: 'IsPostpay',
      isTrialVersion: 'IsTrialVersion',
      lastTrailEndTime: 'LastTrailEndTime',
      mergedVersion: 'MergedVersion',
      multiVersion: 'MultiVersion',
      mvAuthCount: 'MvAuthCount',
      mvUnusedAuthCount: 'MvUnusedAuthCount',
      newThreatAnalysis: 'NewThreatAnalysis',
      onboardedAssets: 'OnboardedAssets',
      openTime: 'OpenTime',
      postPayHostVersion: 'PostPayHostVersion',
      postPayInstanceId: 'PostPayInstanceId',
      postPayModuleSwitch: 'PostPayModuleSwitch',
      postPayOpenTime: 'PostPayOpenTime',
      postPayStatus: 'PostPayStatus',
      raspCapacity: 'RaspCapacity',
      releaseTime: 'ReleaseTime',
      requestId: 'RequestId',
      sasLog: 'SasLog',
      sasScreen: 'SasScreen',
      sdkCapacity: 'SdkCapacity',
      slsCapacity: 'SlsCapacity',
      threatAnalysisCapacity: 'ThreatAnalysisCapacity',
      threatAnalysisFlow: 'ThreatAnalysisFlow',
      userDefinedAlarms: 'UserDefinedAlarms',
      version: 'Version',
      vmCores: 'VmCores',
      vulFixCapacity: 'VulFixCapacity',
      webLock: 'WebLock',
      webLockAuthCount: 'WebLockAuthCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentlessCapacity: 'number',
      allowPartialBuy: 'number',
      antiRansomwareCapacity: 'number',
      antiRansomwareService: 'number',
      appWhiteList: 'number',
      appWhiteListAuthCount: 'number',
      assetLevel: 'number',
      canTryPostPaidPackage: 'number',
      cspmCapacity: 'number',
      highestVersion: 'number',
      honeypotCapacity: 'number',
      imageScanCapacity: 'number',
      instanceBuyType: 'number',
      intelligentAnalysisFlow: 'number',
      isNewContainerVersion: 'boolean',
      isNewMultiVersion: 'boolean',
      isOverBalance: 'boolean',
      isPostpay: 'boolean',
      isTrialVersion: 'number',
      lastTrailEndTime: 'number',
      mergedVersion: 'number',
      multiVersion: 'string',
      mvAuthCount: 'number',
      mvUnusedAuthCount: 'number',
      newThreatAnalysis: 'number',
      onboardedAssets: 'number',
      openTime: 'number',
      postPayHostVersion: 'number',
      postPayInstanceId: 'string',
      postPayModuleSwitch: 'string',
      postPayOpenTime: 'number',
      postPayStatus: 'number',
      raspCapacity: 'number',
      releaseTime: 'number',
      requestId: 'string',
      sasLog: 'number',
      sasScreen: 'number',
      sdkCapacity: 'number',
      slsCapacity: 'number',
      threatAnalysisCapacity: 'number',
      threatAnalysisFlow: 'number',
      userDefinedAlarms: 'number',
      version: 'number',
      vmCores: 'number',
      vulFixCapacity: 'number',
      webLock: 'number',
      webLockAuthCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVersionConfigResponseBodyData extends $dara.Model {
  body?: DescribeVersionConfigResponseBodyDataBody;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: DescribeVersionConfigResponseBodyDataBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVersionConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DescribeVersionConfigResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 6D462855-7835-5F91-835E-A62E44EC01CC
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeVersionConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

