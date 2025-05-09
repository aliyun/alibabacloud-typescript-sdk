// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteDataCorrectRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters that are required to perform the data change.
   * 
   * ```
   * 
   * json
   * "actionDetail" : {
   *     "startTime" :"2021-07-01 00:00:00", // Specify the start time to change data. If you want to immediately change data, you do not need to set this parameter. 
   *     "endTime" : "2021-07-01 01:00:00", // Specify the end time to change data. If you want to immediately change data, you do not need to set this parameter. 
   *     "transaction" : false, // Specify whether to change data as a transaction. 
   *     "backupData" : true // Specify whether to back up data. 
   *   }
   * ```
   * 
   * @example
   * { "startTime" : "2021-07-01 00:00:00", "endTime" : "2021-07-01 01:00:00", "transaction" : false, "backupData" : true }
   */
  actionDetail?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the ticket. You can call the [ListOrders](https://help.aliyun.com/document_detail/144643.html) operation to query the ID of the ticket.
   * 
   * This parameter is required.
   * 
   * @example
   * 406****
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to call the API operation.
   * 
   * @example
   * 21400447956867****
   */
  realLoginUserUid?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: string;
  static names(): { [key: string]: string } {
    return {
      actionDetail: 'ActionDetail',
      orderId: 'OrderId',
      realLoginUserUid: 'RealLoginUserUid',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      orderId: 'number',
      realLoginUserUid: 'string',
      tid: 'string',
    };
  }

  validate() {
    if(this.actionDetail) {
      $dara.Model.validateMap(this.actionDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

