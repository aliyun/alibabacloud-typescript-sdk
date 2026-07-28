// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVirtualPhysicalConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without modifying the VLAN ID of the shared Express Connect circuit. The system checks whether required parameters are specified, whether the request format is valid, and whether the instance status is valid. If the check fails, the corresponding error is returned. If the check succeeds, the corresponding request ID is returned.
   * - **false** (default): sends a normal request. After the request passes the check, the VLAN ID of the shared Express Connect circuit is modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The expected bandwidth value of the shared Express Connect circuit. The bandwidth value takes effect only after payment is completed.
   * 
   * Valid values: **50M**, **100M**, **200M**, **300M**, **400M**, **500M**, **1G**, **2G**, **5G**, **8G**, and **10G**.
   * 
   * <props="china">
   * > The bandwidth values **2G**, **5G**, **8G**, and **10G** are not available by default. To use these values, contact your account manager.
   * 
   * <props="intl">
   * > The bandwidth values **2G**, **5G**, **8G**, and **10G** are not available by default. To use these values, contact your account manager.
   * 
   * Unit: **M** indicates Mbit/s and **G** indicates Gbit/s.
   * 
   * @example
   * 50M
   */
  expectSpec?: string;
  /**
   * @remarks
   * The instance ID of the shared Express Connect circuit.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp1mrgfbtmc9brre7****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the shared Express Connect circuit.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
   * Generate a parameter value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * CBCE910E-D396-4944-8****
   */
  token?: string;
  /**
   * @remarks
   * The VLAN ID of the shared Express Connect circuit. Valid values: **0** to **2999**.
   * 
   * - If the VLAN ID is **0**, the physical vSwitch port of the Virtual Border Router (VBR) does not use VLAN mode but uses Layer 3 vRouter interface mode. In Layer 3 vRouter interface mode, each Express Connect circuit corresponds to one VBR.
   * - If the VLAN ID is **1** to **2999**, the physical vSwitch port of the VBR uses VLAN-based Layer 3 subinterfaces. In Layer 3 subinterface mode, each VLAN ID corresponds to one VBR. In this case, the Express Connect circuit of the VBR can connect to VPCs under multiple accounts. VBRs in different VLANs have network isolation at Layer 2 and cannot communicate with each other.
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

