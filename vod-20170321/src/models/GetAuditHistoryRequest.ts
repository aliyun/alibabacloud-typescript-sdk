// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuditHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**. Maximum value: **100**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sorting method for results. Valid values:
   * 
   * - **CreationTime:Desc** (default): sorts results by creation time in descending order.
   * - **CreationTime:Asc**: sorts results by creation time in ascending order.
   * 
   * @example
   * CreationTime:Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The video ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 93ab850b4f6f44*****6e91d24d81d4
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

