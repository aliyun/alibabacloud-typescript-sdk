// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventStreamingRequestSinkSinkDashVectorParametersPartition extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Valid values:
   * 
   * *   JSONPATH
   * *   CONSTANT
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * None.
   */
  template?: string;
  /**
   * @remarks
   * *   If you set Form to CONSTANT, specify a constant.
   * *   If you set Form to JSONPATH, specify a JSONPath rule.
   * 
   * >  The value of this parameter cannot exceed 10,240 characters in length.
   * 
   * @example
   * default
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
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

