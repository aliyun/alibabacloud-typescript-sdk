// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVirtualPhysicalConnectionsResponseBodyVirtualPhysicalConnectionsTags } from "./ListVirtualPhysicalConnectionsResponseBodyVirtualPhysicalConnectionsTags";


export class ListVirtualPhysicalConnectionsResponseBodyVirtualPhysicalConnections extends $dara.Model {
  /**
   * @remarks
   * The ID of the access point that is associated with the Express Connect circuit.
   * 
   * @example
   * ap-cn-hangzhou-finance-yh-E
   */
  accessPointId?: string;
  /**
   * @remarks
   * The geographical location of the access device.
   * 
   * @example
   * Yuhang Economic Development Zone XXX Intersection, Yuhang XX Machine Room, E*** Suite.
   */
  adLocation?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the hosted connection owner.
   * 
   * @example
   * 253460731706911258
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
   * The status of the Express Connect circuit. Valid values:
   * 
   * *   **Normal**
   * *   **FinancialLocked**
   * *   **SecurityLocked**
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
   * The time when the Express Connect circuit is enabled.
   * 
   * @example
   * 2021-10-08T10:44Z
   */
  enabledTime?: string;
  /**
   * @remarks
   * The expiration date of the hosted connection.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-08T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The estimated maximum bandwidth of the shared Express Connect circuit. The estimated bandwidth takes effect after you complete the payment.
   * 
   * **M** indicates Mbit/s and **G** indicates Gbit/s.
   * 
   * @example
   * 50M
   */
  expectSpec?: string;
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
   * CU
   */
  lineOperator?: string;
  /**
   * @remarks
   * The status of the letter of authorization (LOA). Valid values:
   * 
   * *   **Applying**
   * *   **Accept**
   * *   **Available**
   * *   **Rejected**
   * *   **Completing**
   * *   **Complete**
   * *   **Deleted**
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
   * The payer for the shared Express Connect circuit. Valid values:
   * 
   * *   **PayByPhysicalConnectionOwner**: the owner of the shared Express Connect circuit
   * *   **PayByVirtualPhysicalConnectionOwner**: the owner of the hosted connection
   * 
   * @example
   * PayByPhysicalConnectionOwner
   */
  orderMode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the Express Connect circuit belongs.
   * 
   * @example
   * 283117732402483989
   */
  parentPhysicalConnectionAliUid?: string;
  /**
   * @remarks
   * The ID of the Express Connect circuit.
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
   * The ID of the hosted connection.
   * 
   * @example
   * pc-bp1mrgfbtmc9brre7****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The ID of the port on the access device.
   * 
   * @example
   * 80
   */
  portNumber?: string;
  /**
   * @remarks
   * The port type. Valid values:
   * 
   * *   **100Base-T**: 100 Mbit/s copper Ethernet port
   * *   **1000Base-T**: 1,000 Mbit/s copper Ethernet port
   * *   **1000Base-LX**: 1,000 Mbit/s single-mode optical port (10 km)
   * *   **10GBase-T**: 10,000 Mbit/s copper Ethernet port
   * *   **10GBase-LR**: 10,000 Mbit/s single-mode optical port (10 km)
   * *   **40GBase-LR**: 40,000 Mbit/s single-mode optical port
   * *   **100GBase-LR**: 100,000 Mbit/s single-mode optical port
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
   * The ID of the resource group to which the hosted connection belongs.
   * 
   * @example
   * rg-acfm3wmsyuimpma
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The bandwidth value of the hosted connection.
   * 
   * **M** indicates Mbit/s and **G** indicates Gbit/s.
   * 
   * @example
   * 50M
   */
  spec?: string;
  /**
   * @remarks
   * The status of the Express Connect circuit. Valid values:
   * 
   * *   **Initial**: The application is under review.
   * *   **Approved**: The application is approved.
   * *   **Allocating**: The system is allocating resources.
   * *   **Allocated**: The Express Connect circuit is under construction.
   * *   **Confirmed**: The Express Connect circuit is pending for user confirmation.
   * *   **Enabled**: The Express Connect circuit is enabled.
   * *   **Rejected**: The application is rejected.
   * *   **Canceled**: The application is canceled.
   * *   **Allocation Failed**: The system failed to allocate resources.
   * *   **Terminated**: The Express Connect circuit is disabled.
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
   * The type of Express Connect circuit. Default value: **VPC**.
   * 
   * @example
   * VPC
   */
  type?: string;
  /**
   * @remarks
   * The status of the hosted connection. Valid values:
   * 
   * *   **Confirmed**
   * *   **UnConfirmed**
   * *   **Deleted**
   * 
   * @example
   * Confirmed
   */
  virtualPhysicalConnectionStatus?: string;
  /**
   * @remarks
   * The VLAN ID of the hosted connection.
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

