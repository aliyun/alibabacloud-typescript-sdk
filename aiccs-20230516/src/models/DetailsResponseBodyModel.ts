// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetailsResponseBodyModelList } from "./DetailsResponseBodyModelList";


export class DetailsResponseBodyModel extends $dara.Model {
  list?: DetailsResponseBodyModelList[];
  /**
   * @example
   * 100
   */
  pageNo?: number;
  /**
   * @example
   * 94
   */
  pageSize?: number;
  /**
   * @example
   * 79
   */
  totalCount?: number;
  /**
   * @example
   * 71.8132
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DetailsResponseBodyModelList },
      pageNo: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

