// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVersionConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of agentless detection quotas.
   * > Agentless detection is not available for purchase. You can ignore this field.
   * 
   * @example
   * 10
   */
  agentlessCapacity?: number;
  /**
   * @remarks
   * Indicates whether pay-as-you-go purchasing is allowed.
   * 
   * - **0**: not allowed
   * - **1**: allowed.
   * 
   * @example
   * 1
   */
  allowPartialBuy?: number;
  /**
   * @remarks
   * The anti-ransomware backup capacity. Unit: GB.
   * 
   * @example
   * 160
   */
  antiRansomwareCapacity?: number;
  /**
   * @remarks
   * The status of the anti-ransomware managed service. Valid values:
   * - **0**: not activated
   * - **1**: activated.
   * 
   * @example
   * 1
   */
  antiRansomwareService?: number;
  /**
   * @remarks
   * Indicates whether the application whitelist is enabled. Valid values:
   * - **0**: disabled
   * - **2**: enabled.
   * 
   * @example
   * 2
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
   * The number of purchased server authorization quotas.
   * 
   * @example
   * 30
   */
  assetLevel?: number;
  /**
   * @remarks
   * Indicates whether the pay-as-you-go trial plan can be activated. Valid values:
   * - **0**: not supported
   * - **1**: supported.
   * 
   * @example
   * 1
   */
  canTryPostPaidPackage?: number;
  /**
   * @remarks
   * The number of purchased Cloud Security Posture Management (CSPM) scans. Unit: times per month.
   * 
   * @example
   * 10
   */
  cspmCapacity?: number;
  /**
   * @example
   * 100
   */
  cspmInstanceCapacity?: number;
  /**
   * @remarks
   * The highest purchased edition of Security Center. Valid values:
   * - **1**: Free Edition
   * - **3**: Enterprise Edition
   * - **5**: Pro Edition
   * - **6**: Anti-virus Edition
   * - **7**: Ultimate Edition
   * - **10**: Value-added services only
   * > If a single edition is purchased, this value indicates the corresponding edition. If multiple editions are purchased, this value indicates the highest edition among the purchased editions.
   * 
   * @example
   * 1
   */
  highestVersion?: number;
  /**
   * @remarks
   * The number of purchased honeypot authorization quotas.
   * 
   * @example
   * 20
   */
  honeypotCapacity?: number;
  /**
   * @example
   * 100
   */
  hybridPaidModuleSwitchMap?: number;
  hybridPaidStatus?: number;
  /**
   * @example
   * 100
   */
  hybridSwitch?: number;
  /**
   * @remarks
   * The number of purchased image scan authorization quotas.
   * 
   * @example
   * 8954
   */
  imageScanCapacity?: number;
  /**
   * @remarks
   * The instance purchase type. Valid values:
   * - **0**: self-purchased
   * - **1**: allocated from a multi-account setup.
   * 
   * @example
   * 0
   */
  instanceBuyType?: number;
  /**
   * @remarks
   * The instance ID of the purchased Security Center instance.
   * 
   * @example
   * sas-vg6hafdsafs****
   */
  instanceId?: string;
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
   * - **true**: The instance is the latest version.
   * 
   * - **false**: The instance is not the latest version.
   * 
   * @example
   * true
   */
  isNewContainerVersion?: boolean;
  /**
   * @remarks
   * Indicates whether the instance is the new Multi-version Edition.
   * 
   * - **true**: The instance is the latest multi-version.
   * 
   * - **false**: The instance is not the latest multi-version.
   * 
   * @example
   * true
   */
  isNewMultiVersion?: boolean;
  /**
   * @remarks
   * Indicates whether the number of existing servers exceeds the maximum number of purchased authorizations. Valid values:
   * - **false**: The number does not exceed the limit.
   * - **true**: The number exceeds the limit.
   * 
   * >Notice: This parameter is deprecated. You can ignore it..
   * 
   * @example
   * false
   */
  isOverBalance?: boolean;
  /**
   * @remarks
   * Indicates whether pay-as-you-go billing is enabled. Valid values:
   * - **false**: disabled
   * - **true**: enabled.
   * 
   * @example
   * true
   */
  isPostpay?: boolean;
  /**
   * @remarks
   * Indicates whether the current Security Center edition is a trial version. Valid values:
   * - **0**: not a trial version
   * - **1**: trial version.
   * 
   * @example
   * 0
   */
  isTrialVersion?: number;
  /**
   * @remarks
   * The end timestamp of the last trial of Security Center. Unit: milliseconds.
   * 
   * @example
   * 1603934844000
   */
  lastTrailEndTime?: number;
  /**
   * @remarks
   * The total number of authorizations when multiple editions are purchased.
   * 
   * @example
   * 5000
   */
  MVAuthCount?: number;
  /**
   * @remarks
   * The total number of remaining authorizations when multiple editions are purchased.
   * 
   * @example
   * 40
   */
  MVUnusedAuthCount?: number;
  /**
   * @remarks
   * The higher protection edition between the subscription and pay-as-you-go host and container security services of Security Center when both are activated. Valid values:
   * - **1**: Free Edition
   * - **6**: Anti-virus Edition
   * - **5**: Premium Edition
   * - **3**: Enterprise Edition
   * - **7**: Ultimate Edition.
   * 
   * @example
   * 7
   */
  mergedVersion?: number;
  /**
   * @remarks
   * The multi-version edition numbers and authorization usage.
   * 
   * @example
   * null
   */
  multiVersion?: string;
  /**
   * @example
   * 100
   */
  newPostPaidCspm?: number;
  /**
   * @remarks
   * Indicates whether the new version of Cloud Threat Detection and Response (CTDR) is enabled. The new version supports purchasing ingestion traffic and log storage capacity for Cloud Threat Detection and Response (CTDR). Valid values:
   * - **0**: disabled
   * - **1**: enabled.
   * 
   * @example
   * 1
   */
  newThreatAnalysis?: number;
  /**
   * @remarks
   * The number of AI digital human managed instances.
   * 
   * @example
   * 10
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
   * The highest protection edition for bound assets when the pay-as-you-go host and container security service is activated. Valid values:
   * - **1**: Free Edition
   * - **3**: Enterprise Edition
   * - **5**: Pro Edition
   * - **6**: Anti-virus Edition
   * - **7**: Ultimate Edition.
   * 
   * @example
   * 7
   */
  postPayHostVersion?: number;
  /**
   * @remarks
   * The instance ID of the pay-as-you-go instance.
   * 
   * @example
   * postpay-sas-**
   */
  postPayInstanceId?: string;
  /**
   * @remarks
   * The status of pay-as-you-go module switches, in JSON string format. Valid values:
   * - Key:
   *   - **VUL**: vulnerability fix module
   *   - **CSPM**: Cloud Security Posture Management (CSPM) module
   *   - **AGENTLESS**: agentless detection module
   *   - **SERVERLESS**: serverless security module
   *   - **CTDR**: threat detection and response module
   *   - **POST_HOST**: host and container security module
   *   - **SDK**: malicious file detection SDK module
   *   - **RASP**: application protection module
   * - Value: 0 indicates disabled, 1 indicates enabled.
   * 
   * @example
   * {"VUL":1}
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
   * The number of purchased application protection quotas. Unit: per month.
   * 
   * @example
   * 10
   */
  raspCapacity?: number;
  /**
   * @remarks
   * The UNIX timestamp when the Security Center instance expires. Unit: milliseconds.
   * > If you do not complete renewal within 7 days after the instance expires, your paid instance is downgraded to Free Edition. You can no longer use the features of the paid edition, and the Security Center configuration data and historical alerting data (such as DDoS alerts) become inaccessible. In this case, you must repurchase Security Center to enable the paid edition. For more information, see [Purchase Security Center](https://help.aliyun.com/document_detail/42308.html).
   * 
   * @example
   * 1625846400000
   */
  releaseTime?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C2DC96D2-DD2E-49D9-A28E-85590475DF55
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether log analysis is purchased. Valid values:
   * - **0**: not purchased
   * - **1**: purchased.
   * 
   * @example
   * 1
   */
  sasLog?: number;
  /**
   * @remarks
   * Indicates whether the security dashboard is purchased. Valid values:
   * - **0**: not purchased
   * - **1**: purchased.
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
   * The purchased log storage capacity. Unit: GB. Valid values: 0 to 200000.
   * 
   * @example
   * 10240
   */
  slsCapacity?: number;
  /**
   * @remarks
   * The purchased threat analysis capacity. Unit: GB.
   * 
   * @example
   * 25
   */
  threatAnalysisCapacity?: number;
  /**
   * @remarks
   * The purchased log ingestion traffic for threat detection and response. Unit: GB per day.
   * 
   * @example
   * 10
   */
  threatAnalysisFlow?: number;
  /**
   * @remarks
   * Indicates whether the custom alerting feature is enabled. Valid values:
   * - **0**: disabled
   * - **2**: enabled.
   * 
   * @example
   * 0
   */
  userDefinedAlarms?: number;
  /**
   * @remarks
   * The purchased edition of Security Center. Valid values:  
   * - **1**: Free Edition 
   * - **3**: Enterprise Edition
   * - **5**: Pro Edition
   * - **6**: Anti-virus Edition    
   * - **7**: Ultimate Edition   
   * - **8**: Multi-version Edition   
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
   * The number of purchased vulnerability fixes. Unit: times per month.
   * 
   * @example
   * 10
   */
  vulFixCapacity?: number;
  /**
   * @remarks
   * Indicates whether web tamper-proofing is enabled. Valid values:
   * - **0**: disabled
   * - **1**: enabled.
   * 
   * @example
   * 0
   */
  webLock?: number;
  /**
   * @remarks
   * The number of purchased web tamper-proofing authorizations. One authorization allows you to enable web tamper-proofing for one server. Valid values: 0 to N.
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
      cspmInstanceCapacity: 'CspmInstanceCapacity',
      highestVersion: 'HighestVersion',
      honeypotCapacity: 'HoneypotCapacity',
      hybridPaidModuleSwitchMap: 'HybridPaidModuleSwitchMap',
      hybridPaidStatus: 'HybridPaidStatus',
      hybridSwitch: 'HybridSwitch',
      imageScanCapacity: 'ImageScanCapacity',
      instanceBuyType: 'InstanceBuyType',
      instanceId: 'InstanceId',
      intelligentAnalysisFlow: 'IntelligentAnalysisFlow',
      isNewContainerVersion: 'IsNewContainerVersion',
      isNewMultiVersion: 'IsNewMultiVersion',
      isOverBalance: 'IsOverBalance',
      isPostpay: 'IsPostpay',
      isTrialVersion: 'IsTrialVersion',
      lastTrailEndTime: 'LastTrailEndTime',
      MVAuthCount: 'MVAuthCount',
      MVUnusedAuthCount: 'MVUnusedAuthCount',
      mergedVersion: 'MergedVersion',
      multiVersion: 'MultiVersion',
      newPostPaidCspm: 'NewPostPaidCspm',
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
      cspmInstanceCapacity: 'number',
      highestVersion: 'number',
      honeypotCapacity: 'number',
      hybridPaidModuleSwitchMap: 'number',
      hybridPaidStatus: 'number',
      hybridSwitch: 'number',
      imageScanCapacity: 'number',
      instanceBuyType: 'number',
      instanceId: 'string',
      intelligentAnalysisFlow: 'number',
      isNewContainerVersion: 'boolean',
      isNewMultiVersion: 'boolean',
      isOverBalance: 'boolean',
      isPostpay: 'boolean',
      isTrialVersion: 'number',
      lastTrailEndTime: 'number',
      MVAuthCount: 'number',
      MVUnusedAuthCount: 'number',
      mergedVersion: 'number',
      multiVersion: 'string',
      newPostPaidCspm: 'number',
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

