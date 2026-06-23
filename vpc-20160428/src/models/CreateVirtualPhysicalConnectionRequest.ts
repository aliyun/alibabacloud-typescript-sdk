// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirtualPhysicalConnectionRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
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
   * The description must be 2 to 256 characters in length and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without creating the shared Express Connect circuits. The system checks the required parameters, request format, and instance status. If the check fails, the corresponding error is returned. If the check succeeds, `DRYRUN.SUCCESS` is returned.
   * - **false** (default): sends a Normal request. After the request passes the check, the shared Express Connect circuits are created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The name of the shared Express Connect circuits.
   * 
   * The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It can contain digits, underscores (_), and hyphens (-) but cannot start with `http://` or `https://`.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * The payer of the shared Express Connect circuits. Valid values:
   * 
   * - **PayByPhysicalConnectionOwner**: The partner pays.
   * - **PayByVirtualPhysicalConnectionOwner**: The tenant pays.
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
   * You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
   * The bandwidth value of the shared Express Connect circuits.
   * 
   * Valid values: **50M**, **100M**, **200M**, **300M**, **400M**, **500M**, **1G**, **2G**, **5G**, **8G**, and **10G**.
   * 
   * <props="china">
   * > The bandwidth values **2G**, **5G**, **8G**, and **10G** are not available by default. To use these values, contact your account manager.
   * 
   * <props="intl">
   * > The bandwidth values **2G**, **5G**, **8G**, and **10G** are not available by default. To use these values, contact your account manager.
   * 
   * Unit: **M** indicates Mbit/s. **G** indicates Gbit/s.
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
   * Generate a parameter value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * CBCE910E-D396-4944-8****
   */
  token?: string;
  /**
   * @remarks
   * The VLAN ID of the shared Express Connect circuits. Valid values: **0** to **2999**.
   * 
   * - If the VLAN ID is set to **0**, the physical switch port of the Virtual Border Router (VBR) uses Layer 3 routing interface mode instead of VLAN mode. In Layer 3 routing interface mode, each Express Connect circuit corresponds to one VBR.
   * - If the VLAN ID is set to a value from **1** to **2999**, the physical switch port of the VBR uses VLAN-based Layer 3 subinterface mode. In Layer 3 subinterface mode, each VLAN ID corresponds to one VBR. In this case, the Express Connect circuit of the VBR can connect to VPCs under multiple accounts. VBRs in different VLANs have Layer 2 network isolation and cannot communicate with each other.
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  vlanId?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the tenant.
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

