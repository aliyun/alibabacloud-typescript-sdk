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
   * The tunnel type. This parameter is returned only when `ModeValue` is set to `tunnel`. Valid value:
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
   * Indicates whether auto-payment is enabled. This parameter is returned only if **InstanceChargeType** is set to **PrePaid**. Valid values:
   * 
   * - **false**: Auto-payment is disabled. After an order is generated, the payment must be completed in the Orders console.
   * 
   * - **true**: Auto-payment is enabled. Payments are automatically completed.
   * 
   * If **InstanceChargeType** is set to **PostPaid**, an empty string is returned.
   * 
   * @example
   * false
   */
  autoPay?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * The billing method of the NAT Gateway instance. Valid values:
   * 
   * 
   * 
   * <props="china">
   * 
   * - **PostPaid**: pay-as-you-go.
   * 
   * 
   * 
   * <props="china">
   * 
   * - **PrePaid**: subscription.
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * The billing method of the NAT Gateway instance. The value is **PostPaid** (pay-as-you-go).
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The billing method of the NAT Gateway instance. Valid values:
   * 
   * - **PayBySpec**: billed by specification.
   * 
   * - **PayByLcu**: billed by usage.
   * 
   * @example
   * PayBySpec
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The specification of the public NAT gateway instance. This parameter is returned only if **InternetChargeType** is set to **PayBySpec**. Valid values:
   * 
   * - **Small**
   * 
   * - **Middle**
   * 
   * - **Large**
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
   * 
   * - **true**
   * 
   * - **false**
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
   * The ID of the EIP instance.
   * 
   * @example
   * eip-bp13e9i2qst4g6jzi****
   */
  allocationId?: string;
  /**
   * @remarks
   * The EIP address.
   * 
   * @example
   * 116.33.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The usage status of the EIP.
   * 
   * - **Idle**: Not associated with an SNAT entry or a DNAT entry.
   * 
   * - **UsedBySnat**: Associated with an SNAT entry.
   * 
   * - **UsedByForward**: Associated with a DNAT entry.
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
   * The error message that is returned when log delivery fails.
   * 
   * @example
   * LogStoreNotExist: logstore session_log_test does not exist
   */
  deliverLogsErrorMessage?: string;
  /**
   * @remarks
   * The status of log delivery. Valid values:
   * 
   * - **Success**: The logs are delivered successfully.
   * 
   * - **Failure**: The logs failed to be delivered.
   * 
   * @example
   * Failure
   */
  deliveryStatus?: string;
  /**
   * @remarks
   * The destination to which session logs are delivered. The value is always
   * **sls**, which indicates Log Service.
   * 
   * @example
   * sls
   */
  logDeliveryType?: string;
  /**
   * @remarks
   * The Log Service Logstore to which session logs are delivered.
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
   * The ID of the elastic network interface instance.
   * 
   * @example
   * eni-bp1cmgtoaka8vfyg****
   */
  eniInstanceId?: string;
  /**
   * @remarks
   * The ID of the availability zone to which the NAT Gateway instance belongs.
   * 
   * @example
   * cn-qingdao-b
   */
  izNo?: string;
  /**
   * @remarks
   * The maximum bandwidth, in Mbps.
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
   * The ID of the vSwitch to which the NAT Gateway instance belongs.
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
   * The access mode of the VPC NAT Gateway.
   */
  accessMode?: GetNatGatewayAttributeResponseBodyAccessMode;
  availabilityMode?: string;
  /**
   * @remarks
   * The billing configuration.
   */
  billingConfig?: GetNatGatewayAttributeResponseBodyBillingConfig;
  /**
   * @remarks
   * The business status of the NAT Gateway instance. Valid values:
   * 
   * - **Normal**: The instance is running normally.
   * 
   * - **FinancialLocked**: The instance is suspended due to an overdue payment.
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The creation time of the NAT Gateway instance. The time is in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2021-12-08T12:20:20Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Information about the deletion protection feature.
   */
  deletionProtectionInfo?: GetNatGatewayAttributeResponseBodyDeletionProtectionInfo;
  /**
   * @remarks
   * The description of the NAT Gateway instance.
   * 
   * @example
   * NAT
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the gateway traffic monitoring feature is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  ecsMetricEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether session logging is enabled. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  enableSessionLog?: boolean;
  /**
   * @remarks
   * The expiration time of the NAT Gateway instance.
   * 
   * @example
   * 2021-12-26T12:20:20Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * Information about the DNAT table.
   */
  forwardTable?: GetNatGatewayAttributeResponseBodyForwardTable;
  /**
   * @remarks
   * Information about the FULLNAT table.
   */
  fullNatTable?: GetNatGatewayAttributeResponseBodyFullNatTable;
  /**
   * @remarks
   * The Elastic IP Addresses (EIPs) that are associated with the public NAT gateway.
   */
  ipList?: GetNatGatewayAttributeResponseBodyIpList[];
  /**
   * @remarks
   * The session log delivery settings.
   */
  logDelivery?: GetNatGatewayAttributeResponseBodyLogDelivery;
  /**
   * @remarks
   * The name of the NAT Gateway instance.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The ID of the NAT Gateway instance.
   * 
   * @example
   * ngw-bp1047e2d4z7kf2ki****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The type of the public NAT gateway. The value **Enhanced** indicates an Enhanced NAT Gateway.
   * 
   * @example
   * Enhanced
   */
  natType?: string;
  /**
   * @remarks
   * The type of the NAT Gateway. Valid values:
   * 
   * - **internet**: A public NAT gateway.
   * 
   * - **intranet**: A VPC NAT Gateway.
   * 
   * @example
   * internet
   */
  networkType?: string;
  /**
   * @remarks
   * The private network information about the NAT Gateway instance.
   */
  privateInfo?: GetNatGatewayAttributeResponseBodyPrivateInfo;
  /**
   * @remarks
   * Indicates whether PrivateLink is supported. Valid values:
   * 
   * - **true**: PrivateLink is supported.
   * 
   * - **false**: PrivateLink is not supported.
   * 
   * @example
   * true
   */
  privateLinkEnabled?: boolean;
  /**
   * @remarks
   * The mode of the PrivateLink service. Valid values:
   * 
   * - **FullNat**: FULLNAT mode.
   * 
   * - **Geneve**: Geneve mode.
   * 
   * @example
   * FullNat
   */
  privateLinkMode?: string;
  /**
   * @remarks
   * The region ID of the NAT Gateway instance.
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
   * The ID of the resource group.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Information about the SNAT table.
   */
  snatTable?: GetNatGatewayAttributeResponseBodySnatTable;
  /**
   * @remarks
   * The status of the NAT Gateway instance. Valid values:
   * 
   * - **Creating**: Being created. This is an asynchronous operation.
   * 
   * - **Available**: Available. This is the steady state of the NAT Gateway after creation.
   * 
   * - **Modifying**: Being modified. This is an asynchronous operation.
   * 
   * - **Deleting**: Being deleted. This is an asynchronous operation.
   * 
   * - **Converting**: Being converted to an Enhanced NAT Gateway. This is an asynchronous operation.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the VPC to which the NAT Gateway instance belongs.
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

