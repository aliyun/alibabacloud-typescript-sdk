// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDailyBillInfoLeafNewResponseBodyListDailyBillDetailInfoDTO } from "./QueryDailyBillInfoLeafNewResponseBodyListDailyBillDetailInfoDto";


export class QueryDailyBillInfoLeafNewResponseBodyList extends $dara.Model {
  dailyBillDetailInfoDTO?: QueryDailyBillInfoLeafNewResponseBodyListDailyBillDetailInfoDTO[];
  static names(): { [key: string]: string } {
    return {
      dailyBillDetailInfoDTO: 'DailyBillDetailInfoDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyBillDetailInfoDTO: { 'type': 'array', 'itemType': QueryDailyBillInfoLeafNewResponseBodyListDailyBillDetailInfoDTO },
    };
  }

  validate() {
    if(Array.isArray(this.dailyBillDetailInfoDTO)) {
      $dara.Model.validateArray(this.dailyBillDetailInfoDTO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

