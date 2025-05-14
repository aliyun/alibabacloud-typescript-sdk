// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMultiDimTableRecordsResponseBodyRecords } from "./ListMultiDimTableRecordsResponseBodyRecords";


export class ListMultiDimTableRecordsResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @example
   * 1234567890
   */
  nextToken?: string;
  /**
   * @example
   * []
   */
  records?: ListMultiDimTableRecordsResponseBodyRecords[];
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
      records: 'records',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      nextToken: 'string',
      records: { 'type': 'array', 'itemType': ListMultiDimTableRecordsResponseBodyRecords },
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

