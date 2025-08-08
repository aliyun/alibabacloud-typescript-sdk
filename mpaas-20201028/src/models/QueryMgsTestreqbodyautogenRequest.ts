// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMgsTestreqbodyautogenRequest extends $dara.Model {
  appId?: string;
  format?: string;
  mpaasMappcenterMgsTestreqbodyautogenQueryJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      format: 'Format',
      mpaasMappcenterMgsTestreqbodyautogenQueryJsonStr: 'MpaasMappcenterMgsTestreqbodyautogenQueryJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      format: 'string',
      mpaasMappcenterMgsTestreqbodyautogenQueryJsonStr: 'string',
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

