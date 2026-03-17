// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVersionConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Number of agentless detections. 
   * >Agentless detection is not yet available for sale, so there\\"s no need to pay attention to this field at the moment.
   * 
   * @example
   * 10
   */
  agentlessCapacity?: number;
  /**
   * @remarks
   * Whether to allow pay-as-you-go purchases.
   * - **0**: Not allowed 
   * - **1**: Allowed
   * 
   * @example
   * 1
   */
  allowPartialBuy?: number;
  /**
   * @remarks
   * Ransomware protection backup capacity, in GB.
   * 
   * @example
   * 160
   */
  antiRansomwareCapacity?: number;
  /**
   * @remarks
   * Ransomware Guardian Service. Values:
   *  - **0**: Not activated
   *  - **1**: Activated
   * 
   * @example
   * 1
   */
  antiRansomwareService?: number;
  /**
   * @remarks
   * Whether to enable the application whitelist. Values: 
   * - **0**: Not enabled 
   * - **2**: Enabled
   * 
   * @example
   * 2
   */
  appWhiteList?: number;
  /**
   * @remarks
   * Number of application whitelist authorizations. 
   * > One authorization allows the application of a whitelist policy to one server. After enabling the application whitelist function, the account will have 20 authorizations by default.
   * 
   * @example
   * 20
   */
  appWhiteListAuthCount?: number;
  /**
   * @remarks
   * Number of purchased server licenses.
   * 
   * @example
   * 30
   */
  assetLevel?: number;
  /**
   * @remarks
   * Whether it supports the activation of a post-paid trial package. Values: 
   * - **0**: Not supported
   *  - **1**: Supported
   * 
   * @example
   * 1
   */
  canTryPostPaidPackage?: number;
  /**
   * @remarks
   * Purchased cloud platform configuration check scan count. Unit: times/month.
   * 
   * @example
   * 10
   */
  cspmCapacity?: number;
  /**
   * @remarks
   * Purchase the highest version of the Security Center. Values:
   *  - **1**: Free Edition 
   * - **3**: Enterprise Edition 
   * - **5**: Advanced Edition 
   * - **6**: Anti-Virus Edition
   *  - **7**: Flagship Edition 
   * - **10**: Purchase Additional Services Only 
   * > When purchasing a single version, it indicates the corresponding version. When purchasing multiple versions, this value represents the highest version among the purchased multi-versions of Cloud Security Center.
   * 
   * @example
   * 1
   */
  highestVersion?: number;
  /**
   * @remarks
   * Number of purchased honeypot licenses.
   * 
   * @example
   * 20
   */
  honeypotCapacity?: number;
  /**
   * @remarks
   * Number of purchased image scanning authorizations.
   * 
   * @example
   * 8954
   */
  imageScanCapacity?: number;
  /**
   * @remarks
   * Instance purchase type. Values: 
   * - **0**: Self-purchased
   *  - **1**: Allocated from multiple accounts
   * 
   * @example
   * 0
   */
  instanceBuyType?: number;
  /**
   * @remarks
   * ID of the purchased Cloud Security Center instance.
   * 
   * @example
   * sas-vg6hafdsafs****
   */
  instanceId?: string;
  /**
   * @remarks
   * AI digital human analyzes traffic
   * 
   * @example
   * 100
   */
  intelligentAnalysisFlow?: number;
  /**
   * @remarks
   * Whether it is the new flagship version.
   * - **true**: It is the latest version
   * - **false**: It is not the latest version
   * 
   * @example
   * true
   */
  isNewContainerVersion?: boolean;
  /**
   * @remarks
   * Whether it is the latest multi-version.
   * - **true**: It is the latest multi-version 
   * - **false**: It is not the latest multi-version
   * 
   * @example
   * true
   */
  isNewMultiVersion?: boolean;
  /**
   * @remarks
   * Whether the number of existing servers exceeds the maximum authorized purchase quantity. Values: 
   * - **false**: Not exceeded 
   * - **true**: Exceeded
   * >Notice: This parameter is deprecated, and you do not need to pay attention to it.
   * 
   * @example
   * false
   */
  isOverBalance?: boolean;
  /**
   * @remarks
   * Whether to enable pay-as-you-go. Values: 
   * - **false**: Not enabled 
   * - **true**: Enabled
   * 
   * @example
   * true
   */
  isPostpay?: boolean;
  /**
   * @remarks
   * Indicates whether the current Cloud Security Center version is a trial version. Values: 
   * - **0**: Not a trial version 
   * - **1**: Trial version
   * 
   * @example
   * 0
   */
  isTrialVersion?: number;
  /**
   * @remarks
   * The timestamp of the last trial expiration for Cloud Security Center, in milliseconds.
   * 
   * @example
   * 1603934844000
   */
  lastTrailEndTime?: number;
  /**
   * @remarks
   * Total number of licenses when purchasing multiple versions.
   * 
   * @example
   * 5000
   */
  MVAuthCount?: number;
  /**
   * @remarks
   * Total remaining licenses when purchasing multiple versions.
   * 
   * @example
   * 40
   */
  MVUnusedAuthCount?: number;
  /**
   * @remarks
   * When both the annual/monthly and pay-as-you-go services for Cloud Security Center\\"s host and container security are activated, the higher protection version of the two is selected. Values: 
   * - **1**: Free Edition
   *  - **6**: Anti-Virus Edition 
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
   * Usage of multiple version numbers and license counts
   * 
   * @example
   * null
   */
  multiVersion?: string;
  /**
   * @remarks
   * Whether to enable the new version of Threat Analysis and Response service. The new version of Threat Analysis and Response service refers to the one that supports purchasing access traffic and log storage capacity. Values: 
   * - **0**: No 
   * - **1**: Yes
   * 
   * @example
   * 1
   */
  newThreatAnalysis?: number;
  /**
   * @remarks
   * AI Digital Human Management Instance
   * 
   * @example
   * 10
   */
  onboardedAssets?: number;
  /**
   * @remarks
   * Service activation timestamp, unit: milliseconds.
   * 
   * @example
   * 1657244824669
   */
  openTime?: number;
  /**
   * @remarks
   * When activating the pay-as-you-go service for host and container security, it represents the highest protection version of the already bound assets. Values: 
   * - **1**: Free Edition
   *  - **3**: Enterprise Edition
   *  - **5**: Advanced Edition
   *  - **6**: Anti-Virus Edition 
   * - **7**: Flagship Edition
   * 
   * @example
   * 7
   */
  postPayHostVersion?: number;
  /**
   * @remarks
   * Pay-As-You-Go instance ID.
   * 
   * @example
   * postpay-sas-**
   */
  postPayInstanceId?: string;
  /**
   * @remarks
   * Pay-as-you-go module switch status, in the format of JsonString, with values as follows:
   *  - Key:
   *    * **VUL**: Vulnerability Repair Module 
   *    * **CSPM**: Cloud Security Posture Management Module 
   *    * **AGENTLESS**: Agentless Detection Module 
   *    * **SERVERLESS**: Serverless Security Module 
   *    * **CTDR**: Threat Analysis and Response Module 
   *    * **POST_HOST**: Host and Container Security Module 
   *    *  **SDK**: Malicious File Detection SDK Module 
   *    * **RASP**: Application Protection Module 
   *  - Value: 0 indicates off, 1 indicates on
   * 
   * @example
   * {"VUL":1}
   */
  postPayModuleSwitch?: string;
  /**
   * @remarks
   * Pay-as-you-go activation time
   * 
   * @example
   * 1698915219000
   */
  postPayOpenTime?: number;
  /**
   * @remarks
   * Pay-As-You-Go instance status. Values: 
   * - **1**: Normal 
   * - **2**: Stopped due to unpaid bills
   * 
   * @example
   * 1
   */
  postPayStatus?: number;
  /**
   * @remarks
   * Number of purchased application protections. Unit: per month.
   * 
   * @example
   * 10
   */
  raspCapacity?: number;
  /**
   * @remarks
   * The timestamp of when the Cloud Security Center instance will expire, in milliseconds.
   * > If you do not renew the service within 7 days after it expires, your paid instance will be downgraded to a free version, and you will no longer be able to use the features of the paid version. Your previous Cloud Security Center configuration data and historical alert data (e.g., DDoS alerts) will become inaccessible. At this point, you can only re-enable the paid version of Cloud Security Center by repurchasing it. For more information, see [Purchasing Cloud Security Center](https://help.aliyun.com/document_detail/42308.html).
   * 
   * @example
   * 1625846400000
   */
  releaseTime?: number;
  /**
   * @remarks
   * The unique identifier generated by Alibaba Cloud for this request.
   * 
   * @example
   * C2DC96D2-DD2E-49D9-A28E-85590475DF55
   */
  requestId?: string;
  /**
   * @remarks
   * Whether log analysis has been purchased. Values: 
   * - **0**: Not purchased 
   * - **1**: Purchased
   * 
   * @example
   * 1
   */
  sasLog?: number;
  /**
   * @remarks
   * Whether the security dashboard has been purchased. Values: 
   * - **0**: Not purchased 
   * - **1**: Purchased
   * 
   * @example
   * 0
   */
  sasScreen?: number;
  /**
   * @remarks
   * Number of SDK authorizations for malicious file detection
   * 
   * @example
   * 10
   */
  sdkCapacity?: number;
  /**
   * @remarks
   * Purchased log storage capacity in GB. Range: 0 to 200000.
   * 
   * @example
   * 10240
   */
  slsCapacity?: number;
  /**
   * @remarks
   * Purchased threat analysis capacity. Unit: GB.
   * 
   * @example
   * 25
   */
  threatAnalysisCapacity?: number;
  /**
   * @remarks
   * Purchased threat analysis and response log access traffic. Unit is GB/day.
   * 
   * @example
   * 10
   */
  threatAnalysisFlow?: number;
  /**
   * @remarks
   * Whether to enable the custom alarm function. Values:
   *  - **0**: Not enabled 
   * - **2**: Enabled
   * 
   * @example
   * 0
   */
  userDefinedAlarms?: number;
  /**
   * @remarks
   * Purchased Cloud Security Center version. Values:   
   * - **1**: Free Edition 
   *  - **3**: Enterprise Edition 
   * - **5**: Advanced Edition 
   * - **6**: Anti-Virus Edition     
   * - **7**: Flagship Edition   
   *  - **8**: Multi-Edition  
   *   - **10**: Value-Added Services Only
   * 
   * @example
   * 3
   */
  version?: number;
  /**
   * @remarks
   * Number of authorized cores purchased.
   * 
   * @example
   * 10
   */
  vmCores?: number;
  /**
   * @remarks
   * Number of purchased vulnerability fixes. Unit: times/month.
   * 
   * @example
   * 10
   */
  vulFixCapacity?: number;
  /**
   * @remarks
   * Indicates whether the web tamper-proof service is enabled. Values: 
   * - **0**: Not enabled 
   * - **1**: Enabled
   * 
   * @example
   * 0
   */
  webLock?: number;
  /**
   * @remarks
   * The number of purchased web tamper-proof licenses. One license can enable web tamper protection for one server. Value range: 0~N.
   *  >N is the number of servers you have.
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

