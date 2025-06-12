// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResult4QueryInstancePrice4ModifyResponseBodyDataPriceList } from "./GetResult4queryInstancePrice4modifyResponseBodyDataPriceList";


export class GetResult4QueryInstancePrice4ModifyResponseBodyData extends $dara.Model {
  priceList?: GetResult4QueryInstancePrice4ModifyResponseBodyDataPriceList[];
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * d9a3e99b-6954-4a16-ad51-954db4a528b7
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      priceList: 'PriceList',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceList: { 'type': 'array', 'itemType': GetResult4QueryInstancePrice4ModifyResponseBodyDataPriceList },
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.priceList)) {
      $dara.Model.validateArray(this.priceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

