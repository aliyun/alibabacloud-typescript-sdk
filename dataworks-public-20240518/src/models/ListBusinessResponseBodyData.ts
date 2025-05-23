// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListBusinessResponseBodyDataBusiness } from "./ListBusinessResponseBodyDataBusiness";


export class ListBusinessResponseBodyData extends $dara.Model {
  business?: ListBusinessResponseBodyDataBusiness[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 13
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      business: 'Business',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      business: { 'type': 'array', 'itemType': ListBusinessResponseBodyDataBusiness },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.business)) {
      $dara.Model.validateArray(this.business);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

