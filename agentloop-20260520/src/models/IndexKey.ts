// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IndexJsonKey } from "./IndexJsonKey";


export class IndexKey extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the field contains Chinese characters. This parameter is required only when the **type** parameter is set to **text**. Valid values:
   * - true: The field contains Chinese characters.
   * - false: The field does not contain Chinese characters.
   * 
   * @example
   * true
   */
  chn?: boolean;
  /**
   * @remarks
   * The field description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The embedding type of the field.
   * 
   * @example
   * agentloop-embedding-v4
   */
  embedding?: string;
  /**
   * @remarks
   * The JSON subfields. This property takes effect only when the type is set to json.
   * 
   * @example
   * {"content":{"type":"text","chn":true}}
   */
  jsonKeys?: { [key: string]: IndexJsonKey };
  /**
   * @remarks
   * The field type.
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chn: 'chn',
      description: 'description',
      embedding: 'embedding',
      jsonKeys: 'jsonKeys',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chn: 'boolean',
      description: 'string',
      embedding: 'string',
      jsonKeys: { 'type': 'map', 'keyType': 'string', 'valueType': IndexJsonKey },
      type: 'string',
    };
  }

  validate() {
    if(this.jsonKeys) {
      $dara.Model.validateMap(this.jsonKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

