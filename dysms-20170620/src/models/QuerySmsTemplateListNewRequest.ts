// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsTemplateListNewRequestTags } from "./QuerySmsTemplateListNewRequestTags";


export class QuerySmsTemplateListNewRequest extends $dara.Model {
  auditState?: string;
  bizType?: string;
  intlType?: number;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  prodCode?: string;
  prodType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tagListString?: string;
  tags?: QuerySmsTemplateListNewRequestTags[];
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      auditState: 'AuditState',
      bizType: 'BizType',
      intlType: 'IntlType',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      prodCode: 'ProdCode',
      prodType: 'ProdType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tagListString: 'TagListString',
      tags: 'Tags',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditState: 'string',
      bizType: 'string',
      intlType: 'number',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      prodCode: 'string',
      prodType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tagListString: 'string',
      tags: { 'type': 'array', 'itemType': QuerySmsTemplateListNewRequestTags },
      templateName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

