// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePhysicalConnectionRequestTag } from "./CreatePhysicalConnectionRequestTag";


export class CreatePhysicalConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The access point ID of the Express Connect circuit.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-cn-beijing-ft-A
   */
  accessPointId?: string;
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
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the Express Connect circuit.
   * 
   * The description must be 2 to 256 characters in length. The description must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The advanced features of the device.
   */
  deviceAdvancedCapacity?: string[];
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
   * This parameter is required.
   * 
   * @example
   * CT
   */
  lineOperator?: string;
  /**
   * @remarks
   * The name of the Express Connect circuit.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The geographical location of the data center.
   * 
   * @example
   * cn-hangzhou
   */
  peerLocation?: string;
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
   * >  To use ports 40GBase-LR and 100GBase-LR, you must first contact your account manager.
   * 
   * @example
   * 1000Base-T
   */
  portType?: string;
  /**
   * @remarks
   * The ID of the redundant Express Connect circuit. The redundant Express Connect circuit must be in the **Allocated**, **Confirmed**, or **Enabled** state.
   * 
   * @example
   * pc-119mfjzm****
   */
  redundantPhysicalConnectionId?: string;
  /**
   * @remarks
   * The region ID of the Express Connect circuit.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Express Connect circuit belongs.
   * 
   * @example
   * rg-acfmoiyermp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag list.
   */
  tag?: CreatePhysicalConnectionRequestTag[];
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
   * The maximum bandwidth of the hosted connection. Unit: Mbit/s.
   * 
   * Valid values: **50**, **100**, **200**, **300**, **400**, **500**, **1000**, **2000**, **4000**, **5000**, **8000**, and **10000**.
   * 
   * @example
   * 50
   */
  bandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      circuitCode: 'CircuitCode',
      clientToken: 'ClientToken',
      description: 'Description',
      deviceAdvancedCapacity: 'DeviceAdvancedCapacity',
      lineOperator: 'LineOperator',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      peerLocation: 'PeerLocation',
      portType: 'PortType',
      redundantPhysicalConnectionId: 'RedundantPhysicalConnectionId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      type: 'Type',
      bandwidth: 'bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      circuitCode: 'string',
      clientToken: 'string',
      description: 'string',
      deviceAdvancedCapacity: { 'type': 'array', 'itemType': 'string' },
      lineOperator: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      peerLocation: 'string',
      portType: 'string',
      redundantPhysicalConnectionId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreatePhysicalConnectionRequestTag },
      type: 'string',
      bandwidth: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deviceAdvancedCapacity)) {
      $dara.Model.validateArray(this.deviceAdvancedCapacity);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

