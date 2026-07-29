// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDdosOriginInstanceBillResponseBodyFlowList extends $dara.Model {
  /**
   * @remarks
   * The traffic distribution by area. The JSON structure contains the following fields:
   * - **bytes**: the traffic of the EIP with Anti-DDoS (Enhanced) enabled in the corresponding region. Unit: bytes.
   * - **memberUid**: the account to which the traffic belongs.
   * - **instanceId**: the instance ID of the global pay-as-you-go instance associated with the EIP with Anti-DDoS (Enhanced) enabled.
   * - **ip**: the corresponding elastic IP addresses (EIPs) with Anti-DDoS Proxy Enabled.
   * - **region**: the area.
   * > If memberUid is empty in the JSON, it indicates the current account information. The bytes field at the outermost level of the JSON represents the total traffic, and the inner bytes field represents the traffic for the corresponding account.
   * 
   * @example
   * [{\\"bytes\\":79282719,\\"memberUid\\":\\"\\",\\"regionFlows\\":{\\"cn-hangzhou\\":[{\\"bytes\\":79282719,\\"instanceId\\":\\"ddosorigin_cn-u7c3lcr9r02\\",\\"ip\\":\\"47.118.168.57\\",\\"region\\":\\"cn-hangzhou\\"}]}}]
   */
  memberFlow?: string;
  /**
   * @remarks
   * The traffic distribution by area. The JSON structure contains the following fields:
   * - **bytes**: the traffic of the EIP with Anti-DDoS (Enhanced) enabled in the corresponding region. Unit: bytes.
   * - **instanceId**: the instance ID of the global pay-as-you-go instance associated with the EIP with Anti-DDoS (Enhanced) enabled.
   * - **ip**: the corresponding elastic IP addresses (EIPs) with Anti-DDoS Proxy Enabled.
   * - **region**: the area.
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
   * The total traffic of Regular Alibaba Cloud service IP addresses.
   * 
   * @example
   * 6302081067
   */
  totalBillFlow?: number;
  /**
   * @remarks
   * The IP Traffic of EIPs with Anti-DDoS (Enhanced) enabled. Unit: bytes.
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
   * The protected asset region. Valid values:
   * - **only_mainland_china**: the Chinese mainland only.
   * - **global**: global.
   * - **international_and_hmt**: outside the Chinese mainland, including international regions and Hong Kong (China), Macao (China), and Taiwan (China).
   * 
   * @example
   * global
   */
  coverage?: string;
  /**
   * @remarks
   * The number of pay-as-you-go protected IP addresses in the Chinese mainland.
   * 
   * @example
   * 5
   */
  ipCntCn?: number;
  /**
   * @remarks
   * The number of pay-as-you-go protected IP addresses outside the Chinese mainland.
   * 
   * @example
   * 5
   */
  ipCntOv?: number;
  /**
   * @remarks
   * The account distribution of the bill. The JSON struct contains the following fields:
   * - **eipCnIpCount**: the number of EIPs with Anti-DDoS (Enhanced) enabled in the Chinese mainland.
   * - **eipOvIpCount**: the number of EIPs with Anti-DDoS (Enhanced) enabled outside the Chinese mainland.
   * - **memberUid**: the account to which the IP addresses belong.
   * - **standardAssetsCnIpCount**: the number of Regular Alibaba Cloud service IP addresses in the Chinese mainland.
   * - **standardAssetsOvIpCount**: the number of Regular Alibaba Cloud service IP addresses outside the Chinese mainland.
   * > If memberUid is empty in the JSON, it indicates the current account information.
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
   * The number of days the service has been activated.
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
   * > The daily count of protected IP addresses is accumulated.
   * 
   * @example
   * 28
   */
  ipCountCn?: number;
  /**
   * @remarks
   * The total number of protected IP addresses outside the Chinese mainland.
   * > The daily count of protected IP addresses is accumulated.
   * 
   * @example
   * 30
   */
  ipCountIntl?: number;
  /**
   * @remarks
   * The UID of the member accounts.
   * 
   * @example
   * 112873971277****
   */
  memberUid?: string;
  /**
   * @remarks
   * The total traffic of Regular Alibaba Cloud services in the Chinese mainland. Unit: bytes.
   * 
   * @example
   * 123456
   */
  standardAssetsFlowCn?: number;
  /**
   * @remarks
   * The total traffic of Regular Alibaba Cloud services outside the Chinese mainland. Unit: bytes.
   * 
   * @example
   * 123456
   */
  standardAssetsFlowIntl?: number;
  /**
   * @remarks
   * The UID of the management account.
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
   * - **bytes**: the traffic of the Regular Alibaba Cloud service in the corresponding region. Unit: bytes.
   * - **memberUid**: the account to which the traffic belongs.
   * - **instanceId**: the ID of the global pay-as-you-go instance associated with the Regular Alibaba Cloud service.
   * - **ip**: the instance ID associated with the Regular Alibaba Cloud service.
   * - **region**: the region.
   * > If memberUid is empty in the JSON, it indicates the current account information. The bytes field at the outermost level of the JSON represents the total traffic, and the inner bytes field represents the traffic for the corresponding account.
   * 
   * @example
   * [{\\"bytes\\":79282719,\\"memberUid\\":\\"\\",\\"regionFlows\\":{\\"cn-hangzhou\\":[{\\"bytes\\":79282719,\\"instanceId\\":\\"ddosorigin_cn-u7c3lcr9r02\\",\\"ip\\":\\"47.118.168.57\\",\\"region\\":\\"cn-hangzhou\\"}]}}]
   */
  memberFlow?: string;
  /**
   * @remarks
   * The traffic distribution by region. The JSON struct contains the following fields:
   * - **bytes**: the traffic of the Regular Alibaba Cloud service in the corresponding region. Unit: bytes.
   * - **instanceId**: the ID of the global pay-as-you-go instance associated with the Regular Alibaba Cloud service.
   * - **ip**: the instance ID associated with the Anti-DDoS Origin instance.
   * - **region**: the region.
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
   * The traffic of Regular Alibaba Cloud services. Unit: bytes.
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
   * The asset status. Valid values:
   * - **0**: No assets have been associated with the current instance.
   * - **1**: Assets have been associated with the current instance.
   * 
   * @example
   * 0
   */
  assetStatus?: number;
  /**
   * @remarks
   * The overdue payment status. Valid values:
   * 
   * - **0**: No overdue payment.
   * - **1**: Overdue payment exists.
   * 
   * @example
   * 0
   */
  debtStatus?: number;
  /**
   * @remarks
   * The IP Traffic details of EIPs with Anti-DDoS (Enhanced) enabled.
   */
  flowList?: DescribeDdosOriginInstanceBillResponseBodyFlowList[];
  /**
   * @remarks
   * The regional traffic distribution information of EIPs with Anti-DDoS (Enhanced) enabled.
   * 
   * @example
   * {\\"cn-hongkong\\": 166491566}
   */
  flowRegion?: { [key: string]: any };
  /**
   * @remarks
   * The instance ID of the pay-as-you-go Anti-DDoS Origin instance to query.
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
   * The details of the protected IP address count and feature activation list.
   */
  ipCountOrFunctionList?: DescribeDdosOriginInstanceBillResponseBodyIpCountOrFunctionList[];
  /**
   * @remarks
   * The IP distribution details. The JSON structure contains the following fields:
   * - **eipCnIpCount**: the number of elastic IP addresses (EIPs) with Anti-DDoS Proxy Enabled in the Chinese mainland.
   * - **eipOvIpCount**: the number of elastic IP addresses (EIPs) with Anti-DDoS Proxy Enabled outside the Chinese mainland.
   * - **standardAssetsCnIpCount**: the number of Regular Alibaba Cloud service IP addresses in the Chinese mainland.
   * - **standardAssetsOvIpCount**: the number of Regular Alibaba Cloud service IP addresses outside the Chinese mainland.
   * 
   * @example
   * {\\"eipCnIpCount\\":6,\\"eipOvIpCount\\":17,\\"standardAssetsCnIpCount\\":2,\\"standardAssetsOvIpCount\\":0}
   */
  ipInfo?: string;
  /**
   * @remarks
   * The monthly summary information list.
   */
  monthlySummaryList?: DescribeDdosOriginInstanceBillResponseBodyMonthlySummaryList[];
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for this request. You can use it to troubleshoot issues.
   * 
   * @example
   * 72155560-F343-55C8-82FE-ED4D7E4AA97E
   */
  requestId?: string;
  /**
   * @remarks
   * The traffic information of Regular Alibaba Cloud services.
   */
  standardAssetsFlowList?: DescribeDdosOriginInstanceBillResponseBodyStandardAssetsFlowList[];
  /**
   * @remarks
   * The regional traffic distribution information of Regular Alibaba Cloud services.
   * 
   * @example
   * {\\"cn-hongkong\\": 166491566}
   */
  standardAssetsFlowRegion?: { [key: string]: any };
  /**
   * @remarks
   * The total traffic of Regular Alibaba Cloud services in the Chinese mainland for the current month.
   * 
   * @example
   * 0
   */
  standardAssetsTotalFlowCn?: number;
  /**
   * @remarks
   * The total traffic of Regular Alibaba Cloud services outside the Chinese mainland for the current month.
   * 
   * @example
   * 0
   */
  standardAssetsTotalFlowOv?: number;
  /**
   * @remarks
   * The activation status. Valid values:
   * 
   * - **1**: Normal.
   * - **2**: Expired.
   * - **3**: Released.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The total traffic of EIPs with Anti-DDoS (Enhanced) enabled in the Chinese mainland for the current month. Unit: bytes.
   * 
   * @example
   * 6302081067
   */
  totalFlowCn?: number;
  /**
   * @remarks
   * The total traffic of EIPs with Anti-DDoS (Enhanced) enabled outside the Chinese mainland for the current month. Unit: bytes.
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

