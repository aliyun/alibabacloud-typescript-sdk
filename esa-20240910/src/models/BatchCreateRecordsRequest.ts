// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchCreateRecordsRequestRecordList } from "./BatchCreateRecordsRequestRecordList";


export class BatchCreateRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of DNS records to be created.
   * 
   * This parameter is required.
   */
  recordList?: BatchCreateRecordsRequestRecordList[];
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      recordList: 'RecordList',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordList: { 'type': 'array', 'itemType': BatchCreateRecordsRequestRecordList },
      siteId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.recordList)) {
      $dara.Model.validateArray(this.recordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

