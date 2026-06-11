// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IndexJsonKey } from "./IndexJsonKey";


export class IndexKey extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the value contains Chinese characters.
   * 
   * - `true`: Contains Chinese characters.
   * 
   * - `false`: Does not contain Chinese characters.
   * 
   * @example
   * true
   */
  chn?: boolean;
  /**
   * @remarks
   * Specifies the model name.
   * 
   * @example
   * text-embedding-v4
   */
  embedding?: string;
  /**
   * @remarks
   * Describes the json keys.
   */
  jsonKeys?: { [key: string]: IndexJsonKey };
  /**
   * @remarks
   * Specifies the field type.
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chn: 'chn',
      embedding: 'embedding',
      jsonKeys: 'jsonKeys',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chn: 'boolean',
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

