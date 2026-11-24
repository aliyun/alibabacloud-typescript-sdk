// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRepoTriggerRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The image repository ID.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-tquyps22md8p****
   */
  repoId?: string;
  /**
   * @remarks
   * The trigger ID.
   * 
   * This parameter is required.
   * 
   * @example
   * crw-k7bdx4kt52ty****
   */
  triggerId?: string;
  /**
   * @remarks
   * The trigger name. This parameter is optional. You must specify either TriggerName or TriggerUrl.
   * 
   * @example
   * test_trigger
   */
  triggerName?: string;
  /**
   * @remarks
   * The image version that triggers the trigger.
   * 
   * @example
   * master
   */
  triggerTag?: string;
  /**
   * @remarks
   * The trigger type. Valid values:
   * 
   * - `ALL`: all.
   * 
   * - `TAG_LISTTAG`: tag list.
   * 
   * - `TAG_REG_EXP`: regular expression.
   * 
   * @example
   * ALL
   */
  triggerType?: string;
  /**
   * @remarks
   * The trigger URL.
   * 
   * @example
   * https://www.test.com
   */
  triggerUrl?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      triggerId: 'TriggerId',
      triggerName: 'TriggerName',
      triggerTag: 'TriggerTag',
      triggerType: 'TriggerType',
      triggerUrl: 'TriggerUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      triggerId: 'string',
      triggerName: 'string',
      triggerTag: 'string',
      triggerType: 'string',
      triggerUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

