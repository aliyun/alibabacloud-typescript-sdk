// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMgsApirestRequest extends $dara.Model {
  appId?: string;
  format?: string;
  id?: number;
  tenantId?: string;
  type?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      format: 'Format',
      id: 'Id',
      tenantId: 'TenantId',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      format: 'string',
      id: 'number',
      tenantId: 'string',
      type: 'string',
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

