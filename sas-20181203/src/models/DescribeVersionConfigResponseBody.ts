// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVersionConfigResponseBodyTrialModuleList extends $dara.Model {
  /**
   * @remarks
   * The name of the trial sub-module.
   * 
   * @example
   * EDR
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVersionConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of agentless detection licenses.
   * > Agentless detection is not available for purchase. You can ignore this field.
   * 
   * @example
   * 10
   */
  agentlessCapacity?: number;
  /**
   * @remarks
   * Indicates whether pay-as-you-go purchases are allowed. Valid values:
   * - **0**: Not allowed.
   * - **1**: Allowed.
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
   * - **0**: Not activated.
   * - **1**: Activated.
   * 
   * @example
   * 1
   */
  antiRansomwareService?: number;
  /**
   * @remarks
   * Indicates whether the application whitelist is enabled. Valid values:
   * - **0**: Disabled.
   * - **2**: Enabled.
   * 
   * @example
   * 2
   */
  appWhiteList?: number;
  /**
   * @remarks
   * The number of application whitelist authorizations.
   * > One authorization allows you to apply a whitelist policy to one server. After the application whitelist feature is enabled, the account has 20 authorizations by default.
   * 
   * @example
   * 20
   */
  appWhiteListAuthCount?: number;
  /**
   * @remarks
   * The number of purchased server authorization licenses.
   * 
   * @example
   * 30
   */
  assetLevel?: number;
  /**
   * @remarks
   * Indicates whether Endpoint Detection and Response (EDR) is purchased.
   * 
   * @example
   * true
   */
  buySasEdr?: string;
  /**
   * @remarks
   * Indicates whether the pay-as-you-go trial plan can be activated. Valid values:
   * - **0**: Not supported.
   * - **1**: Supported.
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
   * @remarks
   * The AI digital human analysis traffic.
   * 
   * @example
   * 100
   */
  cspmInstanceCapacity?: number;
  /**
   * @remarks
   * The highest purchased edition of Security Center. Valid values:
   * - **1**: Free Edition.
   * - **3**: Enterprise Edition.
   * - **5**: Advanced Edition.
   * - **6**: Anti-virus Edition.
   * - **7**: Ultimate Edition.
   * - **10**: Value-added services only.
   * > If a single version is purchased, this value indicates the corresponding version. If multiple versions are purchased, this value indicates the highest version among the purchased versions.
   * 
   * @example
   * 1
   */
  highestVersion?: number;
  /**
   * @remarks
   * The number of purchased honeypot authorization licenses.
   * 
   * @example
   * 20
   */
  honeypotCapacity?: number;
  /**
   * @remarks
   * The canary release module for elastic billing.
   * 
   * @example
   * {"CSPM_INSTANCE":1}
   */
  hybridPaidGrayStatus?: string;
  /**
   * @remarks
   * The AI digital human analysis traffic.
   * 
   * @example
   * 100
   */
  hybridPaidModuleSwitchMap?: number;
  /**
   * @remarks
   * The status of the elastic billing switch.
   * 
   * @example
   * 1
   */
  hybridPaidStatus?: number;
  /**
   * @remarks
   * The AI digital human analysis traffic.
   * 
   * @example
   * 100
   */
  hybridSwitch?: number;
  /**
   * @remarks
   * The number of purchased image scan authorization licenses.
   * 
   * @example
   * 8954
   */
  imageScanCapacity?: number;
  /**
   * @remarks
   * The instance purchase type. Valid values:
   * - **0**: Self-purchased.
   * - **1**: Allocated through multi-account management.
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
   * Indicates whether the instance is the new Ultimate Edition. Valid values:
   * - **true**: The instance is the latest version.
   * - **false**: The instance is not the latest version.
   * 
   * @example
   * true
   */
  isNewContainerVersion?: boolean;
  /**
   * @remarks
   * Indicates whether the instance is the new multi-version edition. Valid values:
   * - **true**: The instance is the latest multi-version edition.
   * - **false**: The instance is not the latest multi-version edition.
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
   * >Notice: This parameter is deprecated. You can ignore it.
   * 
   * @example
   * false
   */
  isOverBalance?: boolean;
  /**
   * @remarks
   * Indicates whether pay-as-you-go billing is enabled. Valid values:
   * - **false**: Disabled.
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
   * - **1**: Trial version.
   * 
   * @example
   * 0
   */
  isTrialVersion?: number;
  /**
   * @remarks
   * The timestamp when the last trial of Security Center ended. Unit: milliseconds.
   * 
   * @example
   * 1603934844000
   */
  lastTrailEndTime?: number;
  /**
   * @remarks
   * The total number of authorizations when multiple versions are purchased.
   * 
   * @example
   * 5000
   */
  MVAuthCount?: number;
  /**
   * @remarks
   * The total number of remaining authorizations when multiple versions are purchased.
   * 
   * @example
   * 40
   */
  MVUnusedAuthCount?: number;
  /**
   * @remarks
   * The higher protection edition between the subscription and pay-as-you-go services when both host protection and container protection of Security Center are activated. Valid values:
   * - **1**: Basic Edition.
   * - **6**: Anti-virus Edition.
   * - **5**: Advanced Edition.
   * - **3**: Enterprise Edition.
   * - **7**: Ultimate Edition.
   * 
   * @example
   * 7
   */
  mergedVersion?: number;
  /**
   * @remarks
   * The multi-version number and authorization usage information.
   * 
   * @example
   * null
   */
  multiVersion?: string;
  /**
   * @remarks
   * The AI digital human analysis traffic.
   * 
   * @example
   * 100
   */
  newPostPaidCspm?: number;
  /**
   * @remarks
   * Indicates whether the new version of Cloud Threat Detection and Response (CTDR) is enabled. The new version of CTDR supports purchasing log ingestion traffic and log storage capacity. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  newThreatAnalysis?: number;
  /**
   * @remarks
   * The AI digital human managed instances.
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
   * The highest protection edition bound to assets when the pay-as-you-go host and container security service is activated. Valid values:
   * - **1**: Free Edition.
   * - **3**: Enterprise Edition.
   * - **5**: Advanced Edition.
   * - **6**: Anti-virus Edition.
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
   *   - **VUL**: Vulnerability fix module.
   *   - **CSPM**: Cloud Security Posture Management (CSPM) module.
   *   - **AGENTLESS**: Agentless detection module.
   *   - **SERVERLESS**: Serverless security module.
   *   - **CTDR**: Cloud Threat Detection and Response (CTDR) module.
   *   - **POST_HOST**: Host and container security module.
   *   - **SDK**: Malicious file detection SDK module.
   *   - **RASP**: Runtime application self-protection (RASP) module.
   * - Value: 0 indicates disabled, and 1 indicates enabled.
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
   * The number of purchased runtime application self-protection (RASP) licenses. Unit: licenses per month.
   * 
   * @example
   * 10
   */
  raspCapacity?: number;
  /**
   * @remarks
   * The timestamp when the Security Center instance expires. Unit: milliseconds.
   * > If you do not renew the instance within 7 days after it expires, your paid instance is downgraded to Free Edition. You can no longer use the features of the paid edition, and your Security Center configuration data and historical alert data (such as DDoS alerts) become inaccessible. In this case, you must repurchase Security Center to enable the paid edition. For more information, see [Purchase Security Center](https://help.aliyun.com/document_detail/42308.html).
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
   * The number of servers purchased for EDR.
   * 
   * @example
   * 10
   */
  sasEdrClientAuthCount?: string;
  /**
   * @remarks
   * The pay-as-you-go instance ID of EDR.
   * 
   * @example
   * sas-edr-postpaid-fadaf
   */
  sasEdrPostPaidInstanceId?: string;
  /**
   * @remarks
   * The subscription instance ID of EDR.
   * 
   * @example
   * sas-edr-sfkhakhk
   */
  sasEdrPrePaidInstanceId?: string;
  /**
   * @remarks
   * The instance status of the EDR upfront instance.
   * 
   * @example
   * RELEASED
   */
  sasEdrPrePaidInstanceStatus?: string;
  /**
   * @remarks
   * The purchased edition of EDR.
   * 
   * @example
   * 1
   */
  sasEdrVersion?: string;
  /**
   * @remarks
   * Indicates whether log analysis is purchased. Valid values:
   * - **0**: Not purchased.
   * - **1**: Purchased.
   * 
   * @example
   * 1
   */
  sasLog?: number;
  /**
   * @remarks
   * Indicates whether the security dashboard is purchased. Valid values:
   * - **0**: Not purchased.
   * - **1**: Purchased.
   * 
   * @example
   * 0
   */
  sasScreen?: number;
  /**
   * @remarks
   * The canary release status of the pay-as-you-go SDK.
   * 
   * @example
   * 1
   */
  sdkAiPostPaidGray?: number;
  /**
   * @remarks
   * The number of malicious file detection SDK authorization licenses.
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
   * The purchased log ingestion traffic for Cloud Threat Detection and Response (CTDR). Unit: GB per day.
   * 
   * @example
   * 10
   */
  threatAnalysisFlow?: number;
  /**
   * @remarks
   * The list of trial sub-modules.
   */
  trialModuleList?: DescribeVersionConfigResponseBodyTrialModuleList[];
  /**
   * @remarks
   * The trial version.
   * 
   * @example
   * 1
   */
  trialVersion?: number;
  /**
   * @remarks
   * Indicates whether the custom alert feature is enabled. Valid values:
   * - **0**: Disabled.
   * - **2**: Enabled.
   * 
   * @example
   * 0
   */
  userDefinedAlarms?: number;
  /**
   * @remarks
   * The purchased edition of Security Center. Valid values:  
   * - **1**: Free Edition. 
   * - **3**: Enterprise Edition.
   * - **5**: Advanced Edition.
   * - **6**: Anti-virus Edition.    
   * - **7**: Ultimate Edition.   
   * - **8**: Multi-version Edition.   
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
   * Indicates whether web tamper proofing is enabled. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 0
   */
  webLock?: number;
  /**
   * @remarks
   * The number of purchased web tamper proofing authorizations. One authorization allows you to enable web tamper proofing for one server. Valid values: 0 to N.
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
      buySasEdr: 'BuySasEdr',
      canTryPostPaidPackage: 'CanTryPostPaidPackage',
      cspmCapacity: 'CspmCapacity',
      cspmInstanceCapacity: 'CspmInstanceCapacity',
      highestVersion: 'HighestVersion',
      honeypotCapacity: 'HoneypotCapacity',
      hybridPaidGrayStatus: 'HybridPaidGrayStatus',
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
      sasEdrClientAuthCount: 'SasEdrClientAuthCount',
      sasEdrPostPaidInstanceId: 'SasEdrPostPaidInstanceId',
      sasEdrPrePaidInstanceId: 'SasEdrPrePaidInstanceId',
      sasEdrPrePaidInstanceStatus: 'SasEdrPrePaidInstanceStatus',
      sasEdrVersion: 'SasEdrVersion',
      sasLog: 'SasLog',
      sasScreen: 'SasScreen',
      sdkAiPostPaidGray: 'SdkAiPostPaidGray',
      sdkCapacity: 'SdkCapacity',
      slsCapacity: 'SlsCapacity',
      threatAnalysisCapacity: 'ThreatAnalysisCapacity',
      threatAnalysisFlow: 'ThreatAnalysisFlow',
      trialModuleList: 'TrialModuleList',
      trialVersion: 'TrialVersion',
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
      buySasEdr: 'string',
      canTryPostPaidPackage: 'number',
      cspmCapacity: 'number',
      cspmInstanceCapacity: 'number',
      highestVersion: 'number',
      honeypotCapacity: 'number',
      hybridPaidGrayStatus: 'string',
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
      sasEdrClientAuthCount: 'string',
      sasEdrPostPaidInstanceId: 'string',
      sasEdrPrePaidInstanceId: 'string',
      sasEdrPrePaidInstanceStatus: 'string',
      sasEdrVersion: 'string',
      sasLog: 'number',
      sasScreen: 'number',
      sdkAiPostPaidGray: 'number',
      sdkCapacity: 'number',
      slsCapacity: 'number',
      threatAnalysisCapacity: 'number',
      threatAnalysisFlow: 'number',
      trialModuleList: { 'type': 'array', 'itemType': DescribeVersionConfigResponseBodyTrialModuleList },
      trialVersion: 'number',
      userDefinedAlarms: 'number',
      version: 'number',
      vmCores: 'number',
      vulFixCapacity: 'number',
      webLock: 'number',
      webLockAuthCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.trialModuleList)) {
      $dara.Model.validateArray(this.trialModuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

