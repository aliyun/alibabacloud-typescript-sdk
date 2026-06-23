// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirtualPhysicalConnectionsResponseBodyVirtualPhysicalConnectionsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key, which cannot be an empty string. You can specify up to 20 tag keys.
   * 
   * The key can be up to 64 characters in length and can contain digits, periods (.), underscores (_), and hyphens (-). The key cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The value can be up to 128 characters in length. It can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
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
   * The ID of the access point.
   * 
   * @example
   * ap-cn-hangzhou-finance-yh-E
   */
  accessPointId?: string;
  /**
   * @remarks
   * The physical location of the access device for the physical connection.
   * 
   * @example
   * 余杭经济开发区XXX交叉口, 余杭XX机房, E***包间
   */
  adLocation?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the virtual physical connection.
   * 
   * @example
   * 15346073170691****
   */
  aliUid?: string;
  /**
   * @remarks
   * The bandwidth of the physical connection. Unit: Mbps.
   * 
   * @example
   * 50
   */
  bandwidth?: number;
  /**
   * @remarks
   * The business status of the physical connection. Valid values:
   * 
   * - **Normal**: The connection is running as expected.
   * 
   * - **FinancialLocked**: The connection is locked due to an overdue payment.
   * 
   * - **SecurityLocked**: The connection is locked for security reasons.
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The billing method of the physical connection.
   * 
   * The only valid value is **Prepaid**, which corresponds to the subscription billing method.
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The circuit code of the physical connection, which is provided by the carrier.
   * 
   * @example
   * longtel001
   */
  circuitCode?: string;
  /**
   * @remarks
   * The time the physical connection was created.
   * 
   * @example
   * 2021-06-08T12:20:55
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the physical connection.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The time the physical connection was enabled.
   * 
   * @example
   * 2021-10-08T10:44Z
   */
  enabledTime?: string;
  /**
   * @remarks
   * The expiration time of the virtual physical connection.
   * 
   * The time is in UTC and follows the `YYYY-MM-DDThh:mm:ssZ` format (ISO 8601).
   * 
   * @example
   * 2021-11-08T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The expected bandwidth for the virtual physical connection. This bandwidth is applied after the payment is completed.
   * 
   * **M** indicates Mbps, and **G** indicates Gbps.
   * 
   * @example
   * 50M
   */
  expectSpec?: string;
  /**
   * @remarks
   * The carrier that provides the physical connection. Valid values include:
   * 
   * - **CT**: China Telecom.
   * 
   * - **CU**: China Unicom.
   * 
   * - **CM**: China Mobile.
   * 
   * - **CO**: other Chinese carriers.
   * 
   * - **Equinix**: Equinix.
   * 
   * - **Other**: other carriers outside China.
   * 
   * @example
   * CU
   */
  lineOperator?: string;
  /**
   * @remarks
   * The status of the Letter of Authorization (LOA). Valid values:
   * 
   * - **Applying**: The LOA request is being processed.
   * 
   * - **Accept**: The LOA application is approved.
   * 
   * - **Available**: The LOA is generated and ready for use.
   * 
   * - **Rejected**: The LOA request is rejected.
   * 
   * - **Completing**: The physical connection is being provisioned.
   * 
   * - **Complete**: Provisioning is complete.
   * 
   * - **Deleted**: The LOA is deleted.
   * 
   * @example
   * Available
   */
  loaStatus?: string;
  /**
   * @remarks
   * The name of the physical connection.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * The billing method of the virtual physical connection. Valid values:
   * 
   * - **PayByPhysicalConnectionOwner**: The owner of the parent physical connection pays.
   * 
   * - **PayByVirtualPhysicalConnectionOwner**: The owner of the virtual physical connection pays.
   * 
   * @example
   * PayByPhysicalConnectionOwner
   */
  orderMode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the parent physical connection.
   * 
   * @example
   * 18311773240248****
   */
  parentPhysicalConnectionAliUid?: string;
  /**
   * @remarks
   * The ID of the parent physical connection.
   * 
   * @example
   * pc-bp1ciz7ekd2grn1as****
   */
  parentPhysicalConnectionId?: string;
  /**
   * @remarks
   * The location of the on-premises data center.
   * 
   * @example
   * 浙江省杭州市XX区XX街道XX号
   */
  peerLocation?: string;
  /**
   * @remarks
   * The ID of the virtual physical connection.
   * 
   * @example
   * pc-bp1mrgfbtmc9brre7****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The port number of the access device for the physical connection.
   * 
   * @example
   * 80
   */
  portNumber?: string;
  /**
   * @remarks
   * The port type of the physical connection access point. Valid values:
   * 
   * - **100Base-T**: 100 Mbps copper port.
   * 
   * - **1000Base-T**: 1 Gbps copper port.
   * 
   * - **1000Base-LX**: 1 Gbps single-mode optical port (10 km).
   * 
   * - **10GBase-T**: 10 Gbps copper port.
   * 
   * - **10GBase-LR**: 10 Gbps single-mode optical port (10 km).
   * 
   * - **40GBase-LR**: 40 Gbps single-mode optical port.
   * 
   * - **100GBase-LR**: 100 Gbps single-mode optical port.
   * 
   * @example
   * 10GBase-LR
   */
  portType?: string;
  /**
   * @remarks
   * The type of the physical connection. Valid values:
   * 
   * - **VirtualPhysicalConnection**: a virtual physical connection.
   * 
   * - **PhysicalConnection**: a dedicated physical connection.
   * 
   * @example
   * VirtualPhysicalConnection
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the redundant physical connection.
   * 
   * @example
   * pc-119mfjzm****
   */
  redundantPhysicalConnectionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the virtual physical connection belongs.
   * 
   * @example
   * rg-acfm3wmsyui****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The bandwidth of the virtual physical connection.
   * 
   * M indicates Mbps, and G indicates Gbps.
   * 
   * @example
   * 50M
   */
  spec?: string;
  /**
   * @remarks
   * The status of the physical connection. Valid values:
   * 
   * - **Initial**: The application is under review.
   * 
   * - **Approved**: The application is approved.
   * 
   * - **Allocating**: Resources are being allocated.
   * 
   * - **Allocated**: The connection is ready for provisioning.
   * 
   * - **Confirmed**: Awaiting user confirmation.
   * 
   * - **Enabled**: The connection is enabled.
   * 
   * - **Rejected**: The application is rejected.
   * 
   * - **Canceled**: The application is canceled.
   * 
   * - **Allocation Failed**: Resource allocation failed.
   * 
   * - **Terminated**: The connection is terminated.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * A list of tags.
   */
  tags?: ListVirtualPhysicalConnectionsResponseBodyVirtualPhysicalConnectionsTags[];
  /**
   * @remarks
   * The type of the physical connection. The default value is **VPC**.
   * 
   * @example
   * VPC
   */
  type?: string;
  /**
   * @remarks
   * The business status of the virtual physical connection. Valid values:
   * 
   * - **Confirmed**: The virtual physical connection has been accepted by the recipient.
   * 
   * - **UnConfirmed**: The virtual physical connection is awaiting acceptance.
   * 
   * - **Deleted**: The virtual physical connection is deleted.
   * 
   * @example
   * Confirmed
   */
  virtualPhysicalConnectionStatus?: string;
  /**
   * @remarks
   * The VLAN ID of the virtual physical connection.
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
   * The number of entries returned in this request.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * - If **NextToken** is not returned, no more results are available.
   * 
   * - If a value is returned for **NextToken**, use it in the next request to retrieve the subsequent page of results.
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
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * A list of virtual physical connections.
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

