// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePlayListResponseBodyPlayList } from "./DescribePlayListResponseBodyPlayList";


export class DescribePlayListResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  playList?: DescribePlayListResponseBodyPlayList[];
  /**
   * @remarks
   * Id
   * 
   * @example
   * B960580D-26FA-5547-8AFC-3CDC812DBF27
   */
  requestId?: string;
  /**
   * @example
   * 49
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      playList: 'PlayList',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      playList: { 'type': 'array', 'itemType': DescribePlayListResponseBodyPlayList },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.playList)) {
      $dara.Model.validateArray(this.playList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

