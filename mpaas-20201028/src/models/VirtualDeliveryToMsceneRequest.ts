// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VirtualDeliveryToMsceneRequest extends $dara.Model {
  /**
   * @example
   * ALIPUBE5C3F6D091419
   */
  appId?: string;
  /**
   * @example
   * test_custom_id
   */
  customId?: string;
  /**
   * @example
   * 1000001221323232
   */
  miniProgramId?: string;
  /**
   * @example
   * mPaaS_Goosefish
   */
  platformId?: string;
  /**
   * @example
   * IDUKCGEB
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
      customId: 'CustomId',
      miniProgramId: 'MiniProgramId',
      platformId: 'PlatformId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      customId: 'string',
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

