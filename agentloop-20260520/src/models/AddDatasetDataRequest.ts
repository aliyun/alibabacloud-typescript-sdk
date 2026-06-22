// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDatasetDataRequest extends $dara.Model {
  dataArray?: { [key: string]: any }[];
  /**
   * @example
   * a1b2c3d4-1234-5678-90ab-cdef12345678
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      dataArray: 'dataArray',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataArray: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      clientToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataArray)) {
      $dara.Model.validateArray(this.dataArray);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

