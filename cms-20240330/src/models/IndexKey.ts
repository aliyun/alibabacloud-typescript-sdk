// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IndexJsonKey } from "./IndexJsonKey";


export class IndexKey extends $dara.Model {
  /**
   * @remarks
   * Specifies whether Chinese characters are included.
   * 
   * - true: Chinese characters are included.
   * - false: Chinese characters are not included.
   * 
   * @example
   * true
   */
  chn?: boolean;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * text-embedding-v4
   */
  embedding?: string;
  /**
   * @remarks
   * json key
   * 
   * @example
   * {"message":{"type":"text","chn":true}}
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

