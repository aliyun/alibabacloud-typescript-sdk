// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFpShotDBResponseBodyFpShotDBListFpShotDB } from "./ListFpShotDbresponseBodyFpShotDblistFpShotDb";


export class ListFpShotDBResponseBodyFpShotDBList extends $dara.Model {
  fpShotDB?: ListFpShotDBResponseBodyFpShotDBListFpShotDB[];
  static names(): { [key: string]: string } {
    return {
      fpShotDB: 'FpShotDB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotDB: { 'type': 'array', 'itemType': ListFpShotDBResponseBodyFpShotDBListFpShotDB },
    };
  }

  validate() {
    if(Array.isArray(this.fpShotDB)) {
      $dara.Model.validateArray(this.fpShotDB);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

