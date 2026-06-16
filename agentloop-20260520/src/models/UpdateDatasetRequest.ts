// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IndexKey } from "./IndexKey";


export class UpdateDatasetRequest extends $dara.Model {
  description?: string;
  schema?: { [key: string]: IndexKey };
  /**
   * @example
   * a1b2c3d4-1234-5678-90ab-cdef12345678
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      schema: 'schema',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      schema: { 'type': 'map', 'keyType': 'string', 'valueType': IndexKey },
      clientToken: 'string',
    };
  }

  validate() {
    if(this.schema) {
      $dara.Model.validateMap(this.schema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

