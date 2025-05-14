// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReceiverListReportResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @example
   * 132131312312
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
  useridList?: string[];
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      nextCursor: 'nextCursor',
      requestId: 'requestId',
      useridList: 'useridList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      nextCursor: 'number',
      requestId: 'string',
      useridList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.useridList)) {
      $dara.Model.validateArray(this.useridList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

