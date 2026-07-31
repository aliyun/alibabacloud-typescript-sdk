// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The batch operation pattern. Valid values:
   * 
   * - AllTogether: In this pattern, if all instances are started, a success message is returned. If any instance fails validation, all instances fail to start and a failed message is returned.
   * 
   * - SuccessFirst: In this pattern, each instance is started separately. The response contains the operation result for each instance.
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
   * - true: performs only a dry run. The system checks the required parameters, request format, and instance status. If the check fails, the corresponding fault is returned. If the check succeeds, `DRYRUN.SUCCESS` is returned.
   * > If the BatchOptimization parameter is set to `SuccessFirst`, the dry run with `DryRun=true` returns only `DRYRUN.SUCCESS`.
   * 
   * - false: sends a Normal request. After the check succeeds, the instances are started.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The list of instance IDs. Valid values of the array length: 1 to 100.
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
   * The region ID of the instances. You can invoke [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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

