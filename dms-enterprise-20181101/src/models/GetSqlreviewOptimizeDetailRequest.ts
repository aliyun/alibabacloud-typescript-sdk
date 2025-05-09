// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSQLReviewOptimizeDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The key that is used to query the details of optimization suggestions. You can call the [ListSQLReviewOriginSQL](https://help.aliyun.com/document_detail/257870.html) operation to query the key.
   * 
   * This parameter is required.
   * 
   * @example
   * a57e54ec5433475ea3082d882fdb****
   */
  SQLReviewQueryKey?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to query the ID of the tenant.
   * 
   * @example
   * 1
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      SQLReviewQueryKey: 'SQLReviewQueryKey',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLReviewQueryKey: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

