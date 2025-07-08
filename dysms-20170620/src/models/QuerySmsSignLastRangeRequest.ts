// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsSignLastRangeRequest extends $dara.Model {
  auditState?: string;
  bizType?: string;
  isGlobeSign?: number;
  limit?: number;
  needDefaultSign?: boolean;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      auditState: 'AuditState',
      bizType: 'BizType',
      isGlobeSign: 'IsGlobeSign',
      limit: 'Limit',
      needDefaultSign: 'NeedDefaultSign',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditState: 'string',
      bizType: 'string',
      isGlobeSign: 'number',
      limit: 'number',
      needDefaultSign: 'boolean',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

