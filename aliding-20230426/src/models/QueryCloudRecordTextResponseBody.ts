// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCloudRecordTextResponseBodyParagraphList } from "./QueryCloudRecordTextResponseBodyParagraphList";


export class QueryCloudRecordTextResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  paragraphList?: QueryCloudRecordTextResponseBodyParagraphList[];
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      paragraphList: 'paragraphList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      paragraphList: { 'type': 'array', 'itemType': QueryCloudRecordTextResponseBodyParagraphList },
      requestId: 'string',
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

