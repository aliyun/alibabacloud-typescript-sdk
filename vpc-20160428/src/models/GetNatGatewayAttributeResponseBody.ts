// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNatGatewayAttributeResponseBodyAccessMode } from "./GetNatGatewayAttributeResponseBodyAccessMode";
import { GetNatGatewayAttributeResponseBodyBillingConfig } from "./GetNatGatewayAttributeResponseBodyBillingConfig";
import { GetNatGatewayAttributeResponseBodyDeletionProtectionInfo } from "./GetNatGatewayAttributeResponseBodyDeletionProtectionInfo";
import { GetNatGatewayAttributeResponseBodyForwardTable } from "./GetNatGatewayAttributeResponseBodyForwardTable";
import { GetNatGatewayAttributeResponseBodyFullNatTable } from "./GetNatGatewayAttributeResponseBodyFullNatTable";
import { GetNatGatewayAttributeResponseBodyIpList } from "./GetNatGatewayAttributeResponseBodyIpList";
import { GetNatGatewayAttributeResponseBodyLogDelivery } from "./GetNatGatewayAttributeResponseBodyLogDelivery";
import { GetNatGatewayAttributeResponseBodyPrivateInfo } from "./GetNatGatewayAttributeResponseBodyPrivateInfo";
import { GetNatGatewayAttributeResponseBodySnatTable } from "./GetNatGatewayAttributeResponseBodySnatTable";


