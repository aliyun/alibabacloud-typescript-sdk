// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuditHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**. Maximum value: **100**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sorting rule of the results. Valid values:
   * *   **CreationTime:Desc**: sorts the results based on the creation time in descending order. This is the default value.
   * *   **CreationTime:Asc**: sorts the results based on the creation time in ascending order.
   * 
   * @example
   * CreationTime:Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The ID of the video.
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

