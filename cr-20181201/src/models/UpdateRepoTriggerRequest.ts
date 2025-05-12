// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRepoTriggerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-tquyps22md8p****
   */
  repoId?: string;
  /**
   * @remarks
   * The ID of the trigger.
   * 
   * This parameter is required.
   * 
   * @example
   * crw-k7bdx4kt52ty****
   */
  triggerId?: string;
  /**
   * @remarks
   * The name of the trigger.
   * 
   * You can specify the TriggerName or TriggerUrl parameter. The TriggerName parameter is optional.
   * 
   * @example
   * test_trigger
   */
  triggerName?: string;
  /**
   * @remarks
   * The image tag based on which the trigger is set.
   * 
   * @example
   * master
   */
  triggerTag?: string;
  /**
   * @remarks
   * The type of the trigger. Valid values:
   * 
   * *   `ALL`: a trigger that supports both tags and regular expressions.
   * *   `TAG_LISTTAG`: a tag-based trigger.
   * *   `TAG_REG_EXP`: a regular expression-based trigger.
   * 
   * @example
   * TAG_LIST
   */
  triggerType?: string;
  /**
   * @remarks
   * The URL of the trigger.
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

