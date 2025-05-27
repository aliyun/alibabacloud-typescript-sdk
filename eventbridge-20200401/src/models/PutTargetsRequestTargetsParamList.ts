// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutTargetsRequestTargetsParamList extends $dara.Model {
  /**
   * @remarks
   * The method that is used to deliver events to the event target. For more information,see [Event target parameters.](https://www.alibabacloud.com/help/en/eventbridge/latest/event-target-parameters)
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The resource parameter of the event target. For more information,see [Event target parameters.](https://www.alibabacloud.com/help/en/eventbridge/latest/event-target-parameters)
   * 
   * @example
   * body
   */
  resourceKey?: string;
  /**
   * @remarks
   * The template based on which events are delivered to the event target.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value of the event target parameter.
   * 
   * @example
   * {\\"key\\"=\\"value\\"}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      resourceKey: 'ResourceKey',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      resourceKey: 'string',
      template: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

