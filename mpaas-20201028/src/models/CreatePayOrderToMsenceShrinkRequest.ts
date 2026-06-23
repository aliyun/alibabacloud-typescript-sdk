// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePayOrderToMsenceShrinkRequest extends $dara.Model {
  amount?: number;
  appId?: string;
  authToken?: string;
  customId?: string;
  extraInfoShrink?: string;
  miniProgramId?: string;
  platformId?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      appId: 'AppId',
      authToken: 'AuthToken',
      customId: 'CustomId',
      extraInfoShrink: 'ExtraInfo',
      miniProgramId: 'MiniProgramId',
      platformId: 'PlatformId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      appId: 'string',
      authToken: 'string',
      customId: 'string',
      extraInfoShrink: 'string',
      miniProgramId: 'string',
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

