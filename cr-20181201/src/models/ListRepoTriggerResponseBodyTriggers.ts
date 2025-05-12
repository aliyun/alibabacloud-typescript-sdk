// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoTriggerResponseBodyTriggers extends $dara.Model {
  /**
   * @remarks
   * The type of the event that activates the trigger. Valid values:
   * 
   * *   `BUILD_SUCCESS`: The trigger is activated when an image building task is successful.
   * *   `BUILD_Fail`: The trigger is activated when an image building task fails.
   * 
   * @example
   * BUILD_SUCCESS
   */
  repoEvent?: string;
  /**
   * @remarks
   * The ID of the trigger.
   * 
   * @example
   * crw-vriyql9eq7ep****
   */
  triggerId?: string;
  /**
   * @remarks
   * The name of the trigger.
   * 
   * @example
   * test
   */
  triggerName?: string;
  /**
   * @remarks
   * The image tag based on which the trigger is set.
   * 
   * @example
   * *
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
   * ALL
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
      repoEvent: 'RepoEvent',
      triggerId: 'TriggerId',
      triggerName: 'TriggerName',
      triggerTag: 'TriggerTag',
      triggerType: 'TriggerType',
      triggerUrl: 'TriggerUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repoEvent: 'string',
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

