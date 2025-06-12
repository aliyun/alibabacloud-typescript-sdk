// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CheckScaleOutBalancedResponseBodyTableDetailsTableDetail } from "./CheckScaleOutBalancedResponseBodyTableDetailsTableDetail";


export class CheckScaleOutBalancedResponseBodyTableDetails extends $dara.Model {
  tableDetail?: CheckScaleOutBalancedResponseBodyTableDetailsTableDetail[];
  static names(): { [key: string]: string } {
    return {
      tableDetail: 'TableDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableDetail: { 'type': 'array', 'itemType': CheckScaleOutBalancedResponseBodyTableDetailsTableDetail },
    };
  }

  validate() {
    if(Array.isArray(this.tableDetail)) {
      $dara.Model.validateArray(this.tableDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

