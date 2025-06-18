// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParameters extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Valid values:
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
   * The schema template. This parameter is required only if you set Form to TEMPLATE. After the event content is transformed, the data must be an array in the JSON format. Each schema corresponds to a JSON object. The properties include only the name, type, and value fields. The value of the type field can be only of the INT, FLOAT, STRING, or BOOL type.
   * 
   * @example
   * [
   *   {
   *     "name": "schema1",
   *     "type": "INT",
   *     "value": "${value1}"
   *   },
   *   {
   *     "name": "schema2",
   *     "type": "FLOAT",
   *     "value": "${value2}"
   *   }
   * ]
   */
  template?: string;
  /**
   * @remarks
   * *   If you set Form to CONSTANT, specify a constant.
   * *   If you set Form to JSONPATH, specify a JSONPath rule.
   * *   If you set Form to TEMPLATE, specify variables for the template.
   * 
   * >  The value of this parameter cannot exceed 10,240 characters in length.
   * 
   * @example
   * {
   *   "value1":"v1",
   *   "value2":"v2"
   * }
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

