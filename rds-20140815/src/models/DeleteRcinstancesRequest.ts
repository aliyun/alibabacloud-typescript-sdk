// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRCInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run for this release operation. Valid values:
   * * **true**: Performs a dry run without releasing the instance.
   * * **false** (default): Sends a normal request and directly releases the instance after the request passes the check.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to forcefully release running instances. Valid values:
   * * **Yes**: Forcefully releases the instances.
   * * **No** (default): Does not forcefully release the instances.
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
   * A reserved parameter.
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

