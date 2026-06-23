// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePayOrderToMsenceRequest extends $dara.Model {
  amount?: number;
  appId?: string;
  authToken?: string;
  customId?: string;
  extraInfo?: { [key: string]: any };
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
      extraInfo: 'ExtraInfo',
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
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      miniProgramId: 'string',
      platformId: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

