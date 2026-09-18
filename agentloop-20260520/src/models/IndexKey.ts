// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IndexJsonKey } from "./IndexJsonKey";


export class IndexKey extends $dara.Model {
  /**
   * @remarks
   * Specifies whether Chinese is included. This parameter is required only when the **type** parameter is set to **text**. Valid values:
   *   - true: Chinese is included.
   *   - false: Chinese is not included.
   * 
   * @example
   * true
   */
  chn?: boolean;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The field embedding type.
   * 
   * @example
   * agentloop-embedding-v4
   */
  embedding?: string;
  /**
   * @remarks
   * The JSON subfields. This parameter takes effect only when type is set to json.
   */
  jsonKeys?: { [key: string]: IndexJsonKey };
  /**
   * @remarks
   * The type.
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