export class GetNatGatewayAttributeResponseBody extends $dara.Model {
  accessMode?: GetNatGatewayAttributeResponseBodyAccessMode;
  /**
   * @remarks
   * The billing information.
   */
  billingConfig?: GetNatGatewayAttributeResponseBodyBillingConfig;
  /**
   * @remarks
   * The service status of the NAT gateway. Valid values:
   * 
   * *   **Normal**: normal
   * *   **FinancialLocked**: locked due to overdue payments
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The time when the NAT gateway was created. Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 2021-12-08T12:20:20Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The information about the deletion protection feature.
   */
  deletionProtectionInfo?: GetNatGatewayAttributeResponseBodyDeletionProtectionInfo;
  /**
   * @remarks
   * The description of the NAT gateway.
   * 
   * @example
   * NAT
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the traffic monitoring feature is enabled. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  ecsMetricEnabled?: boolean;
  enableSessionLog?: boolean;
  /**
   * @remarks
   * The time when the NAT gateway expires.
   * 
   * @example
   * 2021-12-26T12:20:20Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The information about the DNAT table.
   */
  forwardTable?: GetNatGatewayAttributeResponseBodyForwardTable;
  /**
   * @remarks
   * The information about the FULLNAT table.
   */
  fullNatTable?: GetNatGatewayAttributeResponseBodyFullNatTable;
  /**
   * @remarks
   * The elastic IP addresses (EIPs) that are associated with the Internet NAT gateway.
   */
  ipList?: GetNatGatewayAttributeResponseBodyIpList[];
  logDelivery?: GetNatGatewayAttributeResponseBodyLogDelivery;
  /**
   * @remarks
   * The name of the NAT gateway.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * ngw-bp1047e2d4z7kf2ki****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The type of the Internet NAT gateway. Only **Enhanced** is returned, which indicates an enhanced Internet NAT gateway.
   * 
   * @example
   * Enhanced
   */
  natType?: string;
  /**
   * @remarks
   * The type of the NAT gateway. Valid values:
   * 
   * *   **internet**: an Internet NAT gateway
   * *   **intranet**: a VPC NAT gateway
   * 
   * @example
   * internet
   */
  networkType?: string;
  /**
   * @remarks
   * The private network information about the NAT gateway.
   */
  privateInfo?: GetNatGatewayAttributeResponseBodyPrivateInfo;
  /**
   * @remarks
   * Indicates whether the NAT gateway supports PrivateLink. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  privateLinkEnabled?: boolean;
  /**
   * @remarks
   * The mode that is used by PrivateLink. Valid values:
   * 
   * *   **FullNat**: the FULLNAT mode
   * *   **Geneve**: the GENEVE mode
   * 
   * @example
   * FullNat
   */
  privateLinkMode?: string;
  /**
   * @remarks
   * The ID of the region where the NAT gateway is deployed.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The information about the SNAT table.
   */
  snatTable?: GetNatGatewayAttributeResponseBodySnatTable;
  /**
   * @remarks
   * The status of the NAT gateway. Valid values:
   * 
   * *   **Creating**: being created. The operation to create a NAT gateway is asynchronous. The NAT gateway remains in the **Creating** state until it is created.
   * *   **Available**: available. After a NAT gateway is created, it remains in a stable state.
   * *   **Modifying**: being modified. The operation to upgrade or downgrade a NAT gateway is asynchronous. The NAT gateway remains in the **Modifying** state until it is upgraded or downgraded.
   * *   **Deleting**: being deleted. The operation to delete a NAT gateway is asynchronous. The NAT gateway remains in the **Deleting** state until it is deleted.
   * *   **Converting**: being converted. The operation to convert a standard NAT gateway to an enhanced NAT gateway is asynchronous. The NAT gateway remains in the **Converting** state until it is converted.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the VPC to which the NAT gateway belongs.
   * 
   * @example
   * vpc-bp15zckdt37pq72z****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      billingConfig: 'BillingConfig',
      businessStatus: 'BusinessStatus',
      creationTime: 'CreationTime',
      deletionProtectionInfo: 'DeletionProtectionInfo',
      description: 'Description',
      ecsMetricEnabled: 'EcsMetricEnabled',
      enableSessionLog: 'EnableSessionLog',
      expiredTime: 'ExpiredTime',
      forwardTable: 'ForwardTable',
      fullNatTable: 'FullNatTable',
      ipList: 'IpList',
      logDelivery: 'LogDelivery',
      name: 'Name',
      natGatewayId: 'NatGatewayId',
      natType: 'NatType',
      networkType: 'NetworkType',
      privateInfo: 'PrivateInfo',
      privateLinkEnabled: 'PrivateLinkEnabled',
      privateLinkMode: 'PrivateLinkMode',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      snatTable: 'SnatTable',
      status: 'Status',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: GetNatGatewayAttributeResponseBodyAccessMode,
      billingConfig: GetNatGatewayAttributeResponseBodyBillingConfig,
      businessStatus: 'string',
      creationTime: 'string',
      deletionProtectionInfo: GetNatGatewayAttributeResponseBodyDeletionProtectionInfo,
      description: 'string',
      ecsMetricEnabled: 'boolean',
      enableSessionLog: 'boolean',
      expiredTime: 'string',
      forwardTable: GetNatGatewayAttributeResponseBodyForwardTable,
      fullNatTable: GetNatGatewayAttributeResponseBodyFullNatTable,
      ipList: { 'type': 'array', 'itemType': GetNatGatewayAttributeResponseBodyIpList },
      logDelivery: GetNatGatewayAttributeResponseBodyLogDelivery,
      name: 'string',
      natGatewayId: 'string',
      natType: 'string',
      networkType: 'string',
      privateInfo: GetNatGatewayAttributeResponseBodyPrivateInfo,
      privateLinkEnabled: 'boolean',
      privateLinkMode: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      snatTable: GetNatGatewayAttributeResponseBodySnatTable,
      status: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.accessMode && typeof (this.accessMode as any).validate === 'function') {
      (this.accessMode as any).validate();
    }
    if(this.billingConfig && typeof (this.billingConfig as any).validate === 'function') {
      (this.billingConfig as any).validate();
    }
    if(this.deletionProtectionInfo && typeof (this.deletionProtectionInfo as any).validate === 'function') {
      (this.deletionProtectionInfo as any).validate();
    }
    if(this.forwardTable && typeof (this.forwardTable as any).validate === 'function') {
      (this.forwardTable as any).validate();
    }
    if(this.fullNatTable && typeof (this.fullNatTable as any).validate === 'function') {
      (this.fullNatTable as any).validate();
    }
    if(Array.isArray(this.ipList)) {
      $dara.Model.validateArray(this.ipList);
    }
    if(this.logDelivery && typeof (this.logDelivery as any).validate === 'function') {
      (this.logDelivery as any).validate();
    }
    if(this.privateInfo && typeof (this.privateInfo as any).validate === 'function') {
      (this.privateInfo as any).validate();
    }
    if(this.snatTable && typeof (this.snatTable as any).validate === 'function') {
      (this.snatTable as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

