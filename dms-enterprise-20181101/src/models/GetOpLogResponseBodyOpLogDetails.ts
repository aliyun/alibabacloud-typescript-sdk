// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetOpLogResponseBodyOpLogDetailsOpLogDetail } from "./GetOpLogResponseBodyOpLogDetailsOpLogDetail";


export class GetOpLogResponseBodyOpLogDetails extends $dara.Model {
  opLogDetail?: GetOpLogResponseBodyOpLogDetailsOpLogDetail[];
  static names(): { [key: string]: string } {
    return {
      opLogDetail: 'OpLogDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opLogDetail: { 'type': 'array', 'itemType': GetOpLogResponseBodyOpLogDetailsOpLogDetail },
    };
  }

  validate() {
    if(Array.isArray(this.opLogDetail)) {
      $dara.Model.validateArray(this.opLogDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

