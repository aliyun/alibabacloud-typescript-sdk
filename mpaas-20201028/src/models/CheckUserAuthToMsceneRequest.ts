// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckUserAuthToMsceneRequest extends $dara.Model {
  /**
   * @example
   * ALIPUBE5C3F6D091419
   */
  appId?: string;
  /**
   * @example
   * 111
   */
  authToken?: string;
  /**
   * @example
   * 9999202604200001
   */
  miniProgramId?: string;
  /**
   * @example
   * QSz8YsUpMRiCAv0yKLi0OVGd0lQSg9CQkYI148GNIWE=
   */
  openUid?: string;
  /**
   * @example
   * mPaaS_Goosefish
   */
  platformId?: string;
  /**
   * @example
   * ZXCXMAHQ-zh_CN
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
      authToken: 'AuthToken',
      miniProgramId: 'MiniProgramId',
      openUid: 'OpenUid',
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
      openUid: 'string',
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

