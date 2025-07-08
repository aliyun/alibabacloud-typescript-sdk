// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDigitalTemplateLastRangeNewRequest extends $dara.Model {
  auditState?: string;
  bizType?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  prodCode?: string;
  prodType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      auditState: 'AuditState',
      bizType: 'BizType',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      prodCode: 'ProdCode',
      prodType: 'ProdType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditState: 'string',
      bizType: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      prodCode: 'string',
      prodType: 'string',
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

