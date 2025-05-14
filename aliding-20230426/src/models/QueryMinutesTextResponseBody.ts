// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMinutesTextResponseBodyParagraphList } from "./QueryMinutesTextResponseBodyParagraphList";


export class QueryMinutesTextResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @example
   * 0
   */
  nextToken?: string;
  paragraphList?: QueryMinutesTextResponseBodyParagraphList[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      nextToken: 'nextToken',
      paragraphList: 'paragraphList',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      nextToken: 'string',
      paragraphList: { 'type': 'array', 'itemType': QueryMinutesTextResponseBodyParagraphList },
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paragraphList)) {
      $dara.Model.validateArray(this.paragraphList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

