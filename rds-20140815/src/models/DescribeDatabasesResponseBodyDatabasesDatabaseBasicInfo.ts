// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabasesResponseBodyDatabasesDatabaseBasicInfo extends $dara.Model {
  basicDbProperty?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      basicDbProperty: 'BasicDbProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicDbProperty: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.basicDbProperty)) {
      $dara.Model.validateArray(this.basicDbProperty);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

