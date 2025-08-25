// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushQueryDeviceStateRequest extends $dara.Model {
  /**
   * @example
   * ALIPUB9A63274111812
   */
  appId?: string;
  /**
   * @example
   * 8985d1b78d135e10dc26703379369879
   */
  target?: string;
  /**
   * @example
   * 2
   */
  targetType?: number;
  /**
   * @example
   * BJUVXFNW
   */
  tenantId?: string;
  /**
   * @example
   * default
   */
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

