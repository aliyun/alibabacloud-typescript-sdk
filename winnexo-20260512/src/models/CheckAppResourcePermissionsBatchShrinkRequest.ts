// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAppResourcePermissionsBatchShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The platform application token issued by the console. If specified, the operation is performed as the user specified by opsUserId or opsUserCode.
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * The check item.
   * 
   * This parameter is required.
   */
  checksShrink?: string;
  /**
   * @remarks
   * The proxy user code, which is unique within the tenant. This parameter is used only when the application credential is configured as source_uid.
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * The proxy user ID, which is the WINNEXO platform user ID. This parameter is used only when the application credential is configured as winnexo_uid.
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The ID of the target platform user.
   * 
   * @example
   * 10000
   */
  resourceTenantId?: string;
  /**
   * @remarks
   * The tenant to which the target user belongs. This parameter is required for cross-tenant targets.
   * 
   * @example
   * 10086
   */
  targetUserId?: number;
  /**
   * @remarks
   * The check item.
   * 
   * @example
   * 10000
   */
  targetUserTenantId?: string;
  /**
   * @remarks
   * The ID of the tenant to which the resource belongs. If not specified, the current tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      checksShrink: 'checks',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      resourceTenantId: 'resourceTenantId',
      targetUserId: 'targetUserId',
      targetUserTenantId: 'targetUserTenantId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      checksShrink: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      resourceTenantId: 'string',
      targetUserId: 'number',
      targetUserTenantId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

