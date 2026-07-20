// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRbacUserRolesRequest extends $dara.Model {
  applicationUserId?: string;
  bizId?: string;
  orderColumn?: string;
  orderType?: string;
  pageNum?: number;
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

