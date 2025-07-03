// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBinaryLogListResponseBodyLogList } from "./DescribeBinaryLogListResponseBodyLogList";


export class DescribeBinaryLogListResponseBody extends $dara.Model {
  logList?: DescribeBinaryLogListResponseBodyLogList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * 2DFF784E-DC31-5BBC-9B25-9261CD9E0AA9
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      logList: 'LogList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logList: { 'type': 'array', 'itemType': DescribeBinaryLogListResponseBodyLogList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalNumber: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logList)) {
      $dara.Model.validateArray(this.logList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

