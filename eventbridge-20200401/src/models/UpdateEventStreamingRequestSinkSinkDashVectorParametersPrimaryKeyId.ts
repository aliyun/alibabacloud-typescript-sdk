// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventStreamingRequestSinkSinkDashVectorParametersPrimaryKeyId extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Valid values:
   * 
   * *   JSONPATH
   * *   TEMPLATE
   * 
   * @example
   * JSONPATH
   */
  form?: string;
  /**
   * @remarks
   * The template that you want to use to specify primary key IDs. This parameter is required only if you set Form to TEMPLATE.
   * 
   * @example
   * ${ID}
   */
  template?: string;
  /**
   * @remarks
   * If you set Form to JSONPATH, specify a JSONPath rule. If you set Form to TEMPLATE, specify variables for the template.
   * 
   * >  The value of this parameter cannot exceed 10,240 characters in length.
   * 
   * @example
   * $.data.requestId
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

