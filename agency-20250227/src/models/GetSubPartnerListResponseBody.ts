// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSubPartnerListResponseBodySubPartnerList } from "./GetSubPartnerListResponseBodySubPartnerList";


export class GetSubPartnerListResponseBody extends $dara.Model {
  message?: string;
  /**
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: string;
  /**
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  subPartnerList?: GetSubPartnerListResponseBodySubPartnerList[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subPartnerList: 'SubPartnerList',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      pageNo: 'string',
      pageSize: 'string',
      requestId: 'string',
      subPartnerList: { 'type': 'array', 'itemType': GetSubPartnerListResponseBodySubPartnerList },
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.subPartnerList)) {
      $dara.Model.validateArray(this.subPartnerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

