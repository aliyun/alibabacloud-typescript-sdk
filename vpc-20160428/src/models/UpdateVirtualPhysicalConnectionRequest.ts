// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVirtualPhysicalConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values: Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including required parameters, request syntax, and instance status. If the request fails to pass the dry run, an error message is returned. If the request passes the dry run, the system returns the ID of the request.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The estimated bandwidth value of the hosted connection. The estimated bandwidth value takes effect only after the payment is completed.
   * 
   * Valid values: **50M**, **100M**, **200M**, **300M**, **400M**, **500M**, **1G**, **2G**, **5G**, **8G**, and **10G**.
   * 
   * >  **2G**, **5G**, **8G**, and **10G** are unavailable by default. If you want to use these bandwidth values, contact your account manager.
   * 
   * **M** indicates Mbit/s and **G** indicates Gbit/s.
   * 
   * @example
   * 50M
   */
  expectSpec?: string;
  /**
   * @remarks
   * The ID of the hosted connection over Express Connect circuit.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp1mrgfbtmc9brre7****
   */
  instanceId?: string;
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
   * The VLAN ID of the hosted connection over Express Connect circuit. Valid values: **0** to **2999**.
   * 
   * *   If the VLAN ID is set to **0**, it indicates that the switch port of the virtual border router (VBR) is a Layer 3 router interface instead of a VLAN interface. When a Layer 3 router interface is used, each Express Connect circuit corresponds to a VBR.
   * *   If the VLAN ID is set to a value from **1** to **2999**, the switch port of the VBR is a Layer 3 VLAN subinterface. When a Layer 3 VLAN subinterface is used, each VLAN ID corresponds to one VBR. In this case, the Express Connect circuit with which the VBR is associated can be used to connect to virtual private clouds (VPCs) that belong to different Alibaba Cloud accounts. VBRs in different VLANs are isolated from each other at Layer 2.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  vlanId?: number;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      expectSpec: 'ExpectSpec',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      token: 'Token',
      vlanId: 'VlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      expectSpec: 'string',
      instanceId: 'string',
      regionId: 'string',
      token: 'string',
      vlanId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

