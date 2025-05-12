// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepoTriggerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-xwvi3osiy4ff****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the trigger.
   * 
   * This parameter is required.
   * 
   * @example
   * trigger1
   */
  triggerName?: string;
  /**
   * @remarks
   * The image tag based on which the trigger is set.
   * 
   * > 
   * 
   * *   If `TriggerType` is set to `ALL`, `TriggerTag` can be set to a string or an array, for example, `*`.
   * 
   * *   If `TriggerType` is set to `TAG_LIST`, `TriggerTag` must be set to an array, for example, `[1]`.
   * *   If `TriggerType` is set to `TAG_REG_EXP`, `TriggerTag` must be set to a string, for example, `*`.
   * 
   * @example
   * [1]
   */
  triggerTag?: string;
  /**
   * @remarks
   * The type of the trigger. Valid values:
   * 
   * *   `ALL`: a trigger that supports both tags and regular expressions.
   * *   `TAG_LIST`: a tag-based trigger.
   * *   `TAG_REG_EXP`: a regular expression-based trigger.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  triggerType?: string;
  /**
   * @remarks
   * The URL of the trigger.
   * 
   * This parameter is required.
   * 
   * @example
   * http://www.mysite.com
   */
  triggerUrl?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
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

