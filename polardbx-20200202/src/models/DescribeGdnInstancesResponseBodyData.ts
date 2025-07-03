// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGdnInstancesResponseBodyDataGdnInstanceList } from "./DescribeGdnInstancesResponseBodyDataGdnInstanceList";


export class DescribeGdnInstancesResponseBodyData extends $dara.Model {
  gdnInstanceList?: DescribeGdnInstancesResponseBodyDataGdnInstanceList[];
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @example
   * 130
   */
  totalNumber?: string;
  static names(): { [key: string]: string } {
    return {
      gdnInstanceList: 'GdnInstanceList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gdnInstanceList: { 'type': 'array', 'itemType': DescribeGdnInstancesResponseBodyDataGdnInstanceList },
      pageNumber: 'string',
      pageSize: 'string',
      totalNumber: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gdnInstanceList)) {
      $dara.Model.validateArray(this.gdnInstanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

