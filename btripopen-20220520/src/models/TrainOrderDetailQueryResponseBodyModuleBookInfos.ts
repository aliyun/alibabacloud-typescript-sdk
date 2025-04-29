// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainOrderDetailQueryResponseBodyModuleBookInfosBookTrainInfos } from "./TrainOrderDetailQueryResponseBodyModuleBookInfosBookTrainInfos";


export class TrainOrderDetailQueryResponseBodyModuleBookInfos extends $dara.Model {
  bookTrainInfos?: TrainOrderDetailQueryResponseBodyModuleBookInfosBookTrainInfos[];
  /**
   * @example
   * 1111
   */
  failCode?: string;
  failMsg?: string;
  /**
   * @example
   * 2024-05-06 15:19:01
   */
  lastPayTime?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * GW123456
   */
  ticketNo?: string;
  static names(): { [key: string]: string } {
    return {
      bookTrainInfos: 'book_train_infos',
      failCode: 'fail_code',
      failMsg: 'fail_msg',
      lastPayTime: 'last_pay_time',
      status: 'status',
      ticketNo: 'ticket_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookTrainInfos: { 'type': 'array', 'itemType': TrainOrderDetailQueryResponseBodyModuleBookInfosBookTrainInfos },
      failCode: 'string',
      failMsg: 'string',
      lastPayTime: 'string',
      status: 'number',
      ticketNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bookTrainInfos)) {
      $dara.Model.validateArray(this.bookTrainInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

