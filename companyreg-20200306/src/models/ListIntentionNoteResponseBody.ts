// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntentionNoteResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2022-01-25 10:21:38
   */
  createTime?: string;
  /**
   * @example
   * I20210420142416000001
   */
  intentionBizId?: string;
  note?: string;
  /**
   * @example
   * 1
   */
  source?: number;
  /**
   * @example
   * 1
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      intentionBizId: 'IntentionBizId',
      note: 'Note',
      source: 'Source',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      intentionBizId: 'string',
      note: 'string',
      source: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentionNoteResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  currentPageNum?: number;
  data?: ListIntentionNoteResponseBodyData[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 6A603AA0-73BA-52B3-AC7D-0F846ECF7A9D
   */
  requestId?: string;
  /**
   * @example
   * 3
   */
  totalItemNum?: number;
  /**
   * @example
   * 1
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: { 'type': 'array', 'itemType': ListIntentionNoteResponseBodyData },
      pageSize: 'number',
      requestId: 'string',
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

