// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeDataServiceApiRequestRevokeCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1021
   */
  apiId?: number;
  /**
   * @example
   * 1203
   */
  appId?: number;
  /**
   * @example
   * USE
   */
  authType?: string;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @example
   * APP
   */
  granteeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  reason?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 102102
   */
  projectId?: number;
  /**
   * @remarks
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

