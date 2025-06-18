// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParameters extends $dara.Model {
  /**
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
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

