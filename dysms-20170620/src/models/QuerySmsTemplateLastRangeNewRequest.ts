// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsTemplateLastRangeNewRequest extends $dara.Model {
  bizType?: string;
  filterAnyParam?: boolean;
  limit?: number;
  needDefaultTemplate?: boolean;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  prodCode?: string;
  prodId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      filterAnyParam: 'FilterAnyParam',
      limit: 'Limit',
      needDefaultTemplate: 'NeedDefaultTemplate',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      prodCode: 'ProdCode',
      prodId: 'ProdId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      filterAnyParam: 'boolean',
      limit: 'number',
      needDefaultTemplate: 'boolean',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      prodCode: 'string',
      prodId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

