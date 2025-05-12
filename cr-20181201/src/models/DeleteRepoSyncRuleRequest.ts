// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRepoSyncRuleRequest extends $dara.Model {
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
   * The ID of the synchronization rule.
   * 
   * This parameter is required.
   * 
   * @example
   * crsr-gk5p2ns1kzns****
   */
  syncRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      syncRuleId: 'SyncRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      syncRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

