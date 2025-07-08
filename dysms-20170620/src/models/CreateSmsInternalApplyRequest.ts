// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsInternalApplyRequest extends $dara.Model {
  appDownloadLink?: string;
  country?: string;
  industry?: string;
  ownerId?: number;
  pageLink?: string;
  prodCode?: string;
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      appDownloadLink: 'AppDownloadLink',
      country: 'Country',
      industry: 'Industry',
      ownerId: 'OwnerId',
      pageLink: 'PageLink',
      prodCode: 'ProdCode',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDownloadLink: 'string',
      country: 'string',
      industry: 'string',
      ownerId: 'number',
      pageLink: 'string',
      prodCode: 'string',
      remark: 'string',
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

