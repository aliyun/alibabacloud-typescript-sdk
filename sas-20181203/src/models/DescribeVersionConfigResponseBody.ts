// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVersionConfigResponseBodyTrialModuleList extends $dara.Model {
  /**
   * @remarks
   * The name of the child trial module.
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
   * The agentless detection quota.
   * > Agentless detection is not yet available for sale. You can ignore this field.
   * 
   * @example
   * 10
   */
  agentlessCapacity?: number;
  /**
   * @remarks
   * Indicates whether pay-as-you-go purchase is allowed. Valid values:
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
   * 2
   */
  appWhiteList?: number;
  /**
   * @remarks
   * The number of application whitelist authorizations.
   * > One authorization allows you to apply a whitelist policy to one server. After you enable the application whitelist feature, your account is granted 20 authorizations by default.
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
   * Indicates whether Endpoint Detection and Response (EDR) is purchased.
   * 
   * @example
   * true
   */
  buySasEdr?: string;
  /**
   * @remarks
   * Indicates whether the pay-as-you-go trial plan is supported. Valid values:
   * - **0**: Not supported.
   * - **1**: Supported.
   * 
   * @example
   * 1
   */
  canTryPostPaidPackage?: number;
  /**
   * @remarks
   * The number of purchased cloud platform configuration check scans. Unit: scans per month.
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
   * - **1**: Free Edition
   * - **3**: Enterprise Edition
   * - **5**: Advanced Edition
   * - **6**: Anti-virus Edition
   * - **7**: Ultimate Edition
   * - **10**: Value-added services only
   * > If a single edition is purchased, this value indicates the corresponding edition. If multiple editions are purchased, this value indicates the highest edition among the purchased editions of Security Center.
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
   * - **1**: Multi-account allocation.
   * 
   * @example
   * 0
   */
  instanceBuyType?: number;
  /**
   * @remarks
   * The instance ID of the purchased Security Center.
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
   * Indicates whether the instance is the latest Ultimate Edition. Valid values:
   * - **true**: The instance is the latest version.
   * - **false**: The instance is not the latest version.
   * 
   * @example
   * true
   */
  isNewContainerVersion?: boolean;
  /**
   * @remarks
   * Indicates whether the instance is the latest multi-edition. Valid values:
   * - **true**: The instance is the latest multi-edition.
   * - **false**: The instance is not the latest multi-edition.
   * 
   * @example
   * true
   */
  isNewMultiVersion?: boolean;
  /**
   * @remarks
   * Indicates whether the number of existing servers exceeds the maximum number of purchased authorizations. Valid values:
   * - **false**: Not exceeded.
   * - **true**: Exceeded.
   * >Notice: **[Deprecated]** This parameter is deprecated. You can ignore it.</notice>
   * 
   * @example
   * false
   */
  isOverBalance?: boolean;
  /**
   * @remarks
   * Indicates whether the pay-as-you-go billing method is enabled. Valid values:
   * - **false**: Not enabled.
   * - **true**: Enabled.
   * 
   * @example
   * true
   */
  isPostpay?: boolean;
  /**
   * @remarks
   * Indicates whether the current Security Center edition is a trial edition. Valid values:
   * - **0**: No, it is not a trial edition.
   * - **1**: Yes, it is a trial edition.
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
   * The total number of authorizations for the multi-edition purchase.
   * 
   * @example
   * 5000
   */
  MVAuthCount?: number;
  /**
   * @remarks
   * The total number of remaining authorizations for the multi-edition purchase.
   * 
   * @example
   * 40
   */
  MVUnusedAuthCount?: number;
  /**
   * @remarks
   * The higher protection edition between the subscription and pay-as-you-go services when both are enabled for Security Center host and container security. Valid values:
   * - **1**: Free Edition
   * - **6**: Anti-virus Edition
   * - **5**: Advanced Edition
   * - **3**: Enterprise Edition
   * - **7**: Ultimate Edition
   * 
   * @example
   * 7
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
   * The AI digital human analysis traffic.
   * 
   * @example
   * 100
   */
  newPostPaidCspm?: number;
  /**
   * @remarks
   * Indicates whether the new version of Cloud Threat Detection and Response (CTDR) is enabled. The new version of CTDR supports the purchase of inbound traffic and log storage capacity. Valid values:
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
   * The timestamp when the service is enabled. Unit: milliseconds.
   * 
   * @example
   * 1657244824669
   */
  openTime?: number;
  /**
   * @remarks
   * The first trial time for the pay-as-you-go billing method.
   * 
   * @example
   * 1657244824669
   */
  postPaidFirstTrialTime?: number;
  /**
   * @remarks
   * The latest trial time for the pay-as-you-go billing method.
   * 
   * @example
   * 1657244824669
   */
  postPaidLastTrialTime?: number;
  /**
   * @remarks
   * The trial expiration time for the pay-as-you-go billing method.
   * 
   * @example
   * 1657244824669
   */
  postPaidTrialExpiredTime?: number;
  /**
   * @remarks
   * The highest protection edition for bound assets when the pay-as-you-go service for host and container security is enabled. Valid values:
   * - **1**: Free Edition
   * - **3**: Enterprise Edition
   * - **5**: Advanced Edition
   * - **6**: Anti-virus Edition
   * - **7**: Ultimate Edition
   * 
   * @example
   * 7
   */
  postPayHostVersion?: number;
  /**
   * @remarks
   * The pay-as-you-go instance ID.
   * 
   * @example
   * postpay-sas-**
   */
  postPayInstanceId?: string;
  /**
   * @remarks
   * The switch status of pay-as-you-go modules. The value is a JSON string. Valid values:
   * - Key:
   *   - **VUL**: Vulnerability fixing module
   *   - **CSPM**: Cloud Security Posture Management (CSPM) module
   *   - **AGENTLESS**: Agentless detection module
   *   - **SERVERLESS**: Serverless security module
   *   - **CTDR**: Cloud Threat Detection and Response (CTDR) module
   *   - **POST_HOST**: Host and container security module
   *   - **SDK**: Malicious file detection SDK module
   *   - **RASP**: Application protection module
   * - Value: 0 indicates disabled, and 1 indicates enabled.
   * 
   * @example
   * {"VUL":1}
   */
  postPayModuleSwitch?: string;
  /**
   * @remarks
   * The time when the pay-as-you-go billing method is enabled. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1698915219000
   */
  postPayOpenTime?: number;
  /**
   * @remarks
   * The pay-as-you-go instance status. Valid values:
   * - **1**: Normal.
   * - **2**: Stopped due to overdue payment.
   * 
   * @example
   * 1
   */
  postPayStatus?: number;
  /**
   * @remarks
   * The number of purchased application protection authorizations. Unit: authorizations per month.
   * 
   * @example
   * 10
   */
  raspCapacity?: number;
  /**
   * @remarks
   * The expiration UNIX timestamp of the Security Center instance. Unit: milliseconds.
   * > If you do not complete the renewal within 7 days after the instance expires, your paid instance is downgraded to the Free Edition. You cannot continue to use the features of the paid edition, and you cannot view your previous Security Center configuration data and historical alerting data, such as DDoS alerting. In this case, you must repurchase the paid edition of Security Center to enable the service. For more information, see [Purchase Security Center](https://help.aliyun.com/document_detail/42308.html).
   * 
   * @example
   * 1625846400000
   */
  releaseTime?: number;
  /**
   * @remarks
   * The unique identifier generated by Alibaba Cloud for the request.
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
   * The pay-as-you-go EDR instance ID.
   * 
   * @example
   * sas-edr-postpaid-fadaf
   */
  sasEdrPostPaidInstanceId?: string;
  /**
   * @remarks
   * The subscription EDR instance.
   * 
   * @example
   * sas-edr-sfkhakhk
   */
  sasEdrPrePaidInstanceId?: string;
  /**
   * @remarks
   * The upfront EDR instance status.
   * 
   * @example
   * RELEASED
   */
  sasEdrPrePaidInstanceStatus?: string;
  /**
   * @remarks
   * The purchased EDR edition.
   * 
   * @example
   * 1
   */
  sasEdrVersion?: string;
  /**
   * @remarks
   * Indicates whether the log analysis feature is purchased. Valid values:
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
   * The canary release status for the pay-as-you-go SDK.
   * 
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
   * The purchased log inbound traffic for Cloud Threat Detection and Response (CTDR). Unit: GB per day.
   * 
   * @example
   * 10
   */
  threatAnalysisFlow?: number;
  /**
   * @remarks
   * The list of child trial modules.
   */
  trialModuleList?: DescribeVersionConfigResponseBodyTrialModuleList[];
  /**
   * @remarks
   * The trial edition.
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
   * The purchased Security Center edition. Valid values:  
   * - **1**: Free Edition 
   * - **3**: Enterprise Edition
   * - **5**: Advanced Edition
   * - **6**: Anti-virus Edition    
   * - **7**: Ultimate Edition   
   * - **8**: Multi-edition   
   * - **10**: Value-added services only
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
   * The number of purchased vulnerability fixing quotas. Unit: fixes per month.
   * 
   * @example
   * 10
   */
  vulFixCapacity?: number;
  /**
   * @remarks
   * Indicates whether the web tamper-proofing service is enabled. Valid values:
   * - **0**: Not enabled.
   * - **1**: Enabled.
   * 
   * @example
   * 0
   */
  webLock?: number;
  /**
   * @remarks
   * The number of purchased web tamper-proofing authorizations. One authorization enables web tamper-proofing for one server. Valid values: 0 to N.
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
      postPaidFirstTrialTime: 'PostPaidFirstTrialTime',
      postPaidLastTrialTime: 'PostPaidLastTrialTime',
      postPaidTrialExpiredTime: 'PostPaidTrialExpiredTime',
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
      postPaidFirstTrialTime: 'number',
      postPaidLastTrialTime: 'number',
      postPaidTrialExpiredTime: 'number',
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

