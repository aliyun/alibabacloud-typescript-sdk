// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserProduceOperateLogsResponseBodyData } from "./ListUserProduceOperateLogsResponseBodyData";


export class ListUserProduceOperateLogsResponseBody extends $dara.Model {
  data?: ListUserProduceOperateLogsResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 0DCBE2FF-2DFC-56DC-9A15-BDF27B7FFB1B
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 6
   */
  totalItemNum?: number;
  /**
   * @example
   * 23
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListUserProduceOperateLogsResponseBodyData },
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

