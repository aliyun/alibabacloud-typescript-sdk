// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsChangeFee } from "./ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsChangeFee";
import { ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsPassenger } from "./ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsPassenger";


export class ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetails extends $dara.Model {
  changeFee?: ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsChangeFee;
  passenger?: ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsPassenger;
  static names(): { [key: string]: string } {
    return {
      changeFee: 'change_fee',
      passenger: 'passenger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeFee: ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsChangeFee,
      passenger: ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsPassenger,
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

