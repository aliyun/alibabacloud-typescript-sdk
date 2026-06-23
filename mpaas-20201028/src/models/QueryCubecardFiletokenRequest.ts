// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCubecardFiletokenRequest extends $dara.Model {
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  onexFlag?: boolean;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      onexFlag: 'OnexFlag',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      onexFlag: 'boolean',
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

