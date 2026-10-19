// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCacheAnalysisReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of big keys.
   */
  bigKeys?: { [key: string]: any }[];
  /**
   * @remarks
   * The list of hot keys.
   * > Hot key analysis is not supported. No value is returned.
   */
  hotKeys?: { [key: string]: any }[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A057C066-C3F5-4CC9-9FE4-A8D8B0DC****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned across all pages.
   * 
   * @example
   * 160
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      bigKeys: 'BigKeys',
      hotKeys: 'HotKeys',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bigKeys: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      hotKeys: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      pageNumber: 'number',
      pageRecordCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bigKeys)) {
      $dara.Model.validateArray(this.bigKeys);
    }
    if(Array.isArray(this.hotKeys)) {
      $dara.Model.validateArray(this.hotKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

