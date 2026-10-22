// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRbacUserRolesRequest extends $dara.Model {
  /**
   * @remarks
   * The site end-user ID.
   * 
   * @example
   * 11
   */
  applicationUserId?: string;
  /**
   * @remarks
   * The business instance ID.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The field used for sorting.
   * 
   * @example
   * gmtCreated
   */
  orderColumn?: string;
  /**
   * @remarks
   * The sort type. Valid values: ASC and DESC.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      applicationUserId: 'ApplicationUserId',
      bizId: 'BizId',
      orderColumn: 'OrderColumn',
      orderType: 'OrderType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationUserId: 'string',
      bizId: 'string',
      orderColumn: 'string',
      orderType: 'string',
      pageNum: 'number',
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

