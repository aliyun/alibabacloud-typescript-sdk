// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionTypeTagsTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag N added to the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N added to the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionTypeTags extends $dara.Model {
  tags?: DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionTypeTagsTags[];
  static names(): { [key: string]: string } {
    return {
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionTypeTagsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionType extends $dara.Model {
  /**
   * @remarks
   * The ID of the Express Connect circuit.
   * 
   * @example
   * ap-cn-hangzhou-finance-yh-E
   */
  accessPointId?: string;
  /**
   * @remarks
   * The type of the access point.
   * 
   * @example
   * VPC
   */
  accessPointType?: string;
  /**
   * @remarks
   * The information about the data center and rack.
   * 
   * @example
   * Position 30, Server Rack JXX, Booth ET135ET135-XX-2, Room XX, Building 10, XX Road, XX Town, XX District, Hangzhou, Zhejiang Province
   */
  adDetailLocation?: string;
  /**
   * @remarks
   * The location of the access point.
   * 
   * @example
   * Number 10, XX Road, XX Town, XX District, Hangzhou City, Zhejiang Province.
   */
  adLocation?: string;
  /**
   * @remarks
   * The maximum bandwidth of the Express Connect circuit.
   * 
   * Unit: Mbit/s.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The status of the Express Connect circuit. Valid values:
   * 
   * *   **Normal**: enabled
   * *   **FinancialLocked**: locked due to overdue payments
   * *   **SecurityLocked**: locked for security reasons
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The billing method of the Express Connect circuit.
   * 
   * If **Prepaid** is returned, it indicates that the Express Connect circuit is billed on a subscription basis.
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The circuit code of the Express Connect circuit. The circuit code is provided by the connectivity provider.
   * 
   * @example
   * longtel001
   */
  circuitCode?: string;
  /**
   * @remarks
   * The time when the Express Connect circuit was created.
   * 
   * @example
   * 2021-08-24T07:30:58Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the Express Connect circuit.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The time when the Express Connect circuit was enabled.
   * 
   * @example
   * 2021-08-24T07:33:18Z
   */
  enabledTime?: string;
  /**
   * @remarks
   * The time when the Express Connect circuit expires.
   * 
   * @example
   * 2022-04-24T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The estimated maximum bandwidth of the shared Express Connect circuit. The estimated bandwidth takes effect after you complete the payment.
   * 
   * Unit: **M** (Mbit/s) and **G** (Gbit/s).
   * 
   * @example
   * 50M
   */
  expectSpec?: string;
  /**
   * @remarks
   * Indicates whether the data about pending orders is returned. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  hasReservationData?: string;
  /**
   * @remarks
   * The connectivity provider of the Express Connect circuit. Valid values:
   * 
   * *   **CT**: China Telecom.
   * *   **CU**: China Unicom.
   * *   **CM**: China Mobile.
   * *   **CO**: other connectivity providers in the Chinese mainland.
   * *   **Equinix**: Equinix.
   * *   **Other**: other connectivity providers outside the Chinese mainland.
   * 
   * @example
   * CT
   */
  lineOperator?: string;
  /**
   * @remarks
   * The status of the letter of authorization (LOA). Valid values:
   * 
   * *   **Applying**: The LOA is pending for approval.
   * *   **Accept**: The LOA is approved.
   * *   **Available**: The LOA is available.
   * *   **Rejected**: The LOA is rejected.
   * *   **Completing**: The Express Connect circuit is under construction.
   * *   **Complete**: The Express Connect circuit is installed.
   * *   **Deleted**: The LOA is deleted.
   * 
   * @example
   * Available
   */
  loaStatus?: string;
  /**
   * @remarks
   * The name of the Express Connect circuit.
   * 
   * @example
   * nametest
   */
  name?: string;
  opticalModuleModel?: string;
  /**
   * @remarks
   * The payer for the hosted connection. Valid values:
   * 
   * *   **PayByPhysicalConnectionOwner**: The partner pays for the shared Express Connect circuit.
   * *   **PayByVirtualPhysicalConnectionOwner**: The tenant pays for the shared Express Connect circuit.
   * 
   * @example
   * PayByPhysicalConnectionOwner
   */
  orderMode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the parent Express Connect circuit belongs.
   * 
   * @example
   * 283117732402483989
   */
  parentPhysicalConnectionAliUid?: number;
  /**
   * @remarks
   * The ID of the parent Express Connect circuit.
   * 
   * @example
   * pc-bp1ciz7ekd2grn1as****
   */
  parentPhysicalConnectionId?: string;
  /**
   * @remarks
   * The geographical location of the data center.
   * 
   * @example
   * XX Number, XX Road, XX Town, XX District, Hangzhou City, Zhejiang Province.
   */
  peerLocation?: string;
  /**
   * @remarks
   * The ID of the Express Connect circuit.
   * 
   * @example
   * pc-bp1ciz7ekd2grn1as****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The ID of the port on the access device.
   * 
   * @example
   * 1/1/1
   */
  portNumber?: string;
  /**
   * @remarks
   * The port type of the Express Connect circuit. Valid values:
   * 
   * *   **100Base-T**: 100 Mbit/s copper Ethernet port
   * *   **1000Base-T**: 1,000 Mbit/s copper Ethernet port
   * *   **1000Base-LX**: 1,000 Mbit/s single-mode optical port (10 km)
   * *   **10GBase-T**: 10,000 Mbit/s copper Ethernet port
   * *   **10GBase-LR**: 10,000 Mbit/s single-mode optical port (10 km)
   * *   **40GBase-LR**: 40,000 Mbit/s single-mode optical port
   * *   **100GBase-LR**: 100,000 Mbit/s single-mode optical port
   * 
   * > Whether 40GBase-LR and 100GBase-LR ports can be created depends on resource supplies. For more information, contact your account manager.
   * 
   * @example
   * 10GBase-LR
   */
  portType?: string;
  /**
   * @remarks
   * The type of the Express Connect circuit. Valid values:
   * 
   * *   **VirtualPhysicalConnection**: shared Express Connect circuit
   * *   **PhysicalConnection**: dedicated Express Connect circuit
   * 
   * @example
   * PhysicalConnection
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the QoS policy.
   * 
   * @example
   * qos-bp10s3szn8rgnxuw7****
   */
  qosId?: string;
  /**
   * @remarks
   * The ID of the standby Express Connect circuit.
   * 
   * @example
   * pc-119mfjzm****
   */
  redundantPhysicalConnectionId?: string;
  /**
   * @remarks
   * The time when the pending order takes effect.
   * 
   * @example
   * 2022-02-25T11:01:04Z
   */
  reservationActiveTime?: string;
  /**
   * @remarks
   * The billing method of the pending order.
   * 
   * If **PayByBandwidth** is returned, it indicates that the Express Connect circuit is billed on a pay-by-bandwidth basis.
   * 
   * @example
   * PayByBandwidth
   */
  reservationInternetChargeType?: string;
  /**
   * @remarks
   * The type of the pending order.
   * 
   * If the value is **RENEW**, it indicates that the order is placed for service renewal.
   * 
   * @example
   * RENEW
   */
  reservationOrderType?: string;
  /**
   * @remarks
   * The resource group ID to which the instance belongs.
   * 
   * @example
   * rg-acfmwu3k52prgdi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The specification of the Express Connect circuit.
   * 
   * Unit: **G** (Gbit/s).
   * 
   * @example
   * 10G
   */
  spec?: string;
  /**
   * @remarks
   * The status of the Express Connect circuit. Valid values:
   * 
   * *   **Initial**
   * *   **Approved**
   * *   **Allocating**
   * *   **Allocated**
   * *   **Confirmed**
   * *   **Enabled**
   * *   **Rejected**
   * *   **Canceled**
   * *   **Allocation Failed**
   * *   **Terminating**
   * *   **Terminated**
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The tags that are added to the cluster.
   */
  tags?: DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionTypeTags;
  /**
   * @remarks
   * The type of resource to which the Express Connect circuit is connected. Only **VPC** may be returned.
   * 
   * @example
   * VPC
   */
  type?: string;
  /**
   * @remarks
   * The number of Express Connect circuits that are established.
   * 
   * @example
   * 0
   */
  virtualPhysicalConnectionCount?: number;
  /**
   * @remarks
   * The VLAN ID of the shared Express Connect circuit.
   * 
   * @example
   * 10
   */
  vlanId?: string;
  /**
   * @remarks
   * The status of the shared Express Connect circuit. Valid values:
   * 
   * *   **Confirmed**
   * *   **UnConfirmed**
   * *   **Deleted**
   * 
   * @example
   * Confirmed
   */
  vpconnStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      accessPointType: 'AccessPointType',
      adDetailLocation: 'AdDetailLocation',
      adLocation: 'AdLocation',
      bandwidth: 'Bandwidth',
      businessStatus: 'BusinessStatus',
      chargeType: 'ChargeType',
      circuitCode: 'CircuitCode',
      creationTime: 'CreationTime',
      description: 'Description',
      enabledTime: 'EnabledTime',
      endTime: 'EndTime',
      expectSpec: 'ExpectSpec',
      hasReservationData: 'HasReservationData',
      lineOperator: 'LineOperator',
      loaStatus: 'LoaStatus',
      name: 'Name',
      opticalModuleModel: 'OpticalModuleModel',
      orderMode: 'OrderMode',
      parentPhysicalConnectionAliUid: 'ParentPhysicalConnectionAliUid',
      parentPhysicalConnectionId: 'ParentPhysicalConnectionId',
      peerLocation: 'PeerLocation',
      physicalConnectionId: 'PhysicalConnectionId',
      portNumber: 'PortNumber',
      portType: 'PortType',
      productType: 'ProductType',
      qosId: 'QosId',
      redundantPhysicalConnectionId: 'RedundantPhysicalConnectionId',
      reservationActiveTime: 'ReservationActiveTime',
      reservationInternetChargeType: 'ReservationInternetChargeType',
      reservationOrderType: 'ReservationOrderType',
      resourceGroupId: 'ResourceGroupId',
      spec: 'Spec',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
      virtualPhysicalConnectionCount: 'VirtualPhysicalConnectionCount',
      vlanId: 'VlanId',
      vpconnStatus: 'VpconnStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      accessPointType: 'string',
      adDetailLocation: 'string',
      adLocation: 'string',
      bandwidth: 'number',
      businessStatus: 'string',
      chargeType: 'string',
      circuitCode: 'string',
      creationTime: 'string',
      description: 'string',
      enabledTime: 'string',
      endTime: 'string',
      expectSpec: 'string',
      hasReservationData: 'string',
      lineOperator: 'string',
      loaStatus: 'string',
      name: 'string',
      opticalModuleModel: 'string',
      orderMode: 'string',
      parentPhysicalConnectionAliUid: 'number',
      parentPhysicalConnectionId: 'string',
      peerLocation: 'string',
      physicalConnectionId: 'string',
      portNumber: 'string',
      portType: 'string',
      productType: 'string',
      qosId: 'string',
      redundantPhysicalConnectionId: 'string',
      reservationActiveTime: 'string',
      reservationInternetChargeType: 'string',
      reservationOrderType: 'string',
      resourceGroupId: 'string',
      spec: 'string',
      status: 'string',
      tags: DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionTypeTags,
      type: 'string',
      virtualPhysicalConnectionCount: 'number',
      vlanId: 'string',
      vpconnStatus: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionsResponseBodyPhysicalConnectionSet extends $dara.Model {
  physicalConnectionType?: DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionType[];
  static names(): { [key: string]: string } {
    return {
      physicalConnectionType: 'PhysicalConnectionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalConnectionType: { 'type': 'array', 'itemType': DescribePhysicalConnectionsResponseBodyPhysicalConnectionSetPhysicalConnectionType },
    };
  }

  validate() {
    if(Array.isArray(this.physicalConnectionType)) {
      $dara.Model.validateArray(this.physicalConnectionType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**. Valid values: **1** to **50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of Express Connect circuits.
   */
  physicalConnectionSet?: DescribePhysicalConnectionsResponseBodyPhysicalConnectionSet;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0E6D0EC4-7C91-53E2-9F65-64BF713114B0
   */
  requestId?: string;
  /**
   * @remarks
   * The number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      physicalConnectionSet: 'PhysicalConnectionSet',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      physicalConnectionSet: DescribePhysicalConnectionsResponseBodyPhysicalConnectionSet,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.physicalConnectionSet && typeof (this.physicalConnectionSet as any).validate === 'function') {
      (this.physicalConnectionSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

