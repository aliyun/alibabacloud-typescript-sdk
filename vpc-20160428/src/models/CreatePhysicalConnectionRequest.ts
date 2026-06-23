// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePhysicalConnectionRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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

export class CreatePhysicalConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access point where the Express Connect circuit is located.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-cn-beijing-ft-A
   */
  accessPointId?: string;
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
   * Generate a parameter value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the Express Connect circuit. 
   * 
   * The description must be 2 to 256 characters in length and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The list of device advanced capabilities.
   */
  deviceAdvancedCapacity?: string[];
  /**
   * @remarks
   * The carrier that provides the Express Connect circuit. Valid values:
   * 
   * - **CT**: China Telecom.
   * 
   * - **CU**: China Unicom.
   * 
   * - **CM**: China Mobile.
   * 
   * - **CO**: Other carriers in China. 
   * 
   * - **Equinix**: Equinix.
   * 
   * - **Other**: Other carriers outside China.
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
   * The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It can contain digits, underscores (_), and hyphens (-). It cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The optical module model supported by the Express Connect circuit access point. Valid values:
   * - 1000Base-LX : 
   *   - `SFP-GE-LR-SM1310,10KM`
   *   - `SFP-GE-ER-SM1310,40KM`
   *   - `SFP-GE-ZR-SM1550,80KM`
   * - 10GBase-LR : 
   *   - `SFP-10G-LR-SM1310,10KM`
   *   - `SFP-10G-ER-SM1550,40KM` 
   *   - `SFP-10G-ZR-SM1550,80KM`  
   * - 40GBase-LR : 
   *   - `QSFP-40G-LR4-WDM1300,10KM`
   *   - `QSFP-40G-ER4-WDM1300,40KM`
   *   - `QSFP-40G-ZR4-WDM1300,80KM`
   * - 100GBase-LR : 
   *   - `QSFP28-100G-LR4-WDM1300,10KM`
   *   - `QSFP28-100G-ER4-WDM1300,40KM`
   *   - `QSFP28-100G-ZR4-WDM1300,80KM`.
   * 
   * @example
   * SFP-GE-LR-SM1310,10KM
   */
  opticalModuleModel?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The geographical location of the on-premises data center.
   * 
   * @example
   * XX街道
   */
  peerLocation?: string;
  /**
   * @remarks
   * The port type of the Express Connect circuit. Valid values:
   * 
   * - **100Base-T**: 100M Ethernet port.
   * 
   * - **1000Base-T**: 1 GE electrical port.
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
   * > 40GBase-LR and 100GBase-LR are created based on the actual port availability in the backend. Contact your account manager for port availability details.
   * 
   * @example
   * 1000Base-T
   */
  portType?: string;
  /**
   * @remarks
   * The instance ID of the redundant Express Connect circuit. The redundant circuit must be in the **Allocated**, **Confirmed**, or **Enabled** state.
   * 
   * @example
   * pc-119mfjzm****
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
   * The list of tags.
   */
  tag?: CreatePhysicalConnectionRequestTag[];
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
   * The bandwidth of the shared Express Connect circuits. Unit: Mbit/s.
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
      opticalModuleModel: 'OpticalModuleModel',
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
      opticalModuleModel: 'string',
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

