// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabasesResponseBodyDatabasesDatabaseAdvancedInfo extends $dara.Model {
  advancedDbProperty?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      advancedDbProperty: 'AdvancedDbProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedDbProperty: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.advancedDbProperty)) {
      $dara.Model.validateArray(this.advancedDbProperty);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

