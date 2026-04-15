// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthTokenToMsenceRequest extends $dara.Model {
  /**
   * @example
   * ALIPUBE5C3F6D091419
   */
  appId?: string;
  /**
   * @example
   * KUAj7XWYYf
   */
  authCode?: string;
  /**
   * @example
   * 123321
   */
  miniProgramId?: string;
  /**
   * @example
   * mPaaS_Goosefish
   */
  platformId?: string;
  /**
   * @example
   * NPHTGKNR
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
      authCode: 'AuthCode',
      miniProgramId: 'MiniProgramId',
      platformId: 'PlatformId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      authCode: 'string',
      miniProgramId: 'string',
      platformId: 'string',
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

