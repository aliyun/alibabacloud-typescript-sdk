// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRCInstancesShrinkRequest extends $dara.Model {
  dryRun?: boolean;
  force?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceIdShrink?: string;
  regionId?: string;
  terminateSubscription?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      force: 'Force',
      instanceIdShrink: 'InstanceId',
      regionId: 'RegionId',
      terminateSubscription: 'TerminateSubscription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      force: 'boolean',
      instanceIdShrink: 'string',
      regionId: 'string',
      terminateSubscription: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

