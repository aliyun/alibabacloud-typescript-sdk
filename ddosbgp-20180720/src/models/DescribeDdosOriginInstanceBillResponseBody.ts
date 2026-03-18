// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDdosOriginInstanceBillResponseBodyFlowList extends $dara.Model {
  /**
   * @remarks
   * The traffic distribution by region. The JSON struct contains the following fields:
   * 
   * *   **bytes**: the traffic volume of EIPs with Anti-DDoS (Enhanced) enabled in a region. Unit: bytes.
   * *   **memberUid**: the owner account.
   * *   **instanceId**: the ID of the pay-as-you-go instance that protects the EIPs with Anti-DDoS (Enhanced) enabled.
   * *   **ip**: the EIPs with Anti-DDoS (Enhanced) enabled.
   * *   **region**: the region.
   * 
   * >  If the memberUid field in the JSON struct is empty, the information about the current account is returned. The value of the bytes parameter in the outermost level of the JSON struct indicates the total traffic, and the values of the bytes parameters in inner levels indicate the traffic of the account.
   * 
   * @example
   * [{\\"bytes\\":79282719,\\"memberUid\\":\\"\\",\\"regionFlows\\":{\\"cn-hangzhou\\":[{\\"bytes\\":79282719,\\"instanceId\\":\\"ddosorigin_cn-u7c3lcr9r02\\",\\"ip\\":\\"47.118.168.57\\",\\"region\\":\\"cn-hangzhou\\"}]}}]
   */
  memberFlow?: string;
  /**
   * @remarks
   * The traffic distribution by region. The JSON struct contains the following fields:
   * 
   * *   **bytes**: the traffic volume of EIPs with Anti-DDoS (Enhanced) enabled in a region. Unit: bytes.
   * *   **instanceId**: the ID of the pay-as-you-go instance that protects the EIPs with Anti-DDoS (Enhanced) enabled.
   * *   **ip**: the EIPs with Anti-DDoS (Enhanced) enabled.
   * *   **region**: the region.
   * 
   * @example
   * {\\"cn-hangzhou\\":[{\\"bytes\\":0,\\"instanceId\\":\\"ddosorigin_cn-u7c3lcr9r02\\",\\"ip\\":\\"47.118.168.124\\",\\"region\\":\\"cn-hangzhou\\"}]}
   */
  regionFlow?: string;
  /**
   * @remarks
   * The timestamp. Unit: milliseconds.
   * 
   * @example
   * 1620951900
   */
  time?: number;
  /**
   * @remarks
   * The total IP traffic of regular Alibaba Cloud services.
   * 
   * @example
   * 6302081067
   */
  totalBillFlow?: number;
  /**
   * @remarks
   * The traffic of EIPs with Anti-DDoS (Enhanced) enabled. Unit: bytes.
   * 
   * @example
   * 6302081067
   */
  totalFlow?: number;
  static names(): { [key: string]: string } {
    return {
      memberFlow: 'MemberFlow',
      regionFlow: 'RegionFlow',
      time: 'Time',
      totalBillFlow: 'TotalBillFlow',
      totalFlow: 'TotalFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberFlow: 'string',
      regionFlow: 'string',
      time: 'number',
      totalBillFlow: 'number',
      totalFlow: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosOriginInstanceBillResponseBodyIpCountOrFunctionList extends $dara.Model {
  /**
   * @remarks
   * The application scope of the instance. Valid values:
   * 
   * *   **only_mainland_china**: regions in the Chinese mainland.
   * *   **global**: all regions.
   * *   **international_and_hmt**: regions outside the Chinese mainland.
   * 
   * @example
   * global
   */
  coverage?: string;
  /**
   * @remarks
   * The number of IP addresses protected by the pay-as-you-go instance in the Chinese mainland.
   * 
   * @example
   * 5
   */
  ipCntCn?: number;
  /**
   * @remarks
   * The number of IP addresses protected by the pay-as-you-go instance outside the Chinese mainland.
   * 
   * @example
   * 5
   */
  ipCntOv?: number;
  /**
   * @remarks
   * The bill distribution by account. The JSON struct contains the following fields:
   * 
   * *   **eipCnIpCount**: the number of EIPs with Anti-DDoS (Enhanced) enabled in the Chinese mainland.
   * *   **eipOvIpCount**: the number of EIPs with Anti-DDoS (Enhanced) enabled outside the Chinese mainland.
   * *   **memberUid**: the owner account.
   * *   **standardAssetsCnIpCount**: the number of IP addresses of regular Alibaba Cloud services in the Chinese mainland.
   * *   **standardAssetsOvIpCount**: the number of IP addresses of regular Alibaba Cloud services outside the Chinese mainland.
   * 
   * >  If the memberUid field in the JSON struct is empty, the information about the current account is returned.
   * 
   * @example
   * [{\\"eipCnIpCount\\":3,\\"eipOvIpCount\\":18,\\"memberUid\\":\\"\\",\\"standardAssetsCnIpCount\\":2,\\"standardAssetsOvIpCount\\":0},{\\"eipCnIpCount\\":3,\\"eipOvIpCount\\":0,\\"memberUid\\":\\"1776997906319249\\",\\"standardAssetsCnIpCount\\":0,\\"standardAssetsOvIpCount\\":0}]
   */
  memberIpCnt?: string;
  /**
   * @remarks
   * The billing time. Unit: milliseconds.
   * 
   * @example
   * 1680278400000
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      coverage: 'Coverage',
      ipCntCn: 'IpCntCn',
      ipCntOv: 'IpCntOv',
      memberIpCnt: 'MemberIpCnt',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverage: 'string',
      ipCntCn: 'number',
      ipCntOv: 'number',
      memberIpCnt: 'string',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosOriginInstanceBillResponseBodyMonthlySummaryList extends $dara.Model {
  /**
   * @remarks
   * The number of days that the instance is activated.
   * 
   * @example
   * 30
   */
  enableDays?: number;
  /**
   * @remarks
   * The total traffic of EIPs with Anti-DDoS (Enhanced) enabled in the Chinese mainland. Unit: bytes.
   * 
   * @example
   * 123456
   */
  flowCn?: number;
  /**
   * @remarks
   * The total traffic of EIPs with Anti-DDoS (Enhanced) enabled outside the Chinese mainland. Unit: bytes.
   * 
   * @example
   * 123456
   */
  flowIntl?: number;
  /**
   * @remarks
   * The total number of protected IP addresses in the Chinese mainland.
   * 
   * >  The total number of protected IP addresses is the sum of the daily numbers of protected IP addresses in a month.
   * 
   * @example
   * 28
   */
  ipCountCn?: number;
  /**
   * @remarks
   * The total number of protected IP addresses outside the Chinese mainland.
   * 
   * >  The total number of protected IP addresses is the sum of the daily numbers of protected IP addresses in a month.
   * 
   * @example
   * 30
   */
  ipCountIntl?: number;
  /**
   * @remarks
   * The ID of the member.
   * 
   * @example
   * 112873971277****
   */
  memberUid?: string;
  /**
   * @remarks
   * The total traffic of regular Alibaba Cloud services in the Chinese mainland. Unit: bytes.
   * 
   * @example
   * 123456
   */
  standardAssetsFlowCn?: number;
  /**
   * @remarks
   * The total traffic of regular Alibaba Cloud services outside the Chinese mainland. Unit: bytes.
   * 
   * @example
   * 123456
   */
  standardAssetsFlowIntl?: number;
  /**
   * @remarks
   * The ID of the administrator account.
   * 
   * @example
   * 102518028277****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      enableDays: 'EnableDays',
      flowCn: 'FlowCn',
      flowIntl: 'FlowIntl',
      ipCountCn: 'IpCountCn',
      ipCountIntl: 'IpCountIntl',
      memberUid: 'MemberUid',
      standardAssetsFlowCn: 'StandardAssetsFlowCn',
      standardAssetsFlowIntl: 'StandardAssetsFlowIntl',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableDays: 'number',
      flowCn: 'number',
      flowIntl: 'number',
      ipCountCn: 'number',
      ipCountIntl: 'number',
      memberUid: 'string',
      standardAssetsFlowCn: 'number',
      standardAssetsFlowIntl: 'number',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosOriginInstanceBillResponseBodyStandardAssetsFlowList extends $dara.Model {
  /**
   * @remarks
   * The traffic distribution by region. The JSON struct contains the following fields:
   * 
   * *   **bytes**: the traffic volume of regular Alibaba Cloud services in a region. Unit: bytes.
   * *   **memberUid**: the owner account.
   * *   **instanceId**: the ID of the pay-as-you-go instance that protects the regular Alibaba Cloud services.
   * *   **ip**: the IP address of the regular Alibaba Cloud service protected by the Anti-DDoS Origin instance.
   * *   **region**: the region.
   * 
   * >  If the memberUid field in the JSON struct is empty, the information about the current account is returned. The value of the bytes parameter in the outermost level of the JSON struct indicates the total traffic, and the values of the bytes parameters in inner levels indicate the traffic of the account.
   * 
   * @example
   * [{\\"bytes\\":79282719,\\"memberUid\\":\\"\\",\\"regionFlows\\":{\\"cn-hangzhou\\":[{\\"bytes\\":79282719,\\"instanceId\\":\\"ddosorigin_cn-u7c3lcr9r02\\",\\"ip\\":\\"47.118.168.57\\",\\"region\\":\\"cn-hangzhou\\"}]}}]
   */
  memberFlow?: string;
  /**
   * @remarks
   * The traffic distribution by region. The JSON struct contains the following fields:
   * 
   * *   **bytes**: the traffic volume of regular Alibaba Cloud services in a region. Unit: bytes.
   * *   **instanceId**: the ID of the pay-as-you-go instance that protects the regular Alibaba Cloud services.
   * *   **ip**: the IP address protected by the Anti-DDoS Origin instance.
   * *   **region**: the region.
   * 
   * @example
   * {\\"cn-hangzhou\\":[{\\"bytes\\":0,\\"instanceId\\":\\"ddosorigin_cn-u7c3lcr9r02\\",\\"ip\\":\\"47.118.168.124\\",\\"region\\":\\"cn-hangzhou\\"}]}
   */
  regionFlow?: string;
  /**
   * @remarks
   * The timestamp. Unit: milliseconds.
   * 
   * @example
   * 1679846400000
   */
  time?: number;
  /**
   * @remarks
   * The traffic of regular Alibaba Cloud services. Unit: bytes.
   * 
   * @example
   * 6302081067
   */
  totalFlow?: number;
  static names(): { [key: string]: string } {
    return {
      memberFlow: 'MemberFlow',
      regionFlow: 'RegionFlow',
      time: 'Time',
      totalFlow: 'TotalFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberFlow: 'string',
      regionFlow: 'string',
      time: 'number',
      totalFlow: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosOriginInstanceBillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The asset status.
   * 
   * *   **0**: No asset is added to the instance for protection.
   * *   **1**: Assets are added to the instance for protection.
   * 
   * @example
   * 0
   */
  assetStatus?: number;
  /**
   * @remarks
   * The payment status. Valid values:
   * 
   * *   **0**: The payment is not overdue.
   * *   **1**: The payment is overdue.
   * 
   * @example
   * 0
   */
  debtStatus?: number;
  /**
   * @remarks
   * The details about the traffic of EIPs with Anti-DDoS (Enhanced) enabled.
   */
  flowList?: DescribeDdosOriginInstanceBillResponseBodyFlowList[];
  /**
   * @remarks
   * The traffic distribution of EIPs with Anti-DDoS (Enhanced) enabled by region.
   * 
   * @example
   * {\\"cn-hongkong\\": 166491566}
   */
  flowRegion?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin (Pay-as-you-go) instance to query.
   * 
   * @example
   * ddosorigin_cn-u7c3lcr9r02
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of protected IP addresses.
   * 
   * @example
   * 15
   */
  ipCount?: number;
  /**
   * @remarks
   * The protected IP addresses and enabled features.
   */
  ipCountOrFunctionList?: DescribeDdosOriginInstanceBillResponseBodyIpCountOrFunctionList[];
  /**
   * @remarks
   * The IP address distribution. The JSON struct contains the following fields:
   * 
   * *   **eipCnIpCount**: the number of EIPs with Anti-DDoS (Enhanced) enabled in the Chinese mainland.
   * *   **eipOvIpCount**: the number of EIPs with Anti-DDoS (Enhanced) enabled outside the Chinese mainland.
   * *   **standardAssetsCnIpCount**: the number of IP addresses of regular Alibaba Cloud services in the Chinese mainland.
   * *   **standardAssetsOvIpCount**: the number of IP addresses of regular Alibaba Cloud services outside the Chinese mainland.
   * 
   * @example
   * {\\"eipCnIpCount\\":6,\\"eipOvIpCount\\":17,\\"standardAssetsCnIpCount\\":2,\\"standardAssetsOvIpCount\\":0}
   */
  ipInfo?: string;
  /**
   * @remarks
   * The information about the monthly summary bills.
   */
  monthlySummaryList?: DescribeDdosOriginInstanceBillResponseBodyMonthlySummaryList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 72155560-F343-55C8-82FE-ED4D7E4AA97E
   */
  requestId?: string;
  /**
   * @remarks
   * The details about the traffic of regular Alibaba Cloud services.
   */
  standardAssetsFlowList?: DescribeDdosOriginInstanceBillResponseBodyStandardAssetsFlowList[];
  /**
   * @remarks
   * The traffic distribution of regular Alibaba Cloud services by region.
   * 
   * @example
   * {\\"cn-hongkong\\": 166491566}
   */
  standardAssetsFlowRegion?: { [key: string]: any };
  /**
   * @remarks
   * The total traffic of regular Alibaba Cloud services in the Chinese mainland in the current month.
   * 
   * @example
   * 0
   */
  standardAssetsTotalFlowCn?: number;
  /**
   * @remarks
   * The total traffic of regular Alibaba Cloud services outside the Chinese mainland in the current month.
   * 
   * @example
   * 0
   */
  standardAssetsTotalFlowOv?: number;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * *   **1**: normal
   * *   **2**: expired
   * *   **3**: released
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The total traffic of EIPs with Anti-DDoS (Enhanced) enabled in the Chinese mainland in the current month. Unit: bytes.
   * 
   * @example
   * 6302081067
   */
  totalFlowCn?: number;
  /**
   * @remarks
   * The total traffic of EIPs with Anti-DDoS (Enhanced) enabled outside the Chinese mainland in the current month. Unit: bytes.
   * 
   * @example
   * 6204918019
   */
  totalFlowOv?: number;
  static names(): { [key: string]: string } {
    return {
      assetStatus: 'AssetStatus',
      debtStatus: 'DebtStatus',
      flowList: 'FlowList',
      flowRegion: 'FlowRegion',
      instanceId: 'InstanceId',
      ipCount: 'IpCount',
      ipCountOrFunctionList: 'IpCountOrFunctionList',
      ipInfo: 'IpInfo',
      monthlySummaryList: 'MonthlySummaryList',
      requestId: 'RequestId',
      standardAssetsFlowList: 'StandardAssetsFlowList',
      standardAssetsFlowRegion: 'StandardAssetsFlowRegion',
      standardAssetsTotalFlowCn: 'StandardAssetsTotalFlowCn',
      standardAssetsTotalFlowOv: 'StandardAssetsTotalFlowOv',
      status: 'Status',
      totalFlowCn: 'TotalFlowCn',
      totalFlowOv: 'TotalFlowOv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetStatus: 'number',
      debtStatus: 'number',
      flowList: { 'type': 'array', 'itemType': DescribeDdosOriginInstanceBillResponseBodyFlowList },
      flowRegion: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceId: 'string',
      ipCount: 'number',
      ipCountOrFunctionList: { 'type': 'array', 'itemType': DescribeDdosOriginInstanceBillResponseBodyIpCountOrFunctionList },
      ipInfo: 'string',
      monthlySummaryList: { 'type': 'array', 'itemType': DescribeDdosOriginInstanceBillResponseBodyMonthlySummaryList },
      requestId: 'string',
      standardAssetsFlowList: { 'type': 'array', 'itemType': DescribeDdosOriginInstanceBillResponseBodyStandardAssetsFlowList },
      standardAssetsFlowRegion: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      standardAssetsTotalFlowCn: 'number',
      standardAssetsTotalFlowOv: 'number',
      status: 'number',
      totalFlowCn: 'number',
      totalFlowOv: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.flowList)) {
      $dara.Model.validateArray(this.flowList);
    }
    if(this.flowRegion) {
      $dara.Model.validateMap(this.flowRegion);
    }
    if(Array.isArray(this.ipCountOrFunctionList)) {
      $dara.Model.validateArray(this.ipCountOrFunctionList);
    }
    if(Array.isArray(this.monthlySummaryList)) {
      $dara.Model.validateArray(this.monthlySummaryList);
    }
    if(Array.isArray(this.standardAssetsFlowList)) {
      $dara.Model.validateArray(this.standardAssetsFlowList);
    }
    if(this.standardAssetsFlowRegion) {
      $dara.Model.validateMap(this.standardAssetsFlowRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

