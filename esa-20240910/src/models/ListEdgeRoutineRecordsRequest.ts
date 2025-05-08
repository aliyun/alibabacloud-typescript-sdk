// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeRoutineRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **500**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The match mode to filter the record names.
   * 
   * *   **fuzzy**: fuzzy match.
   * *   **prefix**: match by prefix.
   * *   **suffix**: match by suffix.
   * *   **exact** (default): exact match .
   * 
   * @example
   * fuzzy
   */
  recordMatchType?: string;
  /**
   * @remarks
   * The record name.
   * 
   * @example
   * a.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The website ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recordMatchType: 'RecordMatchType',
      recordName: 'RecordName',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      recordMatchType: 'string',
      recordName: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

