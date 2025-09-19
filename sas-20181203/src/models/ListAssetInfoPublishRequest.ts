// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssetInfoPublishRequest extends $dara.Model {
  /**
   * @remarks
   * An extended parameter. This parameter is temporarily unavailable.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The UUIDs of the servers that you want to query.
   * 
   * This parameter is required.
   */
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

