// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirtualPhysicalConnectionRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length, and can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length, and can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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

export class CreateVirtualPhysicalConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the shared Express Connect circuits.
   * 
   * The description must be 2 to 256 characters in length, and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to only dry run the request. Valid values:
   * 
   * - **true**: The system performs a dry run on the request without creating the shared Express Connect circuits. The system checks whether the required parameters are specified, the request format, and the instance status. If the request fails the dry run, the corresponding error is returned. If the request passes the dry run, `DRYRUN.SUCCESS` is returned.
   * - **false** (default): The system sends a Normal request. After the request passes the dry run, the shared Express Connect circuits are created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The name of the shared Express Connect circuits.
   * 
   * The name must be 2 to 128 characters in length, and must start with a letter or a Chinese character. It can contain digits, underscores (_), and hyphens (-). It cannot start with `http://` or `https://`.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * Specifies the payer of the shared Express Connect circuits. Valid values:
   * 
   * - **PayByPhysicalConnectionOwner**: The partner pays the bills.
   * - **PayByVirtualPhysicalConnectionOwner**: The tenant pays the bills.
   * > Default value: PayByVirtualPhysicalConnectionOwner. The tenant pays the bills.
   * 
   * This parameter is required.
   * 
   * @example
   * PayByVirtualPhysicalConnectionOwner
   */
  orderMode?: string;
  /**
   * @remarks
   * The ID of the Express Connect circuit associated with the shared Express Connect circuits.
   * > The Express Connect circuit must be in the Enabled state and must be a physical Express Connect circuit. You cannot specify the ID of a shared Express Connect circuit. Otherwise, the ResourceNotFound.PhysicalConnectionId or IncorrectStatus.PhysicalConnection error is returned. You can invoke the DescribePhysicalConnections operation to query the status of the Express Connect circuit. The caller must be the account (partner) to which the Express Connect circuit belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp1ciz7ekd2grn1as****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The region ID of the shared Express Connect circuits.
   * 
   * You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the shared Express Connect circuits belong.
   * 
   * @example
   * rg-aekzjty2chzuqky
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The bandwidth of the shared Express Connect circuits.
   * 
   * Valid values: **50M**, **100M**, **200M**, **300M**, **400M**, **500M**, **1G**, **2G**, **5G**, **8G**, and **10G**.
   * 
   * <props="china">
   * > By default, the bandwidth values of **2G**, **5G**, **8G**, and **10G** are not available. To use these values, contact your account manager.
   * 
   * 
   * <props="intl">
   * > By default, the bandwidth values of **2G**, **5G**, **8G**, and **10G** are not available. To use these values, contact your account manager.
   * 
   * 
   * Unit: **M** indicates Mbit/s, and **G** indicates Gbit/s.
   * 
   * This parameter is required.
   * 
   * @example
   * 50M
   */
  spec?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateVirtualPhysicalConnectionRequestTag[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * CBCE910E-D396-4944-8****
   */
  token?: string;
  /**
   * @remarks
   * The VLAN ID of the shared Express Connect circuits. Valid values: **0** to **2999**.
   * 
   * - If the VLAN ID is **0**, the physical vSwitch port of the vRouter (Virtual Border Router) does not use the VLAN pattern, but uses the Layer 3 routing interface pattern. In the Layer 3 routing interface pattern, each Express Connect circuit corresponds to one VBR.
   * - If the VLAN ID is **1** to **2999**, the physical vSwitch port of the VBR uses a VLAN-based Layer 3 sub-interface. In the Layer 3 sub-interface pattern, each VLAN ID corresponds to one VBR. In this case, the Express Connect circuit of the VBR can be connected to VPCs under multiple accounts. VBRs in different VLANs have Layer 2 network isolation and cannot communicate with each other.
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  vlanId?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account (primary account) of the tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * 1210123456123456
   */
  vpconnAliUid?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dryRun: 'DryRun',
      name: 'Name',
      orderMode: 'OrderMode',
      physicalConnectionId: 'PhysicalConnectionId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      spec: 'Spec',
      tag: 'Tag',
      token: 'Token',
      vlanId: 'VlanId',
      vpconnAliUid: 'VpconnAliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dryRun: 'boolean',
      name: 'string',
      orderMode: 'string',
      physicalConnectionId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      spec: 'string',
      tag: { 'type': 'array', 'itemType': CreateVirtualPhysicalConnectionRequestTag },
      token: 'string',
      vlanId: 'number',
      vpconnAliUid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

