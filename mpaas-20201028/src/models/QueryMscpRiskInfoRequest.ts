// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMscpRiskInfoRequest extends $dara.Model {
  apdidToken?: string;
  appId?: string;
  tenantId?: string;
  terminalType?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apdidToken: 'ApdidToken',
      appId: 'AppId',
      tenantId: 'TenantId',
      terminalType: 'TerminalType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apdidToken: 'string',
      appId: 'string',
      tenantId: 'string',
      terminalType: 'string',
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

