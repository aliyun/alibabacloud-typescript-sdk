// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySessionInfoResponseBodyQueryResourceInfoList extends $dara.Model {
  /**
   * @example
   * a169e9ec18404edc9972afd80866dc97
   */
  sessionId?: string;
  /**
   * @example
   * FREE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'sessionId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionInfoResponseBody extends $dara.Model {
  queryResourceInfoList?: QuerySessionInfoResponseBodyQueryResourceInfoList[];
  /**
   * @example
   * 4D902811-B75C-5D1B-8882-D515F8E2F977
   */
  requestId?: string;
  /**
   * @example
   * 26
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      queryResourceInfoList: 'queryResourceInfoList',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResourceInfoList: { 'type': 'array', 'itemType': QuerySessionInfoResponseBodyQueryResourceInfoList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.queryResourceInfoList)) {
      $dara.Model.validateArray(this.queryResourceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

