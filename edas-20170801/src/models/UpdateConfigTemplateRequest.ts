// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConfigTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the configuration template. The value must be in the format that is specified by the Format parameter.
   * 
   * @example
   * {"name":"william","age":18}
   */
  content?: string;
  /**
   * @remarks
   * The description of the configuration template. The description can be up to 255 characters in length.
   * 
   * @example
   * Test configuration template
   */
  description?: string;
  /**
   * @remarks
   * The data format of the configuration template. Valid values:
   * 
   * *   JSON: JSON format
   * *   XML: XML format
   * *   YAML: YAML format
   * *   Properties: .properties format
   * *   KeyValue: key-value pairs
   * *   Custom: custom format
   * 
   * @example
   * JSON
   */
  format?: string;
  /**
   * @remarks
   * The ID of the configuration template.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The name of the configuration template. The name can be up to 64 characters in length.
   * 
   * @example
   * configtmpl1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      format: 'Format',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      format: 'string',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

