// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetHighDefinitionMonitorLogStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID for which you want to configure high-precision second-level monitoring.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-wz9fi6qboho9fwgx7****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance. Set the value to **EIP**.
   * 
   * @example
   * EIP
   */
  instanceType?: string;
  /**
   * @remarks
   * The name of the LogProject.
   * 
   * This parameter is required.
   * 
   * @example
   * hdmonitor-cn-shenzhen
   */
  logProject?: string;
  /**
   * @remarks
   * The name of the LogStore.
   * 
   * This parameter is required.
   * 
   * @example
   * hdmonitor
   */
  logStore?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of high-precision second-level monitoring for the instance. Valid values:
   * 
   * - **ON**: enables high-precision second-level monitoring.
   * - **OFF**: disables high-precision second-level monitoring.
   * 
   * This parameter is required.
   * 
   * @example
   * ON
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      logProject: 'LogProject',
      logStore: 'LogStore',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
      logProject: 'string',
      logStore: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

