// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNatGatewayAttributeResponseBodyAccessMode extends $dara.Model {
  /**
   * @remarks
   * Access mode values:
   * - **route**: Route mode.
   * - **tunnel**: Tunnel mode.
   * 
   * @example
   * route
   */
  modeValue?: string;
  /**
   * @remarks
   * Tunnel mode type:
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
   * Indicates whether automatic payment is enabled. If the **InstanceChargeType** parameter is set to **PrePaid**, one of the following values is returned:
   * 
   * *   **false**: disabled. After an order is generated, you must go to the Order Center to complete the payment.
   * *   **true**: enabled. Payments are automatically completed.
   * 
   * The return value of this parameter is empty if **InstanceChargeType** is set to **PostPaid**.
   * 
   * @example
   * false
   */
  autoPay?: string;
  /**
   * @remarks
   * The billing method of the NAT gateway. The value is set to **PostPaid**, which indicates the pay-as-you-go billing method.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the NAT gateway. Valid values:
   * 
   * *   **PayBySpec**: pay-by-specification
   * *   **PayByLcu**: pay-by-CU
   * 
   * @example
   * PayBySpec
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The specification of the Internet NAT gateway. If the **InternetChargeType** parameter is set to **PayBySpec**, one of the following values is returned:
   * 
   * *   **Small**: small
   * 
   * *   **Middle**: medium
   * 
   * *   **Large**: large
   * 
   *     The return value of this parameter is empty if **InternetChargeType** is set to **PayByLcu**.
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
   * *   **true**: yes
   * *   **false**: no
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
   * The ID of the EIP.
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
   * The association status of the EIP.
   * 
   * *   **idle**: The EIP is not specified in an SNAT entry or a DNAT entry.
   * *   **UsedBySnatTable**: The EIP is specified in an SNAT entry.
   * *   **UsedByForwardTable**: The EIP is specified in a DNAT entry.
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
   * Error message for session log write failure.
   * 
   * @example
   * LogStoreNotExist: logstore session_log_test does not exist
   */
  deliverLogsErrorMessage?: string;
  /**
   * @remarks
   * Session log write status. Values:
   * - **Success**: Success. 
   * - **Failure**: Failure.
   * 
   * @example
   * Failure
   */
  deliveryStatus?: string;
  /**
   * @remarks
   * Session log delivery destination type. Value: **sls**, Alibaba Cloud Log Service SLS.
   * 
   * @example
   * sls
   */
  logDeliveryType?: string;
  /**
   * @remarks
   * Destination address for session log writing
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
   * The ID of the elastic network interface (ENI).
   * 
   * @example
   * eni-bp1cmgtoaka8vfyg****
   */
  eniInstanceId?: string;
  /**
   * @remarks
   * The zone where the NAT gateway is deployed.
   * 
   * @example
   * cn-qingdao-b
   */
  izNo?: string;
  /**
   * @remarks
   * The maximum bandwidth. Unit: Mbit/s.
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
   * Access mode for reverse access to VPC NAT gateway.
   */
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
  /**
   * @remarks
   * Whether to enable session log, with values:
   * - **true**: Session logging is enabled. 
   * - **false**: Session logging is disabled.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * Session log configuration information.
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

