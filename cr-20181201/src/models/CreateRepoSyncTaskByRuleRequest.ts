// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepoSyncTaskByRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-hpdfkc6utbaq****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-hnoq7j93or3k****
   */
  repoId?: string;
  /**
   * @remarks
   * The ID of the synchronization rule.
   * 
   * This parameter is required.
   * 
   * @example
   * crsr-o8n4dijbumgq****
   */
  syncRuleId?: string;
  /**
   * @remarks
   * The version of the image to be synchronized.
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
      repoId: 'RepoId',
      syncRuleId: 'SyncRuleId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

