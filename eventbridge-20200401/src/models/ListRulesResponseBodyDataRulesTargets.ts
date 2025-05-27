// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRulesResponseBodyDataRulesTargets extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the event target.
   * 
   * @example
   * acs:mns:cn-hangzhou:123456789098****:queues/myqueue
   */
  endpoint?: string;
  /**
   * @example
   * ALL
   */
  errorsTolerance?: string;
  /**
   * @remarks
   * The ID of the custom event target.
   * 
   * @example
   * 177
   */
  id?: string;
  /**
   * @remarks
   * The transformer that is used to push events.
   * 
   * @example
   * MATCHED_EVENT
   */
  pushSelector?: string;
  /**
   * @remarks
   * The type of the event target. For more information, see [Event target parameters.](https://www.alibabacloud.com/help/en/eventbridge/latest/event-target-parameters)
   * 
   * @example
   * acs.mns.queue
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      errorsTolerance: 'ErrorsTolerance',
      id: 'Id',
      pushSelector: 'PushSelector',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      errorsTolerance: 'string',
      id: 'string',
      pushSelector: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

