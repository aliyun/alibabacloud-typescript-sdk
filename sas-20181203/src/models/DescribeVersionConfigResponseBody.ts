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
   * The number of agentless detections.
   * > Agentless detection is not currently available for purchase. You do not need to pay attention to this field.
   * 
   * @example
   * 10
   */
  agentlessCapacity?: number;
  /**
   * @remarks
   * Indicates whether pay-as-you-go purchasing is allowed. Valid values:
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
   * The anti-ransomware backup capacity. Unit: GB.
   * 
   * @example
   * 160
   */
  antiRansomwareCapacity?: number;
  /**
   * @remarks
   * The anti-ransomware managed service. Valid values:
   * - **0**: Not enabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  antiRansomwareService?: number;
  /**
   * @remarks
   * Indicates whether the application whitelist is enabled. Valid values:
   * - **0**: Not enabled.
   * - **2**: Enabled.
   * 
   * @example
   * 2
   */
  appWhiteList?: number;
  /**
   * @remarks
   * The number of application whitelist authorizations.
   * > One authorization can apply an application whitelist policy to one server. After the application whitelist feature is enabled, the account has 20 authorizations by default.
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
   * Indicates whether EDR is purchased.
   * 
   * @example
   * true
   */
  buySasEdr?: string;
  /**
   * @remarks
   * Indicates whether the post-paid trial package can be activated. Valid values:
   * - **0**: Not supported.
   * - **1**: Supported.
   * 
   * @example
   * 1
   */
  canTryPostPaidPackage?: number;
  /**
   * @remarks
   * The number of purchased cloud platform configuration check scans. Unit: times/month.
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
   * The highest purchased Security Center version. Valid values:
   * - **1**: Free edition.
   * - **3**: Enterprise edition.
   * - **5**: Advanced edition.
   * - **6**: Anti-virus edition.
   * - **7**: Ultimate edition.
   * - **10**: Value-added services only.
   * > If a single version is purchased, this value indicates the corresponding version. If multiple versions are purchased, this value indicates the highest version among the purchased Security Center versions.
   * 
   * @example
   * 1
   */
  highestVersion?: number;
  /**
   * @remarks
   * The number of purchased honeypot authorizations.
   * 
   * @example
   * 20
   */
  honeypotCapacity?: number;
  /**
   * @remarks
   * The grayscale module for elastic billing.
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
   * The elastic billing switch status.
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
   * The number of purchased image scan authorizations.
   * 
   * @example
   * 8954
   */
  imageScanCapacity?: number;
  /**
   * @remarks
   * The instance purchase type. Valid values:
   * - **0**: Self-purchased.
   * - **1**: Allocated by multi-account management.
   * 
   * @example
   * 0
   */
  instanceBuyType?: number;
  /**
   * @remarks
   * The ID of the purchased Security Center instance.
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
   * Indicates whether this is the new Ultimate edition. Valid values:
   * 
   * - **true**: The latest version.
   * 
   * - **false**: Not the latest version.
   * 
   * @example
   * true
   */
  isNewContainerVersion?: boolean;
  /**
   * @remarks
   * Indicates whether this is the new multi-version edition. Valid values:
   * 
   * - **true**: The latest multi-version edition.
   * 
   * - **false**: Not the latest multi-version edition.
   * 
   * @example
   * true
   */
  isNewMultiVersion?: boolean;
  /**
   * @remarks
   * Indicates whether the current number of servers exceeds the maximum number of purchased authorizations. Valid values:
   * - **false**: Not exceeded.
   * - **true**: Exceeded.
   * 
   * >Notice: This parameter is deprecated. You do not need to pay attention to it.
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
   * Indicates whether the current Security Center version is a trial version. Valid values:
   * - **0**: Not a trial version.
   * - **1**: Trial version.
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
   * The higher protection version between the subscription and pay-as-you-go Security Center host and container security services when both are enabled. Valid values:
   * - **1**: Free edition.
   * - **6**: Anti-virus edition.
   * - **5**: Advanced edition.
   * - **3**: Enterprise edition.
   * - **7**: Ultimate edition.
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
   * Indicates whether the new threat analysis and response service is enabled. The new threat analysis and response service supports purchasing ingestion traffic and log storage capacity. Valid values:
   * - **0**: No.
   * - **1**: Yes.
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
   * The highest protection version bound to assets when the host and container security pay-as-you-go service is enabled. Valid values:
   * - **1**: Free edition.
   * - **3**: Enterprise edition.
   * - **5**: Advanced edition.
   * - **6**: Anti-virus edition.
   * - **7**: Ultimate edition.
   * 
   * @example
   * 7
   */
  postPayHostVersion?: number;
  /**
   * @remarks
   * The ID of the pay-as-you-go instance.
   * 
   * @example
   * postpay-sas-**
   */
  postPayInstanceId?: string;
  /**
   * @remarks
   * The switch status of pay-as-you-go modules in JSON string format. Valid values:
   * - Key:
   *   - **VUL**: Vulnerability fix module.
   *   - **CSPM**: Cloud security posture management module.
   *   - **AGENTLESS**: Agentless detection module.
   *   - **SERVERLESS**: Serverless security module.
   *   - **CTDR**: Threat analysis and response module.
   *   - **POST_HOST**: Host and container security module.
   *   - **SDK**: Malicious file detection SDK module.
   *   - **RASP**: Application protection module.
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
   * The status of the pay-as-you-go instance. Valid values:
   * - **1**: Normal.
   * - **2**: Suspended due to overdue payment.
   * 
   * @example
   * 1
   */
  postPayStatus?: number;
  /**
   * @remarks
   * The number of purchased application protection instances. Unit: instances/month.
   * 
   * @example
   * 10
   */
  raspCapacity?: number;
  /**
   * @remarks
   * The expiration timestamp of the Security Center instance. Unit: milliseconds.
   * > If you do not renew the service within 7 days after it expires, your paid instance is downgraded to the free edition. You can no longer use the features of the paid edition, and your Security Center configuration data and historical alert data (such as DDoS alerts) become inaccessible. In this case, you must repurchase to enable the paid Security Center service. For more information, see [Purchase Security Center](https://help.aliyun.com/document_detail/42308.html).
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
   * The number of machines purchased for EDR.
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
   * The EDR subscription instance status.
   * 
   * @example
   * RELEASED
   */
  sasEdrPrePaidInstanceStatus?: string;
  /**
   * @remarks
   * The purchased EDR version.
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
   * @example
   * 1
   */
  sdkAiPostPaidGray?: number;
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
   * The purchased threat analysis and response log ingestion traffic. Unit: GB/day.
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
   * - **0**: Not enabled.
   * - **2**: Enabled.
   * 
   * @example
   * 0
   */
  userDefinedAlarms?: number;
  /**
   * @remarks
   * The purchased Security Center version. Valid values:  
   * - **1**: Free edition. 
   * - **3**: Enterprise edition.
   * - **5**: Advanced edition.
   * - **6**: Anti-virus edition.    
   * - **7**: Ultimate edition.   
   * - **8**: Multi-version edition.   
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
   * The number of purchased vulnerability fixes. Unit: times/month.
   * 
   * @example
   * 10
   */
  vulFixCapacity?: number;
  /**
   * @remarks
   * Indicates whether the tamper-proofing service is enabled. Valid values:
   * - **0**: Not enabled.
   * - **1**: Enabled.
   * 
   * @example
   * 0
   */
  webLock?: number;
  /**
   * @remarks
   * The number of purchased tamper-proofing authorizations. One authorization can enable tamper-proofing protection for one server. Valid values: 0 to N.
   * > N is the number of servers you own.
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

