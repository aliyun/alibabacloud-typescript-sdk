// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWarningConfigResponseBodyDataWarningConfigInfoRidList extends $dara.Model {
  ridList?: string[];
  static names(): { [key: string]: string } {
    return {
      ridList: 'RidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ridList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ridList)) {
      $dara.Model.validateArray(this.ridList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

