// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHighReliablePhysicalConnectionRequestApList extends $dara.Model {
  /**
   * @remarks
   * The ID of the access point that is associated with the Express Connect circuit.
   * 
   * > Two access points must be specified when **HighReliableType** is set to **MultiApMultiDevice** or **MultiApSingleDevice**. One access point must be specified when **HighReliableType** is set to **SingleApMultiDevice** or **SingleApMultiConnection**.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-cn-beijing-ft-A
   */
  accessPointId?: string;
  /**
   * @remarks
   * The maximum bandwidth of the hosted connection. Unit: Mbit/s.
   * 
   * Valid values: 50, 100, 200, 300, 400, 500, 1000, 2000, 4000, 5000, 8000, and 10000.
   * 
   * @example
   * 50
   */
  bandwidth?: number;
  /**
   * @remarks
   * The circuit code of the Express Connect circuit, which is provided by the connectivity provider.
   * 
   * @example
   * longtel001
   */
  circuitCode?: string;
  /**
   * @remarks
   * The description of the Express Connect circuit.
   * 
   * The description must be 2 to 256 characters in length. It must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * description
   */
  description?: string;
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
   * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter but cannot start with `http://` or` https://`.
   * 
   * @example
   * test
   */
  name?: string;
  opticalModuleModel?: string;
  /**
   * @remarks
   * The geographical location of the data center.
   * 
   * @example
   * ram-test
   */
  peerLocation?: string;
  /**
   * @remarks
   * The number of ports. Valid values: 2 to 16. This parameter is required only when **HighReliableType** is set to **SingleApMultiConnection**.
   * 
   * @example
   * 2
   */
  portNum?: number;
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
   * The type of the Express Connect circuit. Default value: **VPC**.
   * 
   * @example
   * VPC
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      bandwidth: 'Bandwidth',
      circuitCode: 'CircuitCode',
      description: 'Description',
      lineOperator: 'LineOperator',
      name: 'Name',
      opticalModuleModel: 'OpticalModuleModel',
      peerLocation: 'PeerLocation',
      portNum: 'PortNum',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      bandwidth: 'number',
      circuitCode: 'string',
      description: 'string',
      lineOperator: 'string',
      name: 'string',
      opticalModuleModel: 'string',
      peerLocation: 'string',
      portNum: 'number',
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHighReliablePhysicalConnectionRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the resource. Valid values of N: 1 to 20. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter but cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the resource. Valid values of N: 1 to 20. The tag value cannot be an empty string.
   * 
   * The tag value can be up to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter but cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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

export class CreateHighReliablePhysicalConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The language to display the results. Valid values:
   * 
   * *   **zh-CN** (default): Chinese
   * *   **en-US**: English
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The access points.
   * 
   * This parameter is required.
   */
  apList?: CreateHighReliablePhysicalConnectionRequestApList[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The advanced features of the device.
   */
  deviceAdvancedCapacity?: string[];
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The high availability mode. Valid values:
   * 
   * - **MultiApMultiDevice** : This mode supports two access points and two devices, and provides the maximum disaster recovery capability.
   * - **MultiApSingleDevice** : This mode supports two access points and one device, and provides robust disaster recovery capability.
   * - **SingleApMultiDevice** : This mode supports one access point and two devices, and is recommended for non-critical business test and development.
   * - **SingleApMultiConnection** : This mode supports one access point, one device, and multiple physical ports. Only users in the whitelist can use this mode. To use this mode, contact your account manager.
   * 
   * This parameter is required.
   * 
   * @example
   * MultiApMultiDevice
   */
  highReliableType?: string;
  ownerAccount?: string;
  ownerId?: number;
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
   * This parameter is required.
   * 
   * @example
   * 1000Base-T
   */
  portType?: string;
  /**
   * @remarks
   * The region ID of the Express Connect circuit.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateHighReliablePhysicalConnectionRequestTag[];
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      apList: 'ApList',
      clientToken: 'ClientToken',
      deviceAdvancedCapacity: 'DeviceAdvancedCapacity',
      dryRun: 'DryRun',
      highReliableType: 'HighReliableType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portType: 'PortType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      apList: { 'type': 'array', 'itemType': CreateHighReliablePhysicalConnectionRequestApList },
      clientToken: 'string',
      deviceAdvancedCapacity: { 'type': 'array', 'itemType': 'string' },
      dryRun: 'string',
      highReliableType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      portType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateHighReliablePhysicalConnectionRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.apList)) {
      $dara.Model.validateArray(this.apList);
    }
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

