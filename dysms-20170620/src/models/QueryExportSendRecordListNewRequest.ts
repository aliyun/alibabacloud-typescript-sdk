// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryExportSendRecordListNewRequest extends $dara.Model {
  applyStatus?: number;
  /**
   * @example
   * SMS_TEMPLATE_EXPORT / SMS_SIGN_EXPORT
   */
  bizType?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      applyStatus: 'ApplyStatus',
      bizType: 'BizType',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyStatus: 'number',
      bizType: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

