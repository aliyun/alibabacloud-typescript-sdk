// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePhysicalConnectionSetupOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The access point ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-cn-beijing-ft-A
   */
  accessPointId?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **false** (default): Automatic payment is disabled.
   * - **true**: Automatic payment is enabled.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a parameter value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may vary for each API request.
   * 
   * @example
   * 318BB676-0A2B-43A0-9AD8-F1D34E93750F
   */
  clientToken?: string;
  /**
   * @remarks
   * The carrier that provides the physical connection. Valid values:
   * 
   * - **CT**: China Telecom
   * 
   * - **CU**: China Unicom
   * 
   * - **CM**: China Mobile
   * 
   * - **CO**: Other carriers in the Chinese mainland
   * 
   * - **Equinix**: Equinix
   * 
   * - **Other**: Other carriers outside the Chinese mainland
   * 
   * This parameter is required.
   * 
   * @example
   * CT
   */
  lineOperator?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The port type of the Express Connect circuit. Valid values:
   * 
   * - **100Base-T**: 100M Ethernet port.
   * 
   * - **1000Base-T** (default): 1 GE electrical port.
   * 
   * - **1000Base-LX**: GE single-mode optical port (10 km).
   * 
   * - **10GBase-T**: 10 GE electrical port.
   * 
   * - **10GBase-LR**: 10 GE single-mode optical port (10 km).
   * 
   * - **40GBase-LR**: 40 GE single-mode optical port.
   * 
   * - **100GBase-LR**: 100 GE single-mode optical port.
   * 
   * The default value **1000Base-T** is available only at access points that support this port type. Before calling this operation, call ListBusinessAccessPoints to query the **SupportPortTypes** of the target access point. For optical ports, also verify the **OpticalModuleModels**.
   * 
   * > 40GBase-LR and 100GBase-LR must be created based on the actual backend port availability. Contact your account manager for details.
   * 
   * @example
   * 100Base-T
   */
  portType?: string;
  /**
   * @remarks
   * The ID of the redundant Express Connect circuit. The circuit must be in the **Allocated**, **Confirmed**, or **Enabled** state.
   * 
   * @example
   * pc-bp10zsv5ntp****
   */
  redundantPhysicalConnectionId?: string;
  /**
   * @remarks
   * The region ID of the Express Connect circuit. 
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      autoPay: 'AutoPay',
      clientToken: 'ClientToken',
      lineOperator: 'LineOperator',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portType: 'PortType',
      redundantPhysicalConnectionId: 'RedundantPhysicalConnectionId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      autoPay: 'boolean',
      clientToken: 'string',
      lineOperator: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      portType: 'string',
      redundantPhysicalConnectionId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

