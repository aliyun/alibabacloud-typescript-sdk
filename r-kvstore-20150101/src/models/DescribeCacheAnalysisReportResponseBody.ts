// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCacheAnalysisReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the large keys.
   */
  bigKeys?: { [key: string]: any }[];
  /**
   * @remarks
   * Details of the hotkeys.
   * 
   * > This parameter is not returned because Tair (Redis OSS-compatible) does not support hotkey analytics.
   */
  hotKeys?: { [key: string]: any }[];
  /**
   * @remarks
   * The page number of the returned page.
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
   * The ID of the request.
   * 
   * @example
   * A057C066-C3F5-4CC9-9FE4-A8D8B0DC****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
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

