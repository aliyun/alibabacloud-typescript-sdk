// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeDataServiceApiRequestRevokeCommand extends $dara.Model {
  /**
   * @remarks
   * The API ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1021
   */
  apiId?: number;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 1203
   */
  appId?: number;
  /**
   * @remarks
   * The permission type. Valid values:
   * - USE: use permission
   * - DELEGATION: delegation permission.
   * 
   * @example
   * USE
   */
  authType?: string;
  /**
   * @remarks
   * The API environment. Valid values:
   * - DEV: development environment
   * - PROD: production environment.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * The authorization object type. Valid values:
   * - APP: application
   * - USER: user.
   * 
   * @example
   * APP
   */
  granteeType?: string;
  /**
   * @remarks
   * The reason for the request.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  reason?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 12345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      appId: 'AppId',
      authType: 'AuthType',
      env: 'Env',
      granteeType: 'GranteeType',
      reason: 'Reason',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      appId: 'number',
      authType: 'string',
      env: 'string',
      granteeType: 'string',
      reason: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeDataServiceApiRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The data service project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 102102
   */
  projectId?: number;
  /**
   * @remarks
   * The revoke instruction.
   * 
   * This parameter is required.
   */
  revokeCommand?: RevokeDataServiceApiRequestRevokeCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      revokeCommand: 'RevokeCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      projectId: 'number',
      revokeCommand: RevokeDataServiceApiRequestRevokeCommand,
    };
  }

  validate() {
    if(this.revokeCommand && typeof (this.revokeCommand as any).validate === 'function') {
      (this.revokeCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

