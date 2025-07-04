// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataSourceDeployResponseBodyResultExtendOdps extends $dara.Model {
  partitions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      partitions: 'partitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.partitions) {
      $dara.Model.validateMap(this.partitions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

