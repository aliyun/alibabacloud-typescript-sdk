// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabasesResponseBodyDatabasesDatabaseRuntimeInfo extends $dara.Model {
  runtimeDbProperty?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      runtimeDbProperty: 'RuntimeDbProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runtimeDbProperty: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.runtimeDbProperty)) {
      $dara.Model.validateArray(this.runtimeDbProperty);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

