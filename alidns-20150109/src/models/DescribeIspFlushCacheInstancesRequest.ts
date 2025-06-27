// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIspFlushCacheInstancesRequest extends $dara.Model {
  direction?: string;
  isp?: string;
  keyword?: string;
  lang?: string;
  orderBy?: string;
  pageNumber?: number;
  pageSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      isp: 'Isp',
      keyword: 'Keyword',
      lang: 'Lang',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      isp: 'string',
      keyword: 'string',
      lang: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

