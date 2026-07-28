// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNatGatewayAttributeResponseBodyAccessMode extends $dara.Model {
  /**
   * @remarks
   * The access mode. Valid values:
   * 
   * - **route**: route mode.
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
   * - **geneve**: Geneve type.
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
   * Indicates whether automatic payment is enabled. When the value of **InstanceChargeType** is **PrePaid**, the following values are returned:
   * 
   * - **false**: Automatic payment is not enabled. After an order is generated, go to the Order Center to complete the payment.
   * 
   * - **true**: Automatic payment is enabled. The order is automatically paid.
   * 
   * When the value of **InstanceChargeType** is **PostPaid**, an empty value is returned.
   * 
   * @example
   * false
   */
  autoPay?: string;
  /**
   * @remarks
   * <props="china">The billing method of the NAT gateway instance. Valid values:
   * 
   * <props="china">- **PostPaid**: pay-as-you-go.
   * 
   * <props="china">- **PrePaid**: subscription.
   * 
   * <props="intl">The billing method of the NAT gateway instance. Valid values: **PostPaid** (pay-as-you-go).
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The billing type of the NAT gateway instance. Valid values:
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
   * The specification of the Internet NAT gateway instance. When **InternetChargeType** is **PayBySpec**, the following values are returned:
   * - **Small**: small.
   * - **Middle**: medium.
   * - **Large**: large.
   * When **InternetChargeType** is **PayByLcu**, an empty value is returned.
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
   * Indicates whether deletion protection is enabled.
   * - **true**: Deletion protection is enabled.
   * - **false**: Deletion protection is not enabled.
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
   * The association status of the EIP bound to the Internet NAT gateway instance.
   * 
   * - **idle**: The EIP is not associated with any SNAT entry or DNAT entry.
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

export class GetNatGatewayAttributeResponseBodyLogDelivery extends $dara.Model {
  /**
   * @remarks
   * The error message for session log writing failure.
   * 
   * @example
   * LogStoreNotExist: logstore session_log_test does not exist
   */
  deliverLogsErrorMessage?: string;
  /**
   * @remarks
   * The status of session log writing. Valid values:
   * 
   * - **Succsess**: Succeeded.
   * - **Failure**: Failed.
   * 
   * @example
   * Failure
   */
  deliveryStatus?: string;
  /**
   * @remarks
   * The destination type for session log delivery. Valid values:
   * **sls**: Simple Log Service (SLS).
   * 
   * @example
   * sls
   */
  logDeliveryType?: string;
  /**
   * @remarks
   * The destination address to which session logs are written.
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
   * The instance ID of the elastic network interfaces (ENIs) network interface controller (NIC).
   * 
   * @example
   * eni-bp1cmgtoaka8vfyg****
   */
  eniInstanceId?: string;
  /**
   * @remarks
   * The zone to which the NAT gateway instance belongs.
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
   * The ID of the vSwitch to which the NAT gateway instance belongs.
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
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniInstanceId: 'string',
      izNo: 'string',
      maxBandwidth: 'number',
      privateIpAddress: 'string',
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
  availabilityMode?: string;
  /**
   * @remarks
   * The billing configuration information.
   */
  billingConfig?: GetNatGatewayAttributeResponseBodyBillingConfig;
  /**
   * @remarks
   * The business status of the NAT gateway. Valid values:
   * 
   * - **Normal**: Normal.
   * - **FinancialLocked**: Locked due to overdue payment.
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The time when the NAT gateway was created. The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
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
   * The description of the NAT gateway instance.
   * 
   * @example
   * NAT
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the gateway traffic monitoring feature is enabled. Valid values:
   * - **true**: The gateway traffic monitoring feature is enabled.
   * - **false**: The gateway traffic monitoring feature is not enabled.
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
   * The expiration time of the NAT gateway instance.
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
   * The list of elastic IP addresses (EIPs) associated with the Internet NAT gateway.
   */
  ipList?: GetNatGatewayAttributeResponseBodyIpList[];
  /**
   * @remarks
   * The session log configuration information.
   */
  logDelivery?: GetNatGatewayAttributeResponseBodyLogDelivery;
  /**
   * @remarks
   * The name of the NAT gateway instance.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The ID of the NAT gateway instance.
   * 
   * @example
   * ngw-bp1047e2d4z7kf2ki****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The type of the Internet NAT gateway. The value is **Enhanced**, which indicates an enhanced NAT gateway.
   * 
   * @example
   * Enhanced
   */
  natType?: string;
  /**
   * @remarks
   * The type of the NAT gateway. Valid values:
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
   * The private network information of the NAT gateway instance.
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
   * The PrivateLink service conversion mode. Valid values:
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
   * The region ID of the NAT gateway instance.
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
   * - **Creating**: The NAT gateway is being created. The creation of a NAT gateway is an asynchronous operation. The NAT gateway remains in the **Creating** state until the creation is complete.
   * - **Available**: The NAT gateway is available. This is a stable state after the NAT gateway is created.
   * - **Modifying**: The NAT gateway is being modified. The modification of a NAT gateway is an asynchronous operation. The NAT gateway remains in the **Modifying** state during the modification.
   * - **Deleting**: The NAT gateway is being deleted. The deletion of a NAT gateway is an asynchronous operation. The NAT gateway remains in the **Deleting** state during the deletion.
   * - **Converting**: The NAT gateway is being converted. The conversion from a standard NAT gateway to an enhanced NAT gateway is an asynchronous operation. The NAT gateway remains in the **Converting** state during the conversion.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the VPC to which the NAT gateway instance belongs.
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

