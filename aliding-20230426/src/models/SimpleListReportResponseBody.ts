// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SimpleListReportResponseBodyDataList } from "./SimpleListReportResponseBodyDataList";


export class SimpleListReportResponseBody extends $dara.Model {
  dataList?: SimpleListReportResponseBodyDataList[];
  /**
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @example
   * 12312131231
   */
  nextCursor?: number;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'dataList',
      hasMore: 'hasMore',
      nextCursor: 'nextCursor',
      requestId: 'requestId',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': SimpleListReportResponseBodyDataList },
      hasMore: 'boolean',
      nextCursor: 'number',
      requestId: 'string',
      size: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

