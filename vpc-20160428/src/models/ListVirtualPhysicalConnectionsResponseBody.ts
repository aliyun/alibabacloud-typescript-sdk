// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirtualPhysicalConnectionsResponseBodyVirtualPhysicalConnectionsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and can contain digits, periods (.), underscores (_), and hyphens (-). The tag key cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and can contain digits, periods (.), underscores (_), and hyphens (-). The tag value cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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

export class ListVirtualPhysicalConnectionsResponseBodyVirtualPhysicalConnections extends $dara.Model {
  /**
   * @remarks
   * The access point ID of the Express Connect circuit.
   * 
   * @example
   * ap-cn-hangzhou-finance-yh-E
   */
  accessPointId?: string;
  /**
   * @remarks
   * The physical location of the access device for the Express Connect circuit.
   * 
   * @example
   * 余杭经济开发区XXX交叉口, 余杭XX机房, E***包间
   */
  adLocation?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the shared Express Connect circuits owner.
   * 
   * @example
   * 15346073170691****
   */
  aliUid?: string;
  /**
   * @remarks
   * The bandwidth of the Express Connect circuit. Unit: Mbit/s.
   * 
   * @example
   * 50
   */
  bandwidth?: number;
  /**
   * @remarks
   * The business status of the Express Connect circuit. Valid values:
   * 
   * - **Normal**: Enabled.
   * - **FinancialLocked**: Financial lock.
   * - **SecurityLocked**: Locked for security reasons.
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The billing method of the Express Connect circuit.
   * 
   * Valid values: **Prepaid**, which indicates subscription.
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The circuit code provided by the carrier for the Express Connect circuit.
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
   * 2021-06-08T12:20:55
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
   * 2021-10-08T10:44Z
   */
  enabledTime?: string;
  /**
   * @remarks
   * The expiration time of the shared Express Connect circuits.
   * 
   * The time is displayed in the ISO 8601 standard in UTC. Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 2021-11-08T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The expected bandwidth of the shared Express Connect circuits. The expected bandwidth takes effect only after payment is complete.
   * 
   * Unit: **M** indicates Mbit/s, and **G** indicates Gbit/s.
   * 
   * @example
   * 50M
   */
  expectSpec?: string;
  /**
   * @remarks
   * The carrier that provides the physical connection. Valid values:
   * 
   * - **CT**: China Telecom.
   * - **CU**: China Unicom.
   * - **CM**: China Mobile.
   * - **CO**: Other carriers in the Chinese mainland.
   * - **Equinix**: Equinix.
   * - **Other**: Other carriers outside the Chinese mainland.
   * 
   * @example
   * CU
   */
  lineOperator?: string;
  /**
   * @remarks
   * The status of the Letter of Authorization (LOA). Valid values:
   * 
   * - **Applying**: The LOA application is being processed.
   * - **Accept**: The LOA application is approved.
   * - **Available**: The LOA is available.
   * - **Rejected**: The LOA application is rejected.
   * - **Completing**: The Express Connect circuit is under construction.
   * - **Complete**: The Express Connect circuit construction is complete.
   * - **Deleted**: The LOA is deleted.
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
  /**
   * @remarks
   * The payer of the shared Express Connect circuits. Valid values:
   * 
   * - **PayByPhysicalConnectionOwner**: The owner of the Express Connect circuit associated with the shared Express Connect circuits is the payer.
   * - **PayByVirtualPhysicalConnectionOwner**: The owner of the shared Express Connect circuits is the payer.
   * 
   * @example
   * PayByPhysicalConnectionOwner
   */
  orderMode?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the Express Connect circuit belongs.
   * 
   * @example
   * 18311773240248****
   */
  parentPhysicalConnectionAliUid?: string;
  /**
   * @remarks
   * The instance ID of the Express Connect circuit.
   * 
   * @example
   * pc-bp1ciz7ekd2grn1as****
   */
  parentPhysicalConnectionId?: string;
  /**
   * @remarks
   * The geographic location of the on-premises data center.
   * 
   * @example
   * 浙江省杭州市XX区XX街道XX号
   */
  peerLocation?: string;
  /**
   * @remarks
   * The instance ID of the shared Express Connect circuits.
   * 
   * @example
   * pc-bp1mrgfbtmc9brre7****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The port number of the access device for the Express Connect circuit.
   * 
   * @example
   * 80
   */
  portNumber?: string;
  /**
   * @remarks
   * The port type of the Express Connect circuit. Valid values:
   * 
   * - **100Base-T**: 100M Ethernet port.
   * - **1000Base-T**: 1 GE electrical port.
   * - **1000Base-LX**: GE single-mode optical port (10 km).
   * - **10GBase-T**: 10 GE electrical port.
   * - **10GBase-LR**: 10 GE single-mode optical port (10 km).
   * - **40GBase-LR**: 40 GE single-mode optical port.
   * - **100GBase-LR**: 100 GE single-mode optical port.
   * 
   * @example
   * 10GBase-LR
   */
  portType?: string;
  /**
   * @remarks
   * The type of the Express Connect circuit. Valid values:
   * 
   * - **VirtualPhysicalConnection**: Shared Express Connect circuits.
   * - **PhysicalConnection**: Dedicated Express Connect circuit.
   * 
   * @example
   * VirtualPhysicalConnection
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the redundant Express Connect circuit.
   * 
   * @example
   * pc-119mfjzm****
   */
  redundantPhysicalConnectionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the shared Express Connect circuits belong.
   * 
   * @example
   * rg-acfm3wmsyui****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The bandwidth of the shared Express Connect circuits.
   * 
   * Unit: **M** indicates Mbit/s, and **G** indicates Gbit/s.
   * 
   * @example
   * 50M
   */
  spec?: string;
  /**
   * @remarks
   * The status of the Express Connect circuit. Valid values:
   * 
   * - **Initial**: The application is under review.
   * - **Approved**: The application is approved.
   * - **Allocating**: Resources are being allocated.
   * - **Allocated**: Under construction.
   * - **Confirmed**: Pending confirmation.
   * - **Enabled**: Enabled.
   * - **Rejected**: The application is rejected.
   * - **Canceled**: Canceled.
   * - **Allocation Failed**: Resource allocation failed.
   * - **Terminated**: Terminated.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: ListVirtualPhysicalConnectionsResponseBodyVirtualPhysicalConnectionsTags[];
  /**
   * @remarks
   * The type of the Express Connect circuit. Default value: **VPC**.
   * 
   * @example
   * VPC
   */
  type?: string;
  /**
   * @remarks
   * The business status of the shared Express Connect circuits. Valid values:
   * 
   * - **Confirmed**: The shared Express Connect circuits have been accepted.
   * - **UnConfirmed**: The shared Express Connect circuits have not been accepted.
   * - **Deleted**: The shared Express Connect circuits have been deleted.
   * 
   * @example
   * Confirmed
   */
  virtualPhysicalConnectionStatus?: string;
  /**
   * @remarks
   * The VLAN ID of the shared Express Connect circuits.
   * 
   * @example
   * 10
   */
  vlanId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      adLocation: 'AdLocation',
      aliUid: 'AliUid',
      bandwidth: 'Bandwidth',
      businessStatus: 'BusinessStatus',
      chargeType: 'ChargeType',
      circuitCode: 'CircuitCode',
      creationTime: 'CreationTime',
      description: 'Description',
      enabledTime: 'EnabledTime',
      endTime: 'EndTime',
      expectSpec: 'ExpectSpec',
      lineOperator: 'LineOperator',
      loaStatus: 'LoaStatus',
      name: 'Name',
      orderMode: 'OrderMode',
      parentPhysicalConnectionAliUid: 'ParentPhysicalConnectionAliUid',
      parentPhysicalConnectionId: 'ParentPhysicalConnectionId',
      peerLocation: 'PeerLocation',
      physicalConnectionId: 'PhysicalConnectionId',
      portNumber: 'PortNumber',
      portType: 'PortType',
      productType: 'ProductType',
      redundantPhysicalConnectionId: 'RedundantPhysicalConnectionId',
      resourceGroupId: 'ResourceGroupId',
      spec: 'Spec',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
      virtualPhysicalConnectionStatus: 'VirtualPhysicalConnectionStatus',
      vlanId: 'VlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      adLocation: 'string',
      aliUid: 'string',
      bandwidth: 'number',
      businessStatus: 'string',
      chargeType: 'string',
      circuitCode: 'string',
      creationTime: 'string',
      description: 'string',
      enabledTime: 'string',
      endTime: 'string',
      expectSpec: 'string',
      lineOperator: 'string',
      loaStatus: 'string',
      name: 'string',
      orderMode: 'string',
      parentPhysicalConnectionAliUid: 'string',
      parentPhysicalConnectionId: 'string',
      peerLocation: 'string',
      physicalConnectionId: 'string',
      portNumber: 'string',
      portType: 'string',
      productType: 'string',
      redundantPhysicalConnectionId: 'string',
      resourceGroupId: 'string',
      spec: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListVirtualPhysicalConnectionsResponseBodyVirtualPhysicalConnectionsTags },
      type: 'string',
      virtualPhysicalConnectionStatus: 'string',
      vlanId: 'string',
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

export class ListVirtualPhysicalConnectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned in the current query.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * Indicates whether a next query token is available. Valid values:
   * - If **NextToken** is empty, no next query is available.
   * - If **NextToken** is returned, the value indicates the token for the next query.
   * 
   * @example
   * dd20****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2A55F69E-EE3D-5CBE-8805-734F7D5B46B9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of shared Express Connect circuits.
   */
  virtualPhysicalConnections?: ListVirtualPhysicalConnectionsResponseBodyVirtualPhysicalConnections[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      virtualPhysicalConnections: 'VirtualPhysicalConnections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      virtualPhysicalConnections: { 'type': 'array', 'itemType': ListVirtualPhysicalConnectionsResponseBodyVirtualPhysicalConnections },
    };
  }

  validate() {
    if(Array.isArray(this.virtualPhysicalConnections)) {
      $dara.Model.validateArray(this.virtualPhysicalConnections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

