// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRCInstancesRequest extends $dara.Model {
  dryRun?: boolean;
  force?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string[];
  regionId?: string;
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

