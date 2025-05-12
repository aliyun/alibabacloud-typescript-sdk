// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVccResponseBodyContentAliyunRouterInfo } from "./GetVccResponseBodyContentAliyunRouterInfo";
import { GetVccResponseBodyContentCisRouterInfo } from "./GetVccResponseBodyContentCisRouterInfo";
import { GetVccResponseBodyContentErInfos } from "./GetVccResponseBodyContentErInfos";
import { GetVccResponseBodyContentTags } from "./GetVccResponseBodyContentTags";
import { GetVccResponseBodyContentVbrInfos } from "./GetVccResponseBodyContentVbrInfos";
import { GetVccResponseBodyContentVpdBaseInfo } from "./GetVccResponseBodyContentVpdBaseInfo";


export class GetVccResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Express Connect circuit access point ID:
   * 
   * *   **ap-cn-wulanchabu-jn-ts-A**: Ulanqab-Jining-A
   * *   **ap-cn-heyuan-yc-ts-SA127**: Heyuan-Yuancheng-A
   * 
   * @example
   * ap-cn-wulanchabu-jn-ts-A
   */
  accessPointId?: string;
  /**
   * @remarks
   * Alibaba Cloud route information list
   */
  aliyunRouterInfo?: GetVccResponseBodyContentAliyunRouterInfo[];
  /**
   * @remarks
   * Whether Lingjun HUB has been bound to a network instance
   * 
   * *   **true**: Bound
   * *   **false**: unbound
   * 
   * @example
   * true
   */
  attachErStatus?: boolean;
  /**
   * @remarks
   * bandwidth
   * 
   * @example
   * 20
   */
  bandwidth?: number;
  /**
   * @remarks
   * The bandwidth of the port.
   * 
   * @example
   * 1G
   */
  bandwidthStr?: string;
  /**
   * @remarks
   * BGP AS number
   * 
   * @example
   * 45644
   */
  bgpAsn?: string;
  /**
   * @remarks
   * BGP CIDR block
   * 
   * @example
   * 10.4.0.0/24
   */
  bgpCidr?: string;
  /**
   * @remarks
   * The ID of the CEN instance; [What is the CEN?](https://help.aliyun.com/document_detail/181681.html)
   * 
   * You can call the [DescribeCens](https://help.aliyun.com/document_detail/468215.htm) to query the information of CEN instances under the current Alibaba Cloud account.
   * 
   * @example
   * cen-m2iskbojlvda5w65fp
   */
  cenId?: string;
  /**
   * @remarks
   * Account to which the CEN belongs
   * 
   * @example
   * 1620939556166279
   */
  cenOwnerId?: string;
  /**
   * @remarks
   * Lingjun Network Routing Information List
   */
  cisRouterInfo?: GetVccResponseBodyContentCisRouterInfo[];
  /**
   * @remarks
   * Commodity code
   * 
   * @example
   * bccluster_cloudconnectionpre_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The connection mode. Valid values:
   * 
   * *   **VPC**
   * *   **CENTR**
   * 
   * @example
   * CENTR
   */
  connectionType?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1648085472000
   */
  createTime?: string;
  /**
   * @remarks
   * Current Node
   * 
   * @example
   * task-xxx-node-x
   */
  currentNode?: string;
  /**
   * @remarks
   * Cycle
   * 
   * @example
   * 1
   */
  duration?: string;
  /**
   * @remarks
   * List of bound Lingjun HUB information
   */
  erInfos?: GetVccResponseBodyContentErInfos[];
  /**
   * @remarks
   * The time when the application expired.
   * 
   * @example
   * 1678379917000
   */
  expirationDate?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1648085472000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The billing method for network usage.
   * 
   * *   **PayByTraffic**: pay-by-traffic
   * *   **PayByBandwidth**: pay-by-bandwidth
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The connectivity provider of the Express Connect circuit. Valid values:
   * 
   * *   **CO**: other connectivity providers in the Chinese mainland
   * 
   * @example
   * CO
   */
  lineOperator?: string;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * You don\\"t have the permission of this operation, action=eflo:GetVcc, arn=acs:eflo:cn-heyuan:1263399219805497:vcc/vcc-cn-fhh3yxjwe01, resourceGroup=null
   */
  message?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **PREPAY**: subscription
   * *   **POSTPAY**: pay-as-you-go
   * 
   * @example
   * PrePay
   */
  payType?: string;
  /**
   * @remarks
   * The port type of the Express Connect circuit. Valid values:
   * 
   * *   **100GBase-LR**: 100,000 megabytes of single-mode optical port (10 km)
   * 
   * @example
   * 100GBase-LR
   */
  portType?: string;
  /**
   * @remarks
   * The billing cycle. Valid values:
   * 
   * *   **Month**: Billed on a monthly basis
   * *   **Year**: Billed on an annual basis
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of your Alibaba Cloud resource group.
   * 
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.htm).
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specification; value:
   * 
   * *   **Large**: Large
   * 
   * @example
   * Large
   */
  spec?: string;
  /**
   * @remarks
   * The status of the cache reserve instance. Valid values:
   * 
   * *   **Available**: Normal.
   * *   **Not Available**: Not available.
   * *   **Executing**: The task is being executed.
   * *   **Deleting**: The account is being deleted
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags.
   */
  tags?: GetVccResponseBodyContentTags[];
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1620939556166279
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the vSwitch. [Virtual Private Cloud VSwitch](https://help.aliyun.com/document_detail/100380.html).
   * 
   * You can call the [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) operation to query created vSwitches.
   * 
   * @example
   * vsw-uf6u8473r84e6n1n19he5
   */
  vSwitchId?: string;
  /**
   * @remarks
   * Information list of border routers
   */
  vbrInfos?: GetVccResponseBodyContentVbrInfos[];
  /**
   * @remarks
   * The ID of the Lingjun connection instance.
   * 
   * @example
   * vcc-cn-cqf2xh40101
   */
  vccId?: string;
  /**
   * @remarks
   * The name of the Lingjun connection instance.
   * 
   * @example
   * vcc-heyuan-backup
   */
  vccName?: string;
  /**
   * @remarks
   * Virtual Private Cloud IDs; [What is Virtual Private Cloud](https://help.aliyun.com/document_detail/34217.html)
   * 
   * You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html#demo-0) operation to query the specified VPC.
   * 
   * @example
   * vpc-j6ctp4n75306phv5tmpsm
   */
  vpcId?: string;
  /**
   * @remarks
   * Lingjun network segment information (applicable to the scene where the old version of Lingjun connection is directly bound to Lingjun network segment)
   */
  vpdBaseInfo?: GetVccResponseBodyContentVpdBaseInfo;
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * @example
   * vpd-d3isyds4
   */
  vpdId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      aliyunRouterInfo: 'AliyunRouterInfo',
      attachErStatus: 'AttachErStatus',
      bandwidth: 'Bandwidth',
      bandwidthStr: 'BandwidthStr',
      bgpAsn: 'BgpAsn',
      bgpCidr: 'BgpCidr',
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      cisRouterInfo: 'CisRouterInfo',
      commodityCode: 'CommodityCode',
      connectionType: 'ConnectionType',
      createTime: 'CreateTime',
      currentNode: 'CurrentNode',
      duration: 'Duration',
      erInfos: 'ErInfos',
      expirationDate: 'ExpirationDate',
      gmtModified: 'GmtModified',
      internetChargeType: 'InternetChargeType',
      lineOperator: 'LineOperator',
      message: 'Message',
      payType: 'PayType',
      portType: 'PortType',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      spec: 'Spec',
      status: 'Status',
      tags: 'Tags',
      tenantId: 'TenantId',
      vSwitchId: 'VSwitchId',
      vbrInfos: 'VbrInfos',
      vccId: 'VccId',
      vccName: 'VccName',
      vpcId: 'VpcId',
      vpdBaseInfo: 'VpdBaseInfo',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      aliyunRouterInfo: { 'type': 'array', 'itemType': GetVccResponseBodyContentAliyunRouterInfo },
      attachErStatus: 'boolean',
      bandwidth: 'number',
      bandwidthStr: 'string',
      bgpAsn: 'string',
      bgpCidr: 'string',
      cenId: 'string',
      cenOwnerId: 'string',
      cisRouterInfo: { 'type': 'array', 'itemType': GetVccResponseBodyContentCisRouterInfo },
      commodityCode: 'string',
      connectionType: 'string',
      createTime: 'string',
      currentNode: 'string',
      duration: 'string',
      erInfos: { 'type': 'array', 'itemType': GetVccResponseBodyContentErInfos },
      expirationDate: 'string',
      gmtModified: 'string',
      internetChargeType: 'string',
      lineOperator: 'string',
      message: 'string',
      payType: 'string',
      portType: 'string',
      pricingCycle: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      spec: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetVccResponseBodyContentTags },
      tenantId: 'string',
      vSwitchId: 'string',
      vbrInfos: { 'type': 'array', 'itemType': GetVccResponseBodyContentVbrInfos },
      vccId: 'string',
      vccName: 'string',
      vpcId: 'string',
      vpdBaseInfo: GetVccResponseBodyContentVpdBaseInfo,
      vpdId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aliyunRouterInfo)) {
      $dara.Model.validateArray(this.aliyunRouterInfo);
    }
    if(Array.isArray(this.cisRouterInfo)) {
      $dara.Model.validateArray(this.cisRouterInfo);
    }
    if(Array.isArray(this.erInfos)) {
      $dara.Model.validateArray(this.erInfos);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.vbrInfos)) {
      $dara.Model.validateArray(this.vbrInfos);
    }
    if(this.vpdBaseInfo && typeof (this.vpdBaseInfo as any).validate === 'function') {
      (this.vpdBaseInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

