// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The batch operation mode. Valid values:
   * 
   * - AllTogether: In this mode, a success message is returned if all instances are restarted. If any instance fails validation, all instances fail to restart and an error message is returned.
   * 
   * - SuccessFirst: In this mode, each instance is restarted separately. The response includes the operation result for each instance.
   * 
   * Default value: AllTogether.
   * 
   * @example
   * AllTogether
   */
  batchOptimization?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * - true: performs only a dry run without restarting the instance. The system checks the required parameters, request format, and instance status. If the check fails, the corresponding error is returned. If the check passes, `DRYRUN.SUCCESS` is returned.
   * > If the BatchOptimization parameter is set to `SuccessFirst`, the dry run result for `DryRun=true` returns only `DRYRUN.SUCCESS`.
   * 
   * - false: performs a dry run and sends the request. After the check passes, the instance is restarted.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to force restart the instance. Valid values:
   * 
   * -   true: forces a restart. This is equivalent to a power-off operation. Cached data that has not been written to storage devices is lost.
   * 
   * -   false: performs a normal restart.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  forceReboot?: boolean;
  /**
   * @remarks
   * The instance ID array. Array length: 1 to 100.
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
   * The region ID of the instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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

