// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentMemoryResponseBodyDataData extends $dara.Model {
  /**
   * @remarks
   * The memory content.
   * 
   * @example
   * Diamond pricing analysis requires examining the skewness and outliers of the distribution of each feature.
   */
  content?: string;
  /**
   * @remarks
   * The memory source ID.
   * 
   * @example
   * w3xa1********x6y8zm
   */
  fromId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-07-29T07:11:23Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2026-07-29T07:11:23Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The memory hit level (hotness).
   * 
   * @example
   * 1
   */
  hintLevel?: number;
  /**
   * @remarks
   * The memory source.
   * 
   * @example
   * session
   */
  memFrom?: string;
  /**
   * @remarks
   * The memory status.
   * 
   * @example
   * memorized
   */
  status?: string;
  /**
   * @remarks
   * The memory UUID.
   * 
   * @example
   * 8zm3w********g3yxa1
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      fromId: 'FromId',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      hintLevel: 'HintLevel',
      memFrom: 'MemFrom',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fromId: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      hintLevel: 'number',
      memFrom: 'string',
      status: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataAgentMemoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The response struct.
   */
  data?: ListDataAgentMemoryResponseBodyDataData[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDataAgentMemoryResponseBodyDataData },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
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

export class ListDataAgentMemoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of Success indicates success.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The response struct.
   */
  data?: ListDataAgentMemoryResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidTid
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.                                 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The operation timestamp.
   * 
   * @example
   * 1768270172
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListDataAgentMemoryResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      timestamp: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

