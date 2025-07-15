// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveHttpsDomainListRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * demo.aliyun.com
   */
  keyword?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Valid values: **1 to 10000**.
   * 
   * @example
   * 5
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

