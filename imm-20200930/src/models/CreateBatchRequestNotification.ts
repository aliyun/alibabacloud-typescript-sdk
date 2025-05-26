// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MNS } from "./Mns";


export class CreateBatchRequestNotification extends $dara.Model {
  /**
   * @remarks
   * The SMQ notification settings.
   */
  MNS?: MNS;
  static names(): { [key: string]: string } {
    return {
      MNS: 'MNS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MNS: MNS,
    };
  }

  validate() {
    if(this.MNS && typeof (this.MNS as any).validate === 'function') {
      (this.MNS as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

