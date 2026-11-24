// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoTriggerResponseBodyTriggers extends $dara.Model {
  /**
   * @remarks
   * The event type of the trigger. Valid values:
   * - `BUILD_SUCCESS`: The trigger was successful.
   * - `BUILD_Fail`: The trigger failed.
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
   * The image version that triggers the trigger.
   * 
   * @example
   * *
   */
  triggerTag?: string;
  /**
   * @remarks
   * The trigger type. Valid values:
   * - `ALL`: All.
   * - `TAG_LISTTAG`: Tag list.
   * - `TAG_REG_EXP`: Regular expression.
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
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * - `true`: The API call was successful.
   * - `false`: The API call failed.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2CA76D52-A8F0-4D0B-854E-FBD9F6C99049
   */
  requestId?: string;
  /**
   * @remarks
   * The list of triggers.
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

