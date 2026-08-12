// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVersionConfigResponseBodyDataBody extends $dara.Model {
  /**
   * @remarks
   * The agentless detection quota.
   * >Agentless detection is not available for purchase. You can ignore this field.
   * 
   * @example
   * 10
   */
  agentlessCapacity?: number;
  /**
   * @remarks
   * Indicates whether pay-as-you-go purchase is allowed.
   * 
   * - **0**: Not allowed.
   * - **1**: Allowed.
   * 
   * @example
   * 1
   */
  allowPartialBuy?: number;
  /**
   * @remarks
   * The allocated anti-ransomware capacity. Unit: GB.
   * 
   * @example
   * 1680
   */
  antiRansomwareCapacity?: number;
  /**
   * @remarks
   * Indicates whether the anti-ransomware managed service is enabled. Valid values:
   * - **0**: Not enabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  antiRansomwareService?: number;
  /**
   * @remarks
   * Indicates whether the application whitelist feature is enabled. Valid values:
   * - **0**: Not enabled.
   * - **2**: Enabled.
   * 
   * @example
   * 0
   */
  appWhiteList?: number;
  /**
   * @remarks
   * The number of application whitelist authorizations.
   * > One authorization allows you to apply an application whitelist policy to one server. After the application whitelist feature is enabled, the account has 20 authorizations by default.
   * 
   * @example
   * 20
   */
  appWhiteListAuthCount?: number;
  /**
   * @remarks
   * The number of purchased server authorizations.
   * 
   * @example
   * 30
   */
  assetLevel?: number;
  /**
   * @remarks
   * Indicates whether the pay-as-you-go trial plan can be activated. Valid values:
   * - **0**: Not supported.
   * - **1**: Supported.
   * 
   * @example
   * 0
   */
  canTryPostPaidPackage?: number;
  /**
   * @remarks
   * The allocated Cloud Security Posture Management (CSPM) scan quota. Unit: times/month.
   * 
   * @example
   * 10
   */
  cspmCapacity?: number;
  /**
   * @remarks
   * The highest purchased edition of Security Center. Valid values:
   * - **1**: Free Edition.
   * - **3**: Enterprise Edition.
   * - **5**: Premium Edition.
   * - **6**: Anti-virus Edition.
   * - **7**: Ultimate Edition.
   * - **10**: Value-added services only.
   * > If a single edition is purchased, this value indicates the corresponding edition. If multiple editions are purchased, this value indicates the highest edition among them.
   * 
   * @example
   * 1
   */
  highestVersion?: number;
  /**
   * @remarks
   * The allocated number of honeypot authorizations.
   * 
   * @example
   * 0
   */
  honeypotCapacity?: number;
  /**
   * @remarks
   * The number of purchased image scan authorizations.
   * 
   * @example
   * 1900
   */
  imageScanCapacity?: number;
  /**
   * @remarks
   * The instance purchase type. Valid values:
   * - **0**: Self-purchased.
   * - **1**: Allocated by multi-account management.
   * 
   * @example
   * 1
   */
  instanceBuyType?: number;
  /**
   * @remarks
   * The AI digital human analysis traffic.
   * 
   * @example
   * 100
   */
  intelligentAnalysisFlow?: number;
  /**
   * @remarks
   * Indicates whether the instance is the new Ultimate Edition.
   * 
   * - **true**: The instance is the latest edition.
   * 
   * - **false**: The instance is not the latest edition.
   * 
   * @example
   * true
   */
  isNewContainerVersion?: boolean;
  /**
   * @remarks
   * Indicates whether the instance is the new multi-edition version.
   * 
   * - **true**: The instance is the latest multi-edition version.
   * 
   * - **false**: The instance is not the latest multi-edition version.
   * 
   * @example
   * true
   */
  isNewMultiVersion?: boolean;
  /**
   * @remarks
   * Indicates whether the number of existing servers exceeds the maximum purchased authorization quota. Valid values:
   * - **false**: Not exceeded.
   * - **true**: Exceeded.
   * 
   * >Notice: This parameter is deprecated. You can ignore it.
   * 
   * @example
   * false
   */
  isOverBalance?: boolean;
  /**
   * @remarks
   * Indicates whether pay-as-you-go billing is enabled. Valid values:
   * - **false**: Not enabled.
   * - **true**: Enabled.
   * 
   * @example
   * true
   */
  isPostpay?: boolean;
  /**
   * @remarks
   * Indicates whether the current Security Center edition is a trial version. Valid values:
   * - **0**: Not a trial version.
   * - **1**: A trial version.
   * 
   * @example
   * 0
   */
  isTrialVersion?: number;
  /**
   * @remarks
   * The end timestamp of the last Security Center trial. Unit: milliseconds.
   * 
   * @example
   * 1603934844000
   */
  lastTrailEndTime?: number;
  /**
   * @remarks
   * The higher protection edition when both subscription and pay-as-you-go host and container security services are enabled. Valid values:
   * - **1**: Free Edition.
   * - **6**: Anti-virus Edition.
   * - **5**: Premium Edition.
   * - **3**: Enterprise Edition.
   * - **7**: Ultimate Edition.
   * 
   * @example
   * 1
   */
  mergedVersion?: number;
  /**
   * @remarks
   * The multi-edition version numbers and authorization usage.
   * 
   * @example
   * null
   */
  multiVersion?: string;
  /**
   * @remarks
   * The total number of authorizations when multiple editions are purchased.
   * 
   * @example
   * 0
   */
  mvAuthCount?: number;
  /**
   * @remarks
   * The total number of remaining authorizations when multiple editions are purchased.
   * 
   * @example
   * 0
   */
  mvUnusedAuthCount?: number;
  /**
   * @remarks
   * Indicates whether the new version of Cloud Threat Detection and Response (CTDR) is enabled. The new version supports purchasing access traffic and log storage capacity for Cloud Threat Detection and Response (CTDR). Valid values:
   * - **0**: No.
   * - **1**: Yes.
   * 
   * @example
   * 0
   */
  newThreatAnalysis?: number;
  /**
   * @remarks
   * The AI digital human managed instances.
   * 
   * @example
   * 0
   */
  onboardedAssets?: number;
  /**
   * @remarks
   * The timestamp when the service was activated. Unit: milliseconds.
   * 
   * @example
   * 1657244824669
   */
  openTime?: number;
  /**
   * @remarks
   * The highest protection edition for bound assets when the pay-as-you-go host and container security service is enabled. Valid values:
   * - **1**: Free Edition.
   * - **3**: Enterprise Edition.
   * - **5**: Premium Edition.
   * - **6**: Anti-virus Edition.
   * - **7**: Ultimate Edition.
   * 
   * @example
   * 1
   */
  postPayHostVersion?: number;
  /**
   * @remarks
   * The pay-as-you-go instance ID.
   * 
   * @example
   * postpay-sas-frme8vjfiw2j
   */
  postPayInstanceId?: string;
  /**
   * @remarks
   * The switch status of pay-as-you-go modules in JSON string format. Valid values:
   * - Key:
   *   - **VUL**: Vulnerability fix module.
   *   - **CSPM**: Cloud Security Posture Management module.
   *   - **AGENTLESS**: Agentless detection module.
   *   - **SERVERLESS**: Serverless security module.
   *   - **CTDR**: Threat detection and response module.
   *   - **POST_HOST**: Host and container security module.
   *   - **SDK**: Malicious file detection SDK module.
   *   - **RASP**: Application protection module.
   * - Value: 0 indicates disabled. 1 indicates enabled.
   * 
   * @example
   * {\\"BASIC_SERVICE\\":0,\\"VUL\\":0}
   */
  postPayModuleSwitch?: string;
  /**
   * @remarks
   * The time when pay-as-you-go billing was activated.
   * 
   * @example
   * 1698915219000
   */
  postPayOpenTime?: number;
  /**
   * @remarks
   * The instance status of the pay-as-you-go instance. Valid values:
   * - **1**: Normal.
   * - **2**: Suspended due to overdue payment.
   * 
   * @example
   * 1
   */
  postPayStatus?: number;
  /**
   * @remarks
   * The number of purchased application protection quotas. Unit: count/month.
   * 
   * @example
   * 7
   */
  raspCapacity?: number;
  /**
   * @remarks
   * The UNIX timestamp that indicates when the Security Center instance expires. Unit: milliseconds.
   * 
   * > If you do not perform renewal within 7 days after the instance expires, your paid edition instance is downgraded to Free Edition. You can no longer use the features of the paid edition, and your previous Security Center configuration data and historical alerting data (such as DDoS alerts) become inaccessible. In this case, you must repurchase Security Center to re-enable the paid edition. For more information, refer to the Security Center purchase documentation.
   * 
   * @example
   * 1625846400000
   */
  releaseTime?: number;
  /**
   * @remarks
   * The request ID of Security Center.
   * 
   * @example
   * A6FB9AC3-4431-538F-BA8A-2A13AEA208A4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether log analysis has been purchased. Valid values:
   * - **0**: Not purchased.
   * - **1**: Purchased.
   * 
   * @example
   * 0
   */
  sasLog?: number;
  /**
   * @remarks
   * Indicates whether the security dashboard has been purchased. Valid values:
   * - **0**: Not purchased.
   * - **1**: Purchased.
   * 
   * @example
   * 0
   */
  sasScreen?: number;
  /**
   * @remarks
   * The number of malicious file detection SDK authorizations.
   * 
   * @example
   * 10
   */
  sdkCapacity?: number;
  /**
   * @remarks
   * The purchased log storage capacity. Unit: GB. Value range: 0 to 200000.
   * 
   * @example
   * 200
   */
  slsCapacity?: number;
  /**
   * @remarks
   * The purchased threat analysis capacity. Unit: GB.
   * 
   * @example
   * 10
   */
  threatAnalysisCapacity?: number;
  /**
   * @remarks
   * The purchased threat detection and response log access traffic. Unit: GB/day.
   * 
   * @example
   * 10
   */
  threatAnalysisFlow?: number;
  /**
   * @remarks
   * Indicates whether the custom alert feature is enabled. Valid values:
   * 
   * - **0**: Not enabled.
   * - **2**: Enabled.
   * 
   * @example
   * 0
   */
  userDefinedAlarms?: number;
  /**
   * @remarks
   * The purchased edition of Security Center. Valid values:
   * 
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
   * The number of purchased authorized cores.
   * 
   * @example
   * 10
   */
  vmCores?: number;
  /**
   * @remarks
   * The number of purchased vulnerability fix quotas. Unit: times/month.
   * 
   * @example
   * 8
   */
  vulFixCapacity?: number;
  /**
   * @remarks
   * Indicates whether the web tamper proofing service is enabled. Valid values:
   * - **0**: Not enabled.
   * - **1**: Enabled.
   * 
   * @example
   * 0
   */
  webLock?: number;
  /**
   * @remarks
   * The number of purchased web tamper proofing authorizations. One authorization enables web tamper proofing protection for one server. Value range: 0 to N.
   * > N is the number of servers that you own.
   * 
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
  /**
   * @remarks
   * The message body content encoded by the Base64 algorithm.
   */
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
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeVersionConfigResponseBodyData;
  /**
   * @remarks
   * The response message. A success message is returned if the request succeeds. An error message is returned if the request fails.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6D462855-7835-5F91-835E-A62E44EC01CC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values: true: The operation is successful. false: The operation failed.
   * 
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

