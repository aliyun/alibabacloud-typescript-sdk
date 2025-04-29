// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The batch operation mode. Valid values:
   * 
   * *   AllTogether: In this mode, if all instances are restarted, a success message is returned. If an instance fails the verification, all instances fail to be restarted and an error message is returned.
   * *   SuccessFirst: In this mode, each instance is restarted separately. The response contains the operation results of each instance.
   * 
   * Default value: AllTogether.
   * 
   * @example
   * AllTogether
   */
  batchOptimization?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   true: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and instance status. If the request fails the dry run, an error message is returned. If the request passes the dry run, `DRYRUN.SUCCESS` is returned.
   * 
   * >  If you set `BatchOptimization` to `SuccessFirst` and `DryRun` to true, only `DRYRUN.SUCCESS` is returned regardless of whether the request passes the dry run.
   * 
   * *   false: performs a dry run and sends the request. If the request passes the dry run, the instance is restarted.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to forcefully restart the instance. Valid values:
   * 
   * *   true: forcefully restarts the instance. This operation is equivalent to the typical power-off operation. Cache data that is not written to storage devices on the instance is lost.
   * *   false: normally restarts the instance.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  forceReboot?: boolean;
  /**
   * @remarks
   * The IDs of ECS instances. Valid values of N: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
      batchOptimization: 'BatchOptimization',
      dryRun: 'DryRun',
      forceReboot: 'ForceReboot',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchOptimization: 'string',
      dryRun: 'boolean',
      forceReboot: 'boolean',
      instanceId: { 'type': 'array', 'itemType': 'string' },
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

