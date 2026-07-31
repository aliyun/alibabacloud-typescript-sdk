// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopInvocationRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of instances on which you want to stop the command. You can specify up to 50 instance IDs. Valid values of N: 1 to 50.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string[];
  /**
   * @remarks
   * The command execution ID. You can call [DescribeInvocations](https://help.aliyun.com/document_detail/64840.html) to query all execution IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * t-7d2a745b412b4601b2d47f6a768d****
   */
  invokeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      invokeId: 'InvokeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
      invokeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

