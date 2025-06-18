// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutTargetsRequestTargetsParamList extends $dara.Model {
  /**
   * @remarks
   * The format of input parameters for the event target. For more information, see [Event target parameters](https://help.aliyun.com/document_detail/185887.html).
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The resource key of the event target. For more information, see [Event target parameters](https://help.aliyun.com/document_detail/185887.html).
   * 
   * @example
   * body
   */
  resourceKey?: string;
  /**
   * @remarks
   * The structure of the template for the event target.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The event target.
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

