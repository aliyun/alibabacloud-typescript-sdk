// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateVirtualPhysicalConnectionRequestTag } from "./CreateVirtualPhysicalConnectionRequestTag";


export class CreateVirtualPhysicalConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the hosted connection.
   * 
   * The description must be 2 to 256 characters in length. The description must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Default value: 45104. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the request for potential issues, including required parameters, request syntax, and instance status. If the request fails the dry run, an error code is returned. If the request passes the dry run, `DRYRUN.SUCCESS` is returned.
   * *   **false**: performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The name of the hosted connection.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * The payer for the hosted connection. Valid values:
   * 
   * *   **PayByPhysicalConnectionOwner**: The partner pays for the hosted connection.
   * *   **PayByVirtualPhysicalConnectionOwner**: The tenant pays for the hosted connection.
   * 
   * This parameter is required.
   * 
   * @example
   * PayByVirtualPhysicalConnectionOwner
   */
  orderMode?: string;
  /**
   * @remarks
   * The ID of the Express Connect circuit over which the hosted connection is created.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp1ciz7ekd2grn1as****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The region ID of the hosted connection.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the hosted connection belongs.
   * 
   * @example
   * rg-aekzjty2chzuqky
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The bandwidth value of the hosted connection.
   * 
   * Valid values: **50M**, **100M**, **200M**, **300M**, **400M**, **500M**, **1G**, **2G**, **5G**, **8G**, and **10G**.
   * 
   * >  **2G**, **5G**, **8G**, and **10G** are unavailable by default. If you want to use these bandwidth values, contact your account manager.
   * 
   * **M** indicates Mbit/s and **G** indicates Gbit/s.
   * 
   * This parameter is required.
   * 
   * @example
   * 50M
   */
  spec?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateVirtualPhysicalConnectionRequestTag[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * CBCE910E-D396-4944-8****
   */
  token?: string;
  /**
   * @remarks
   * The virtual local area network (VLAN) ID of the hosted connection. Valid values: **0** to **2999**.
   * 
   * *   If the VLAN ID is set to **0**, it indicates that the switch port of the virtual border router (VBR) is a Layer 3 router interface instead of a VLAN interface. When a Layer 3 router interface is used, each Express Connect circuit corresponds to a VBR.
   * *   If the VLAN ID is set to a value from **1** to **2999**, the switch port of the VBR is a Layer 3 VLAN subinterface. When a Layer 3 VLAN subinterface is used, each VLAN ID corresponds to one VBR. In this case, the Express Connect circuit with which the VBR is associated can be used to connect to virtual private clouds (VPCs) that belong to different Alibaba Cloud accounts. VBRs in different VLANs are isolated from each other at Layer 2.
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

