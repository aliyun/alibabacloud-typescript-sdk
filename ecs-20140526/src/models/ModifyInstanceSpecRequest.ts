// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyInstanceSpecRequestSystemDisk } from "./ModifyInstanceSpecRequestSystemDisk";
import { ModifyInstanceSpecRequestTemporary } from "./ModifyInstanceSpecRequestTemporary";
import { ModifyInstanceSpecRequestDisk } from "./ModifyInstanceSpecRequestDisk";


export class ModifyInstanceSpecRequest extends $dara.Model {
  systemDisk?: ModifyInstanceSpecRequestSystemDisk;
  temporary?: ModifyInstanceSpecRequestTemporary;
  /**
   * @remarks
   * Specifies whether to allow cross-cluster instance type upgrade. Valid values:
   * 
   * *   true: force attaches the disk to the instance.
   * *   false: does not force attach the disk to the instance.
   * 
   * Default value: false. Valid values:
   * 
   * When you set `AllowMigrateAcrossZone` to true and upgrade the instance based on the returned information, take note of the following items:
   * 
   * Instance that resides in the classic network:
   * 
   * *   For [retired instance types](https://help.aliyun.com/document_detail/55263.html), when a non-I/O optimized instance is upgraded to an I/O optimized instance, the private IP address, disk device names, and software authorization codes of the instance change. For a Linux instance, basic disks (`cloud`) are identified as xvd\\* such as **xvda** and **xvdb**, and ultra disks (`cloud_efficiency`) and standard SSDs (`cloud_ssd`) are identified as vd\\* such as **vda** and **vdb**.
   * *   For [instance families available for purchase](https://help.aliyun.com/document_detail/25378.html), when the instance type of an instance is changed, the private IP address of the instance changes.
   * 
   * Instance that resides in a virtual private cloud (VPC): For [retired instance types](https://help.aliyun.com/document_detail/55263.html), when a non-I/O optimized instance is upgraded to an I/O optimized instance, the disk device names and software authorization codes of the instance change. For a Linux instance, basic disks (`cloud`) are identified as xvd\\* such as **xvda** and **xvdb**, and ultra disks (`cloud_efficiency`) and standard SSDs (`cloud_ssd`) are identified as vd\\* such as **vda** and **vdb**.
   * 
   * @example
   * false
   */
  allowMigrateAcrossZone?: boolean;
  /**
   * @remarks
   * Specifies whether to submit an asynchronous request. Valid values:
   * 
   * *   true: force attaches the disk to the instance.
   * *   false: does not force attach the disk to the instance.
   * 
   * Default value: false. Valid values:
   * 
   * @example
   * false
   */
  async?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. **The token can contain only ASCII characters and cannot exceed 64 characters in length.** For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   */
  disk?: ModifyInstanceSpecRequestDisk[];
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   true: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, service limits, and unavailable ECS resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   false (default): performs a dry run and performs the actual request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The new instance type. For more information, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the most recent instance type list.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth. Unit: Mbit/s. Valid values:
   * 
   * *   When the purchased outbound public bandwidth is less than or equal to 10 Mbit/s, the valid value of this parameter ranges from 1 to 10 and the default value is 10.
   * *   When the purchased outbound public bandwidth is greater than 10 Mbit/s, the valid values of this parameter are 1 to the `InternetMaxBandwidthOut` value and the default value is the `InternetMaxBandwidthOut` value.
   * 
   * > When the **pay-by-traffic** billing method for network usage is used, the maximum inbound and outbound bandwidths are used as the upper limits of bandwidths instead of guaranteed performance specifications. In scenarios where demand outstrips resource supplies, these maximum bandwidth values may not be reached. If you want guaranteed bandwidths for your instance, use the **pay-by-bandwidth** billing method for network usage.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100.
   * 
   * > When the **pay-by-traffic** billing method for network usage is used, the maximum inbound and outbound bandwidths are used as the upper limits of bandwidths instead of guaranteed performance specifications. In scenarios where demand outstrips resource supplies, these maximum bandwidth values may not be reached. If you want guaranteed bandwidths for your instance, use the **pay-by-bandwidth** billing method for network usage.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * Valid values:
   * 
   * *   Online
   * *   Offline
   * 
   * @example
   * null
   */
  modifyMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      systemDisk: 'SystemDisk',
      temporary: 'Temporary',
      allowMigrateAcrossZone: 'AllowMigrateAcrossZone',
      async: 'Async',
      clientToken: 'ClientToken',
      disk: 'Disk',
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      modifyMode: 'ModifyMode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDisk: ModifyInstanceSpecRequestSystemDisk,
      temporary: ModifyInstanceSpecRequestTemporary,
      allowMigrateAcrossZone: 'boolean',
      async: 'boolean',
      clientToken: 'string',
      disk: { 'type': 'array', 'itemType': ModifyInstanceSpecRequestDisk },
      dryRun: 'boolean',
      instanceId: 'string',
      instanceType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      modifyMode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    if(this.temporary && typeof (this.temporary as any).validate === 'function') {
      (this.temporary as any).validate();
    }
    if(Array.isArray(this.disk)) {
      $dara.Model.validateArray(this.disk);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

