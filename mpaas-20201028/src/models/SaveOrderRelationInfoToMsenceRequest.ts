// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveOrderRelationInfoToMsenceRequest extends $dara.Model {
  amount?: number;
  appId?: string;
  bizOrderId?: string;
  bizOrderStatus?: number;
  clientType?: string;
  cpExtra?: string;
  customId?: string;
  itemId?: string;
  itemTitle?: string;
  miniProgramId?: string;
  openUid?: string;
  platformId?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      appId: 'AppId',
      bizOrderId: 'BizOrderId',
      bizOrderStatus: 'BizOrderStatus',
      clientType: 'ClientType',
      cpExtra: 'CpExtra',
      customId: 'CustomId',
      itemId: 'ItemId',
      itemTitle: 'ItemTitle',
      miniProgramId: 'MiniProgramId',
      openUid: 'OpenUid',
      platformId: 'PlatformId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      appId: 'string',
      bizOrderId: 'string',
      bizOrderStatus: 'number',
      clientType: 'string',
      cpExtra: 'string',
      customId: 'string',
      itemId: 'string',
      itemTitle: 'string',
      miniProgramId: 'string',
      openUid: 'string',
      platformId: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

