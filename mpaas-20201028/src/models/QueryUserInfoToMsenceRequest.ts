// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserInfoToMsenceRequest extends $dara.Model {
  /**
   * @example
   * ALIPUBE5C3F6D091419
   */
  appId?: string;
  /**
   * @example
   * NPHTGKNR
   */
  authToken?: string;
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
   * JGBGDUWU
   */
  tenantId?: string;
  /**
   * @example
   * preProd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      authToken: 'AuthToken',
      miniProgramId: 'MiniProgramId',
      platformId: 'PlatformId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      authToken: 'string',
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

