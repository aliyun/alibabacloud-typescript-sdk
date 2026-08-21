// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayTopVideosRequest extends $dara.Model {
  /**
   * @remarks
   * The date to query. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2016-06-29T13:00:00Z
   */
  bizDate?: string;
  ownerId?: number;
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
   * The number of entries per page. Default value: **100**. Maximum value: **1000**.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

