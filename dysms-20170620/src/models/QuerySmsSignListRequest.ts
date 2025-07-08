// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsSignListRequest extends $dara.Model {
  auditState?: string;
  bizType?: string;
  isGlobeSign?: number;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  serviceType?: string;
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      auditState: 'AuditState',
      bizType: 'BizType',
      isGlobeSign: 'IsGlobeSign',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serviceType: 'ServiceType',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditState: 'string',
      bizType: 'string',
      isGlobeSign: 'number',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serviceType: 'string',
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

