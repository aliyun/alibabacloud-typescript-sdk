// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVirtualPhysicalConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Performs a dry run to check for required parameters, the request format, and the instance status. The VLAN ID of the virtual physical connection is not modified. If the check fails, an error message is returned. If it passes, the request ID is returned.
   * 
   * - **false** (default): Sends the request. If the check passes, the VLAN ID of the virtual physical connection is modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The expected bandwidth of the virtual physical connection. The new bandwidth takes effect only after the payment is complete.
   * 
   * Valid values: **50M**, **100M**, **200M**, **300M**, **400M**, **500M**, **1G**, **2G**, **5G**, **8G**, and **10G**.
   * 
   * <props="china">
   * 
   * > Bandwidth settings of **2G**, **5G**, **8G**, and **10G** are not enabled by default. To use these settings, contact your account manager.
   * 
   * 
   * 
   * <props="intl">
   * 
   * > Bandwidth settings of **2G**, **5G**, **8G**, and **10G** are not enabled by default. To use these settings, contact your account manager.
   * 
   * 
   * 
   * Units: **M** indicates Mbps and **G** indicates Gbps.
   * 
   * @example
   * 50M
   */
  expectSpec?: string;
  /**
   * @remarks
   * The ID of the virtual physical connection instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp1mrgfbtmc9brre7****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the virtual physical connection is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The client token that ensures the idempotence of the request.
   * 
   * A client-generated value that must be unique across requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** is different for each request.
   * 
   * @example
   * CBCE910E-D396-4944-8****
   */
  token?: string;
  /**
   * @remarks
   * The VLAN ID of the virtual physical connection. Valid values: **0** to **2999**.
   * 
   * - If you set the VLAN ID to **0**, the physical switch port of the Virtual Border Router (VBR) operates in Layer 3 routed interface mode. In this mode, one physical connection corresponds to one VBR.
   * 
   * - If you set the VLAN ID to a value from **1** to **2999**, the physical switch port of the VBR uses a VLAN-based Layer 3 subinterface. In this mode, each VLAN ID corresponds to one VBR. The physical connection can be attached to VPCs that belong to different accounts. VBRs in different VLANs are isolated at Layer 2 and cannot communicate with each other.
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

