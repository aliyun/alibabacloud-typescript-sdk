// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNatGatewayAttributeResponseBodyAccessMode extends $dara.Model {
  /**
   * @remarks
   * The access mode. Valid values:
   * 
   * - **route**: routing mode.
   * 
   * - **tunnel**: tunnel mode.
   * 
   * @example
   * route
   */
  modeValue?: string;
  /**
   * @remarks
   * The tunnel mode type. Valid values:
   * 
   * - **geneve**: Geneve.
   * 
   * @example
   * geneve
   */
  tunnelType?: string;
  static names(): { [key: string]: string } {
    return {
      modeValue: 'ModeValue',
      tunnelType: 'TunnelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modeValue: 'string',
      tunnelType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayAttributeResponseBodyBillingConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic payment is enabled. When the **InstanceChargeType** parameter is set to **PrePaid**, the following values are returned:
   * 
   * - **false**: Automatic payment is disabled. After an order is generated, you must complete the payment in the User Center.
   * 
   * - **true**: Automatic payment is enabled. Orders are automatically paid.
   * 
   * When the **InstanceChargeType** parameter is set to **PostPaid**, this parameter is empty.
   * 
   * @example
   * false
   */
  autoPay?: string;
  /**
   * @remarks
   * <props="china">The billing method of the NAT gateway. Valid values:
   * 
   * <props="china">- **PostPaid**: pay-as-you-go.
   * 
   * <props="china">- **PrePaid**: subscription.
   * 
   * <props="intl">The billing method of the NAT gateway. Valid value: **PostPaid** (pay-as-you-go).
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The billing method of the NAT gateway instance. Valid values:
   * 
   * - **PayBySpec**: billed by defined specifications.
   * - **PayByLcu**: billed by usage.
   * 
   * @example
   * PayBySpec
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The specification of the Internet NAT gateway. When **InternetChargeType** is set to **PayBySpec**, the following values are returned:
   * 
   * - **Small**: small.
   * - **Middle**: medium.
   * - **Large**: large.
   * 
   * When **InternetChargeType** is set to **PayByLcu**, this parameter is empty.
   * 
   * @example
   * Small
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayAttributeResponseBodyDeletionProtectionInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether deletion protection is enabled. Valid values:
   * 
   * - **true**: Deletion protection is enabled.
   * - **false**: Deletion protection is disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayAttributeResponseBodyForwardTable extends $dara.Model {
  /**
   * @remarks
   * The number of DNAT entries.
   * 
   * @example
   * 1
   */
  forwardEntryCount?: number;
  /**
   * @remarks
   * The ID of the DNAT table.
   * 
   * @example
   * ftb-uf6gj3mhsg94qsqst****
   */
  forwardTableId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardEntryCount: 'ForwardEntryCount',
      forwardTableId: 'ForwardTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardEntryCount: 'number',
      forwardTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayAttributeResponseBodyFullNatTable extends $dara.Model {
  /**
   * @remarks
   * The number of FULLNAT entries.
   * 
   * @example
   * 1
   */
  fullNatEntryCount?: number;
  /**
   * @remarks
   * The ID of the FULLNAT table.
   * 
   * @example
   * fulltb-gw88z7hhlv43rmb26****
   */
  fullNatTableId?: string;
  static names(): { [key: string]: string } {
    return {
      fullNatEntryCount: 'FullNatEntryCount',
      fullNatTableId: 'FullNatTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullNatEntryCount: 'number',
      fullNatTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayAttributeResponseBodyIpList extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the EIP.
   * 
   * @example
   * eip-bp13e9i2qst4g6jzi****
   */
  allocationId?: string;
  /**
   * @remarks
   * The IP address of the EIP.
   * 
   * @example
   * 116.33.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The association status of the EIP that is associated with the Internet NAT gateway. Valid values:
   * 
   * - **idle**: The EIP is not associated with any SNAT or DNAT entry.
   * - **UsedBySnatTable**: The EIP is associated with an SNAT entry.
   * - **UsedByForwardTable**: The EIP is associated with a DNAT entry.
   * 
   * @example
   * idle
   */
  usingStatus?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      ipAddress: 'IpAddress',
      usingStatus: 'UsingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      ipAddress: 'string',
      usingStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayAttributeResponseBodyIpv6Config extends $dara.Model {
  /**
   * @remarks
   * Indicates whether IPv6 is enabled. Valid values:
   * 
   * - **true**: IPv6 is enabled.
   * 
   * - **false**: IPv6 is disabled.
   * 
   * @example
   * false
   */
  ipv6Enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      ipv6Enabled: 'Ipv6Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayAttributeResponseBodyLogDelivery extends $dara.Model {
  /**
   * @remarks
   * The error message for session log delivery failure.
   * 
   * @example
   * LogStoreNotExist: logstore session_log_test does not exist
   */
  deliverLogsErrorMessage?: string;
  /**
   * @remarks
   * The session log delivery status. Valid values:
   * 
   * - **Succsess**: success.
   * - **Failure**: failure.
   * 
   * @example
   * Failure
   */
  deliveryStatus?: string;
  /**
   * @remarks
   * The destination type for session log delivery. Valid value:
   * 
   * - **sls**: Simple Log Service.
   * 
   * @example
   * sls
   */
  logDeliveryType?: string;
  /**
   * @remarks
   * The destination address for session log delivery.
   * 
   * @example
   * acs:log:cn-hangzhou:0000:project/nat_session_log_project/logstore/session_log_test
   */
  logDestination?: string;
  static names(): { [key: string]: string } {
    return {
      deliverLogsErrorMessage: 'DeliverLogsErrorMessage',
      deliveryStatus: 'DeliveryStatus',
      logDeliveryType: 'LogDeliveryType',
      logDestination: 'LogDestination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliverLogsErrorMessage: 'string',
      deliveryStatus: 'string',
      logDeliveryType: 'string',
      logDestination: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayAttributeResponseBodyPrivateInfo extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the elastic network interface controller (NIC).
   * 
   * @example
   * eni-bp1cmgtoaka8vfyg****
   */
  eniInstanceId?: string;
  /**
   * @remarks
   * The zone to which the NAT gateway belongs.
   * 
   * @example
   * cn-qingdao-b
   */
  izNo?: string;
  /**
   * @remarks
   * The maximum bandwidth value. Unit: Mbit/s.
   * 
   * @example
   * 5120
   */
  maxBandwidth?: number;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The private IPv6 address.
   * 
   * @example
   * 2408:XXXX:153:3921:851c:c435:7b12:1c5f
   */
  privateIpv6Address?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the NAT gateway belongs.
   * 
   * @example
   * vsw-bp1s2laxhdf9ayjbo***
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      eniInstanceId: 'EniInstanceId',
      izNo: 'IzNo',
      maxBandwidth: 'MaxBandwidth',
      privateIpAddress: 'PrivateIpAddress',
      privateIpv6Address: 'PrivateIpv6Address',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniInstanceId: 'string',
      izNo: 'string',
      maxBandwidth: 'number',
      privateIpAddress: 'string',
      privateIpv6Address: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayAttributeResponseBodySnatTable extends $dara.Model {
  /**
   * @remarks
   * The number of SNAT entries.
   * 
   * @example
   * 1
   */
  snatEntryCount?: number;
  /**
   * @remarks
   * The ID of the SNAT table.
   * 
   * @example
   * stb-SnatTableIds****
   */
  snatTableId?: string;
  static names(): { [key: string]: string } {
    return {
      snatEntryCount: 'SnatEntryCount',
      snatTableId: 'SnatTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snatEntryCount: 'number',
      snatTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access mode for reverse access to the VPC NAT gateway.
   */
  accessMode?: GetNatGatewayAttributeResponseBodyAccessMode;
  /**
   * @remarks
   * The disaster recovery type of the NAT gateway. Valid values:
   * 
   * - **CrossAZ**: cross-zone disaster recovery.
   * - **SingleAZ**: single-zone disaster recovery.
   * 
   * @example
   * CrossAZ
   */
  availabilityMode?: string;
  /**
   * @remarks
   * The billing configuration information.
   */
  billingConfig?: GetNatGatewayAttributeResponseBodyBillingConfig;
  /**
   * @remarks
   * The service status of the NAT gateway. Valid values:
   * 
   * - **Normal**: normal.
   * - **FinancialLocked**: locked due to overdue payment.
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
   * The deletion protection information.
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
   * Indicates whether gateway traffic monitoring is enabled. Valid values:
   * 
   * - **true**: Gateway traffic monitoring is enabled.
   * - **false**: Gateway traffic monitoring is disabled.
   * 
   * @example
   * true
   */
  ecsMetricEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether session logging is enabled. Valid values:
   * 
   * - **true**: Session logging is enabled.
   * 
   * - **false**: Session logging is disabled.
   * 
   * @example
   * true
   */
  enableSessionLog?: boolean;
  /**
   * @remarks
   * The expiration time of the NAT gateway. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-26T12:20:20Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The DNAT table information.
   */
  forwardTable?: GetNatGatewayAttributeResponseBodyForwardTable;
  /**
   * @remarks
   * The FULLNAT table information.
   */
  fullNatTable?: GetNatGatewayAttributeResponseBodyFullNatTable;
  /**
   * @remarks
   * The elastic IP addresses (EIPs) associated with the Internet NAT gateway.
   */
  ipList?: GetNatGatewayAttributeResponseBodyIpList[];
  /**
   * @remarks
   * The IPv6 configuration information.
   */
  ipv6Config?: GetNatGatewayAttributeResponseBodyIpv6Config;
  /**
   * @remarks
   * The session log configuration information.
   */
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
   * The type of the Internet NAT gateway. Currently, the value is **Enhanced**, which indicates an enhanced NAT gateway.
   * 
   * @example
   * Enhanced
   */
  natType?: string;
  /**
   * @remarks
   * The network type of the NAT gateway. Valid values:
   * 
   * - **internet**: Internet NAT gateway.
   * - **intranet**: VPC NAT gateway.
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
   * Indicates whether PrivateLink is supported. Valid values:
   * 
   * - **true**: PrivateLink is supported.
   * - **false**: PrivateLink is not supported.
   * 
   * @example
   * true
   */
  privateLinkEnabled?: boolean;
  /**
   * @remarks
   * The PrivateLink service translation mode. Valid values:
   * 
   * - **FullNat**: FULLNAT mode.
   * - **Geneve**: Geneve mode.
   * 
   * @example
   * FullNat
   */
  privateLinkMode?: string;
  /**
   * @remarks
   * The region ID of the NAT gateway.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The SNAT table information.
   */
  snatTable?: GetNatGatewayAttributeResponseBodySnatTable;
  /**
   * @remarks
   * The status of the NAT gateway. Valid values:
   * 
   * - **Creating**: The NAT gateway is being created. Creating a NAT gateway is an asynchronous operation. The NAT gateway remains in the **Creating** state until it is created.
   * - **Available**: The NAT gateway is available. This is a stable state after the NAT gateway is created.
   * - **Modifying**: The NAT gateway is being modified. Modifying the specifications of a NAT gateway is an asynchronous operation. The NAT gateway remains in the **Modifying** state until it is modified.
   * - **Deleting**: The NAT gateway is being deleted. Deleting a NAT gateway is an asynchronous operation. The NAT gateway remains in the **Deleting** state until it is deleted.
   * - **Converting**: The NAT gateway is being upgraded. Upgrading a standard NAT gateway to an enhanced NAT gateway is an asynchronous operation. The NAT gateway remains in the **Converting** state until it is upgraded.
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
      availabilityMode: 'AvailabilityMode',
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
      ipv6Config: 'Ipv6Config',
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
      availabilityMode: 'string',
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
      ipv6Config: GetNatGatewayAttributeResponseBodyIpv6Config,
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
    if(this.ipv6Config && typeof (this.ipv6Config as any).validate === 'function') {
      (this.ipv6Config as any).validate();
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

