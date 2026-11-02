// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportGatewayApisRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apiIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tenantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      appId: 'AppId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: { 'type': 'array', 'itemType': 'number' },
      appId: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiIds)) {
      $dara.Model.validateArray(this.apiIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

