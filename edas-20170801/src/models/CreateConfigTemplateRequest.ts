// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConfigTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the configuration template. The value must be in the format that is specified by the Format parameter.
   * 
   * @example
   * [{"Key":"name","Value":"william"},{"Key":"age","Value":"12"}]
   */
  content?: string;
  /**
   * @remarks
   * The description of the configuration template. The description can be up to 255 characters in length.
   * 
   * @example
   * My configuration template
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
   * The name of the configuration template. The name can be up to 64 characters in length.
   * 
   * @example
   * my-template
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      format: 'Format',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      format: 'string',
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

