// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRepoSyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-sgedpenzw80e****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * This parameter is required.
   * 
   * @example
   * rst-zxjkiv5oil6f****
   */
  syncTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      syncTaskId: 'SyncTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      syncTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

