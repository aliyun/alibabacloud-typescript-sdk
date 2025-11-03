// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVersionConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The quota for agentless detection.
   * 
   * >  The agentless detection feature is unavailable for purchase. You can ignore this parameter.
   * 
   * @example
   * 10
   */
  agentlessCapacity?: number;
  /**
   * @remarks
   * Indicates whether the pay-as-you-go billing method is supported.
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  allowPartialBuy?: number;
  /**
   * @remarks
   * 防勒索备份容量，单位GB。
   * 
   * @example
   * 160
   */
  antiRansomwareCapacity?: number;
  /**
   * @remarks
   * Switch of anti-ransomware hosting service. Valid values:
   * 
   * *   **0**: off
   * *   **1**: on
   * 
   * @example
   * 1
   */
  antiRansomwareService?: number;
  /**
   * @remarks
   * Indicates whether the application whitelist feature is enabled. Valid values:
   * 
   * *   **0**: no
   * *   **2**: yes
   * 
   * @example
   * 2
   */
  appWhiteList?: number;
  /**
   * @remarks
   * The quota for the application whitelist feature.
   * 
   * >  The quantity of servers that are allowed by the quota is deducted by one each time you apply an application whitelist to a server. After you enable the application whitelist feature, the quota is 20 by default.
   * 
   * @example
   * 20
   */
  appWhiteListAuthCount?: number;
  /**
   * @remarks
   * The quota for servers that can be protected.
   * 
   * @example
   * 30
   */
  assetLevel?: number;
  /**
   * @remarks
   * The purchased quota for configuration assessment. Unit: times/month.
   * 
   * @example
   * 10
   */
  cspmCapacity?: number;
  /**
   * @remarks
   * The most advanced edition that is used. Valid values:
   * 
   * *   **1**: Basic edition
   * *   **3**: Enterprise edition
   * *   **5**: Advanced edition
   * *   **6**: Anti-virus edition
   * *   **7**: Ultimate edition
   * *   **10**: Value-added Plan edition
   * 
   * >  If you purchase the Multi-version edition of Security Center, the value indicates the most advanced edition that is used in the Multi-version edition. If you do not purchase the Multi-version edition of Security Center, the value indicates the edition of Security Center.
   * 
   * @example
   * 1
   */
  highestVersion?: number;
  /**
   * @remarks
   * The purchased quota for the cloud honeypot feature.
   * 
   * @example
   * 20
   */
  honeypotCapacity?: number;
  /**
   * @remarks
   * The purchased quota for the container image scan feature.
   * 
   * @example
   * 8954
   */
  imageScanCapacity?: number;
  /**
   * @remarks
   * Instance purchase type. Values: - **0**: Self-purchased - **1**: Multi-account allocation
   * 
   * @example
   * 0
   */
  instanceBuyType?: number;
  /**
   * @remarks
   * The ID of purchased Security Center.
   * 
   * @example
   * sas-vg6hafdsafs****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether Security Center runs the latest version of the Ultimate edition.
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  isNewContainerVersion?: boolean;
  /**
   * @remarks
   * Indicates whether Security Center runs the latest version of the Multi-version edition. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isNewMultiVersion?: boolean;
  /**
   * @remarks
   * Indicates whether the number of existing servers exceeds the purchased quota. Valid values:
   * 
   * *   **false**: no
   * *   **true**: yes
   * >Notice: This parameter is deprecated. You can ignore it.
   * 
   * @example
   * false
   */
  isOverBalance?: boolean;
  /**
   * @remarks
   * Indicates whether the pay-as-you-go billing method is used. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * true
   */
  isPostpay?: boolean;
  /**
   * @remarks
   * Indicates whether Security Center runs the free trial edition. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 0
   */
  isTrialVersion?: number;
  /**
   * @remarks
   * The timestamp when the last trial of Security Center ends. Unit: milliseconds.
   * 
   * @example
   * 1603934844000
   */
  lastTrailEndTime?: number;
  /**
   * @remarks
   * The total quota in the Multi-version edition of purchased Security Center.
   * 
   * @example
   * 5000
   */
  MVAuthCount?: number;
  /**
   * @remarks
   * The total remaining quota in the Multi-version edition of purchased Security Center.
   * 
   * @example
   * 40
   */
  MVUnusedAuthCount?: number;
  /**
   * @remarks
   * When both the annual/monthly and pay-as-you-go services of Cloud Security Center\\"s host and container security are activated, the higher protection version among the two is selected. Values: - **1**: Free Edition - **6**: Anti-Virus Edition - **5**: Advanced Edition - **3**: Enterprise Edition - **7**: Ultimate Edition
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
   * Indicates whether the new version of the threat analysis and response feature is enabled. With the new version, you can purchase the amount of log data that you want to add to the feature and log storage capacity. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  newThreatAnalysis?: number;
  /**
   * @remarks
   * The timestamp when Security Center is purchased. Unit: milliseconds.
   * 
   * @example
   * 1657244824669
   */
  openTime?: number;
  /**
   * @remarks
   * When activating the pay-as-you-go service for host and container security, this represents the highest protection version for the already bound assets. The values are as follows: - **1**: Free Edition - **3**: Enterprise Edition - **5**: Advanced Edition - **6**: Anti-Virus Edition - **7**: Flagship Edition
   * 
   * @example
   * 7
   */
  postPayHostVersion?: number;
  /**
   * @remarks
   * The instance ID of Security Center that uses the pay-as-you-go billing method.
   * 
   * @example
   * postpay-sas-**
   */
  postPayInstanceId?: string;
  /**
   * @remarks
   * The configuration of the pay-as-you-go module. Valid values:
   * 
   * *   **VUL**: vulnerability fixing module
   * 
   * @example
   * {"VUL":1}
   */
  postPayModuleSwitch?: string;
  /**
   * @remarks
   * The creation time of Security Center that uses the pay-as-you-go billing method.
   * 
   * @example
   * 1698915219000
   */
  postPayOpenTime?: number;
  /**
   * @remarks
   * The status of Security Center that uses the pay-as-you-go billing method. Valid values:
   * 
   * *   **1**: The instance runs as expected.
   * *   **2**: The instance is stopped due to overdue payments.
   * 
   * @example
   * 1
   */
  postPayStatus?: number;
  /**
   * @remarks
   * The purchased quota for application protection. Unit: process/month.
   * 
   * @example
   * 10
   */
  raspCapacity?: number;
  /**
   * @remarks
   * The timestamp when the Security Center subscription ends. Unit: milliseconds.
   * 
   * >  If you do not renew the subscription within seven days after the expiration date, Security Center of a paid edition is automatically downgraded to Security Center Basic. In this case, you can no longer use the features of the paid edition or view the existing configurations or statistics such as DDoS alerts in Security Center. You must purchase Security Center of a paid edition to use relevant features. For more information, see [Purchase Security Center](https://help.aliyun.com/document_detail/42308.html).
   * 
   * @example
   * 1625846400000
   */
  releaseTime?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C2DC96D2-DD2E-49D9-A28E-85590475DF55
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether log analysis is purchased. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  sasLog?: number;
  /**
   * @remarks
   * Indicates whether the security screen feature is purchased. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 0
   */
  sasScreen?: number;
  /**
   * @remarks
   * The purchased quota for malicious file detection SDK. Unit: process/month.
   * 
   * @example
   * 100
   */
  sdkCapacity?: number;
  /**
   * @remarks
   * The log storage capacity that you purchase. Unit: GB. Valid values: 0 to 200000.
   * 
   * @example
   * 10240
   */
  slsCapacity?: number;
  /**
   * @remarks
   * The purchased log storage capacity for threat analysis. Unit: GB.
   * 
   * @example
   * 25
   */
  threatAnalysisCapacity?: number;
  /**
   * @remarks
   * The amount of log data that you purchase for the threat analysis and response feature. Unit: GB-day.
   * 
   * @example
   * 10
   */
  threatAnalysisFlow?: number;
  /**
   * @remarks
   * Indicates whether the custom alert feature is enabled. Valid values:
   * 
   * *   **0**: no
   * *   **2**: yes
   * 
   * @example
   * 0
   */
  userDefinedAlarms?: number;
  /**
   * @remarks
   * The edition of purchased Security Center. Valid values:
   * 
   * *   **1**: Basic edition
   * *   **3**: Enterprise edition
   * *   **5**: Advanced edition
   * *   **6**: Anti-virus edition
   * *   **7**: Ultimate edition
   * *   **8**: Multi-version edition
   * *   **10**: Value-added Plan edition
   * 
   * @example
   * 3
   */
  version?: number;
  /**
   * @remarks
   * The quota for the cores of servers that can be protected.
   * 
   * @example
   * 10
   */
  vmCores?: number;
  /**
   * @remarks
   * The purchased quota for vulnerability fixing. Unit: times/month.
   * 
   * @example
   * 10
   */
  vulFixCapacity?: number;
  /**
   * @remarks
   * Indicates whether the web tamper proofing feature is enabled. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 0
   */
  webLock?: number;
  /**
   * @remarks
   * The quota for the web tamper proofing feature. The quantity of servers that are allowed by the quota is deducted by one each time a server is protected by the web tamper proofing feature. Valid values: 0 to N.
   * 
   * >  N indicates the number of servers that you own.
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
      cspmCapacity: 'CspmCapacity',
      highestVersion: 'HighestVersion',
      honeypotCapacity: 'HoneypotCapacity',
      imageScanCapacity: 'ImageScanCapacity',
      instanceBuyType: 'InstanceBuyType',
      instanceId: 'InstanceId',
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
      cspmCapacity: 'number',
      highestVersion: 'number',
      honeypotCapacity: 'number',
      imageScanCapacity: 'number',
      instanceBuyType: 'number',
      instanceId: 'string',
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

