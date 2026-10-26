// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRCInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a precheck before releasing the instances. Valid values:
   * * **true**: Performs a precheck and does not release the instances.
   * * **false** (default): Sends a normal request and directly releases the instances after the check passes.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to forcibly release running instances. Valid values:
   * * **Yes**: Forcibly releases the instances.
   * * **No** (default): Does not forcibly release the instances.
   * 
   * @example
   * Yes
   */
  force?: boolean;
  /**
   * @remarks
   * The instance details.
   * 
   * This parameter is required.
   */
  instanceId?: string[];
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  terminateSubscription?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      force: 'Force',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      terminateSubscription: 'TerminateSubscription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      force: 'boolean',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      terminateSubscription: 'boolean',
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

