// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutineRelatedRecordsResponseBodyRelatedRecords extends $dara.Model {
  /**
   * @example
   * 509348423011904
   */
  recordId?: number;
  /**
   * @example
   * test-record-1.example.com
   */
  recordName?: string;
  /**
   * @example
   * 54362329990032
   */
  siteId?: number;
  /**
   * @example
   * example.com
   */
  siteName?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      recordName: 'RecordName',
      siteId: 'SiteId',
      siteName: 'SiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'number',
      recordName: 'string',
      siteId: 'number',
      siteName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoutineRelatedRecordsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  relatedRecords?: ListRoutineRelatedRecordsResponseBodyRelatedRecords[];
  /**
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @example
   * 16
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      relatedRecords: 'RelatedRecords',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      relatedRecords: { 'type': 'array', 'itemType': ListRoutineRelatedRecordsResponseBodyRelatedRecords },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.relatedRecords)) {
      $dara.Model.validateArray(this.relatedRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

