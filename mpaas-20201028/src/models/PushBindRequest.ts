// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushBindRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deliveryToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  osType?: number;
  phoneNumber?: string;
  tenantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      deliveryToken: 'DeliveryToken',
      osType: 'OsType',
      phoneNumber: 'PhoneNumber',
      tenantId: 'TenantId',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      deliveryToken: 'string',
      osType: 'number',
      phoneNumber: 'string',
      tenantId: 'string',
      userId: 'string',
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

