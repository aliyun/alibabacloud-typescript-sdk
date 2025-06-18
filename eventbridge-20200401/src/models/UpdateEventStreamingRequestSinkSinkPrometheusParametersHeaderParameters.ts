// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventStreamingRequestSinkSinkPrometheusParametersHeaderParameters extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events.
   * 
   * **Valid values:**
   * 
   * *   JSONPATH
   * *   CONSTANT
   * *   TEMPLATE
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template that you want to use for HTTP request headers. This parameter is required only if you set Form to TEMPLATE. After the event content is transformed, the data must be in JSON format.
   * 
   * @example
   * {
   *     "user_name":"${name}"
   * }
   */
  template?: string;
  /**
   * @remarks
   * *   If you set Form to CONSTANT, specify a constant.
   * *   If you set Form to JSONPATH, specify a JSONPath rule.
   * *   If you set Form to TEMPLATE, specify variables for the template.
   * 
   * Note: The value of this parameter cannot exceed 10,240 characters in length.
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

