// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePhysicalConnectionSetupOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access point.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-cn-beijing-ft-A
   */
  accessPointId?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic payments. Valid values:
   * 
   * *   **false** (default): disables automatic payment.
   * *   **true**
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 318BB676-0A2B-43A0-9AD8-F1D34E93750F
   */
  clientToken?: string;
  /**
   * @remarks
   * The connectivity provider of the Express Connect circuit. Valid values:
   * 
   * *   **CT**: China Telecom
   * *   **CU**: China Unicom
   * *   **CM**: China Mobile
   * *   **CO**: other connectivity providers in the Chinese mainland
   * *   **Equinix**: Equinix
   * *   **Other**: other connectivity providers outside the Chinese mainland
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
   * *   **100Base-T**: 100 Mbit/s copper Ethernet port
   * *   **1000Base-T** (default): 1,000 Mbit/s copper Ethernet port
   * *   **1000Base-LX**: 1,000 Mbit/s single-mode optical port (10 km)
   * *   **10GBase-T**: 10,000 Mbit/s copper Ethernet port
   * *   **10GBase-LR**: 10,000 Mbit/s single-mode optical port (10 km)
   * *   **40GBase-LR**: 40,000 Mbit/s single-mode optical port
   * *   **100GBase-LR**: 100,000 Mbit/s single-mode optical port
   * 
   * >  Whether 40GBase-LR and 100GBase-LR ports can be created depends on resource supplies. For more information, contact your account manager.
   * 
   * @example
   * 100Base-T
   */
  portType?: string;
  /**
   * @remarks
   * The ID of the redundant physical connection. The redundant physical connection must be in the **Allocated**, **Confirmed**, or **Enabled** state.
   * 
   * @example
   * pc-bp10zsv5ntp****
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

