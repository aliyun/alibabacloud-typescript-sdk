// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSmsSignResponseBodySignIspRegisterDetailListRegisterStatusReasons } from "./GetSmsSignResponseBodySignIspRegisterDetailListRegisterStatusReasons";


export class GetSmsSignResponseBodySignIspRegisterDetailList extends $dara.Model {
  operatorCode?: string;
  operatorCompleteTime?: string;
  registerStatus?: number;
  registerStatusReasons?: GetSmsSignResponseBodySignIspRegisterDetailListRegisterStatusReasons[];
  static names(): { [key: string]: string } {
    return {
      operatorCode: 'OperatorCode',
      operatorCompleteTime: 'OperatorCompleteTime',
      registerStatus: 'RegisterStatus',
      registerStatusReasons: 'RegisterStatusReasons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorCode: 'string',
      operatorCompleteTime: 'string',
      registerStatus: 'number',
      registerStatusReasons: { 'type': 'array', 'itemType': GetSmsSignResponseBodySignIspRegisterDetailListRegisterStatusReasons },
    };
  }

  validate() {
    if(Array.isArray(this.registerStatusReasons)) {
      $dara.Model.validateArray(this.registerStatusReasons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

