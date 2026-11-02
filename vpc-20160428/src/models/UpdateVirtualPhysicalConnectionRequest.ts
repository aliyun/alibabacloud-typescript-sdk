// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVirtualPhysicalConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to only perform a dry run for the request. Valid values:
   * 
   * - **true**: The system performs a dry run without modifying the VLAN ID of the shared Express Connect circuit. The system checks whether the required parameters are specified, the request format, and the instance status. If the request fails the dry run, the corresponding error is returned. If the request passes the dry run, the corresponding request ID is returned.
   * - **false** (default): The system sends a normal request. After the request passes the dry run, the VLAN ID of the shared Express Connect circuit is modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The expected bandwidth of the shared Express Connect circuit. The bandwidth takes effect only after the payment is completed.
   * 
   * Valid values: **50M**, **100M**, **200M**, **300M**, **400M**, **500M**, **1G**, **2G**, **5G**, **8G**, and **10G**.
   * 
   * <props="china">
   * > The bandwidth values of **2G**, **5G**, **8G**, and **10G** are not available by default. To use these values, contact your account manager.
   * 
   * <props="intl">
   * > The bandwidth values of **2G**, **5G**, **8G**, and **10G** are not available by default. To use these values, contact your account manager.
   * 
   * Unit: **M** indicates Mbps, and **G** indicates Gbps.
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
   * You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * CBCE910E-D396-4944-8****
   */
  token?: string;
  /**
   * @remarks
   * The VLAN ID of the shared Express Connect circuit. Valid values: **0** to **2999**.
   * 
   * - A value of **0** specifies that the physical vSwitch port of the Virtual Border Router (VBR), which acts as a vRouter, does not use the VLAN mode, but uses the Layer 3 routing interface mode. In the Layer 3 routing interface mode, each Express Connect circuit corresponds to one VBR.
   * - A value of **1** to **2999** specifies that the physical vSwitch port of the VBR uses a VLAN-based Layer 3 subinterface. In the Layer 3 subinterface mode, each VLAN ID corresponds to one VBR. In this case, the Express Connect circuit of the VBR can be used to connect VPCs that belong to different Alibaba Cloud accounts. Layer 2 network isolation is implemented for VBRs in different VLANs, and they cannot communicate with each other.
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

