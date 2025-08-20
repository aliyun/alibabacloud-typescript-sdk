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

export class ListRepoTriggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2CA76D52-A8F0-4D0B-854E-FBD9F6C99049
   */
  requestId?: string;
  /**
   * @remarks
   * The triggers of the repository.
   */
  triggers?: ListRepoTriggerResponseBodyTriggers[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      triggers: { 'type': 'array', 'itemType': ListRepoTriggerResponseBodyTriggers },
    };
  }

  validate() {
    if(Array.isArray(this.triggers)) {
      $dara.Model.validateArray(this.triggers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

