// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPartitionsByNamesRequest extends $dara.Model {
  /**
   * @remarks
   * 分区规格列表。
   */
  specs?: { [key: string]: string }[];
  static names(): { [key: string]: string } {
    return {
      specs: 'specs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.specs)) {
      $dara.Model.validateArray(this.specs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

