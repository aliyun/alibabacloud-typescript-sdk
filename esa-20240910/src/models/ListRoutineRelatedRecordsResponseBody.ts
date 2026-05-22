// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutineRelatedRecordsResponseBodyRelatedRecords extends $dara.Model {
  /**
   * @remarks
   * The record ID of the domain name.
   * 
   * @example
   * 509348423011904
   */
  recordId?: number;
  /**
   * @remarks
   * The name of the record.
   * 
   * @example
   * test-record-1.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The website ID.
   * 
   * @example
   * 54362329990032
   */
  siteId?: number;
  /**
   * @remarks
   * The website name.
   * 
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
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of records associated with the edge function.
   */
  relatedRecords?: ListRoutineRelatedRecordsResponseBodyRelatedRecords[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
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

