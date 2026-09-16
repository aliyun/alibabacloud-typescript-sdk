// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepoSyncTaskByRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-hpdfkc6utbaq****
   */
  instanceId?: string;
  /**
   * @remarks
   * The execution priority of the synchronization task. Synchronization tasks are executed in descending order of priority. Synchronization tasks with the same priority are executed in random order.
   * 
   * Valid values: 1 to 5.
   * 
   * Default value: 3.
   * 
   * @example
   * 3
   */
  priority?: number;
  /**
   * @remarks
   * The image repository ID.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-hnoq7j93or3k****
   */
  repoId?: string;
  /**
   * @remarks
   * The synchronization rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * crsr-o8n4dijbumgq****
   */
  syncRuleId?: string;
  /**
   * @remarks
   * The image version to be synchronized.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.24
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      priority: 'Priority',
      repoId: 'RepoId',
      syncRuleId: 'SyncRuleId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      priority: 'number',
      repoId: 'string',
      syncRuleId: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

