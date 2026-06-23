// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHighReliablePhysicalConnectionRequestApList extends $dara.Model {
  /**
   * @remarks
   * The ID of the access point for the Express Connect circuit.
   * 
   * > When **HighReliableType** is set to **MultiApMultiDevice** or **MultiApSingleDevice**, you must specify two different access points. When **HighReliableType** is set to **SingleApMultiDevice** or **SingleApMultiConnection**, you must specify one access point.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-cn-beijing-ft-A
   */
  accessPointId?: string;
  /**
   * @remarks
   * The bandwidth of the shared Express Connect circuits. Unit: Mbit/s.
   * 
   * Valid values: 50, 100, 200, 300, 400, 500, 1000, 2000, 4000, 5000, 8000, and 10000.
   * 
   * @example
   * 50
   */
  bandwidth?: number;
  /**
   * @remarks
   * The circuit code provided by the connectivity provider for the Express Connect circuit.
   * 
   * @example
   * longtel001
   */
  circuitCode?: string;
  /**
   * @remarks
   * The description of the Express Connect circuit.
   * 
   * The description must be 2 to 256 characters in length and must start with a letter or Chinese character, but cannot start with `http://` or `https://`.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The connectivity provider of the Express Connect circuit. Valid values:
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
   * - **Other**: other carriers outside the Chinese mainland.
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
   * The name must be 2 to 128 characters in length and must start with a letter or Chinese character. It can contain digits, underscores (_), and hyphens (-), but cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The optical module model supported by the access point of the Express Connect circuit. Valid values:
   * - 1000Base-LX: 
   *   - `SFP-GE-LR-SM1310,10KM`
   *   - `SFP-GE-ER-SM1310,40KM`
   *   - `SFP-GE-ZR-SM1550,80KM`
   * - 10GBase-LR: 
   *   - `SFP-10G-LR-SM1310,10KM`
   *   - `SFP-10G-ER-SM1550,40KM` 
   *   - `SFP-10G-ZR-SM1550,80KM`  
   * - 40GBase-LR: 
   *   - `QSFP-40G-LR4-WDM1300,10KM`
   *   - `QSFP-40G-ER4-WDM1300,40KM`
   *   - `QSFP-40G-ZR4-WDM1300,80KM`
   * - 100GBase-LR: 
   *   - `QSFP28-100G-LR4-WDM1300,10KM`
   *   - `QSFP28-100G-ER4-WDM1300,40KM`
   *   - `QSFP28-100G-ZR4-WDM1300,80KM`.
   * 
   * @example
   * SFP-GE-LR-SM1310,10KM
   */
  opticalModuleModel?: string;
  /**
   * @remarks
   * The geographic location of the on-premises data center.
   * 
   * @example
   * XX街道
   */
  peerLocation?: string;
  /**
   * @remarks
   * The number of ports. This parameter is required only when **HighReliableType** is set to **SingleApMultiConnection**. Valid values: 2 to 16.
   * 
   * @example
   * 2
   */
  portNum?: number;
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
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and must start with a letter or Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and must start with a letter or Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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
   * The language of the response. Valid values:
   * 
   * - **zh-CN** (default): Chinese.
   * - **en-US**: English.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The list of access points.
   * 
   * This parameter is required.
   */
  apList?: CreateHighReliablePhysicalConnectionRequestApList[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of advanced device capabilities.
   */
  deviceAdvancedCapacity?: string[];
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without creating the instance. The system checks the required parameters, request format, and instance status. If the check fails, the error code `DRYRUN.FAIL` is returned along with the corresponding error list. If the check succeeds, the code `DRYRUN.SUCCESS` is returned.
   * 
   * - **false** (default): sends the request. After the request passes the check, the instance is created.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The zone-redundancy mode. Valid values:
   * 
   * - **MultiApMultiDevice**: maximum disaster recovery. This mode supports two different access points and two different devices, providing maximum disaster recovery.
   * - **MultiApSingleDevice**: enhanced disaster recovery. This mode supports two different access points and one device, providing enhanced disaster recovery.
   * - **SingleApMultiDevice**: development and testing. This mode supports one access point and two devices. This mode is recommended only for development and testing of non-critical workloads.
   * - **SingleApMultiConnection**: high-bandwidth load balancing. This mode is available only to users in the whitelist. It supports one access point, one device, and multiple physical ports. To use this mode, contact your account manager.
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
   * The port type of the Express Connect circuit. Valid values:
   * 
   * - **1000Base-LX**: GE single-mode optical port (10 km).
   * 
   * - **10GBase-LR**: 10 GE single-mode optical port (10 km).
   * 
   * - **40GBase-LR**: 40 GE single-mode optical port.
   * 
   * - **100GBase-LR**: 100 GE single-mode optical port.
   *     
   * > 40GBase-LR and 100GBase-LR are subject to the actual port availability. For information about port availability, contact your account manager.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000Base-LX
   */
  portType?: string;
  /**
   * @remarks
   * The region ID of the Express Connect circuit.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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

