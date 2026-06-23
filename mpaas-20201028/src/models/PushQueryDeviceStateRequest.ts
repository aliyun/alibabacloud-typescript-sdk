// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushQueryDeviceStateRequest extends $dara.Model {
  appId?: string;
  target?: string;
  targetType?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      target: 'Target',
      targetType: 'TargetType',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      target: 'string',
      targetType: 'number',
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

