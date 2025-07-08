// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsSignLastRangeNewRequest extends $dara.Model {
  auditState?: string;
  isGlobeSign?: number;
  limit?: number;
  needDefaultSign?: boolean;
  ownerId?: number;
  pageIndex?: number;
  pageNo?: number;
  pageSize?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sceneType?: number;
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      auditState: 'AuditState',
      isGlobeSign: 'IsGlobeSign',
      limit: 'Limit',
      needDefaultSign: 'NeedDefaultSign',
      ownerId: 'OwnerId',
      pageIndex: 'PageIndex',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sceneType: 'SceneType',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditState: 'string',
      isGlobeSign: 'number',
      limit: 'number',
      needDefaultSign: 'boolean',
      ownerId: 'number',
      pageIndex: 'number',
      pageNo: 'number',
      pageSize: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sceneType: 'number',
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

