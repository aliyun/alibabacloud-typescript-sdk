// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPhysicalConnectionAttributeRequest extends $dara.Model {
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
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * efefe566754h
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the Express Connect circuit.  
   * 
   * The description must be 2 to 256 characters in length and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`.
   * 
   * @example
   * Description of the Express Connect circuit
   */
  description?: string;
  downDelayTime?: number;
  /**
   * @remarks
   * The carrier that provides the access to the physical connection. Valid values:
   * 
   * - **CT**: China Telecom
   * - **CU**: China Unicom
   * - **CM**: China Mobile
   * - **CO**: Other carriers in the Chinese mainland
   * - **Equinix**: Equinix
   * - **Other**: Other carriers outside the Chinese mainland
   * 
   * @example
   * CT
   */
  lineOperator?: string;
  /**
   * @remarks
   * The name of the Express Connect circuit.  
   * 
   * The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `http://` or `https://`.
   * 
   * @example
   * Name of the Express Connect circuit
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The geographical location of the on-premises data center.
   * 
   * @example
   * No. XX, XX Road, XX District, Hangzhou City, Zhejiang Province
   */
  peerLocation?: string;
  /**
   * @remarks
   * The ID of the Express Connect circuit.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-119mfjzm******
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The port type of the Express Connect circuit access point. Valid values:
   * 
   * - **100Base-T**: 100M Ethernet port.
   * - **1000Base-T (default)**: 1 GE electrical port.
   * - **1000Base-LX**: GE single-mode optical port (10 km).
   * - **10GBase-T**: 10 GE electrical port.
   * - **10GBase-LR**: 10 GE single-mode optical port (10 km).
   * - **40GBase-LR**: 40 GE single-mode optical port.
   * - **100GBase-LR**: 100 GE single-mode optical port.
   * 
   * > To create 40GBase-LR or 100GBase-LR ports, check the actual port availability on the backend. Contact your account manager for details.
   * 
   * @example
   * 1000Base-LX
   */
  portType?: string;
  /**
   * @remarks
   * The ID of the redundant Express Connect circuit. The redundant circuit must be in the **Allocated**, **Confirmed**, or **Enabled** state.
   * 
   * @example
   * pc-119mfjzm7
   */
  redundantPhysicalConnectionId?: string;
  /**
   * @remarks
   * The region ID of the Express Connect circuit.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The bandwidth of the Express Connect circuit access interface. Unit: Mbit/s. Valid values: 2 to 10240.
   * 
   * @example
   * 5
   */
  bandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      circuitCode: 'CircuitCode',
      clientToken: 'ClientToken',
      description: 'Description',
      downDelayTime: 'DownDelayTime',
      lineOperator: 'LineOperator',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      peerLocation: 'PeerLocation',
      physicalConnectionId: 'PhysicalConnectionId',
      portType: 'PortType',
      redundantPhysicalConnectionId: 'RedundantPhysicalConnectionId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      bandwidth: 'bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      circuitCode: 'string',
      clientToken: 'string',
      description: 'string',
      downDelayTime: 'number',
      lineOperator: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      peerLocation: 'string',
      physicalConnectionId: 'string',
      portType: 'string',
      redundantPhysicalConnectionId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      bandwidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

