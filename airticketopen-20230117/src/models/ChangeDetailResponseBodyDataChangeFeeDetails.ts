// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeDetailResponseBodyDataChangeFeeDetailsChangeFee } from "./ChangeDetailResponseBodyDataChangeFeeDetailsChangeFee";
import { ChangeDetailResponseBodyDataChangeFeeDetailsPassenger } from "./ChangeDetailResponseBodyDataChangeFeeDetailsPassenger";


export class ChangeDetailResponseBodyDataChangeFeeDetails extends $dara.Model {
  changeFee?: ChangeDetailResponseBodyDataChangeFeeDetailsChangeFee;
  passenger?: ChangeDetailResponseBodyDataChangeFeeDetailsPassenger;
  static names(): { [key: string]: string } {
    return {
      changeFee: 'change_fee',
      passenger: 'passenger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeFee: ChangeDetailResponseBodyDataChangeFeeDetailsChangeFee,
      passenger: ChangeDetailResponseBodyDataChangeFeeDetailsPassenger,
    };
  }

  validate() {
    if(this.changeFee && typeof (this.changeFee as any).validate === 'function') {
      (this.changeFee as any).validate();
    }
    if(this.passenger && typeof (this.passenger as any).validate === 'function') {
      (this.passenger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

