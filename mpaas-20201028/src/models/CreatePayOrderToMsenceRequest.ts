// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePayOrderToMsenceRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  amount?: number;
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
   * test_custom_id
   */
  customId?: string;
  /**
   * @example
   * {}
   */
  extraInfo?: { [key: string]: any };
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
      amount: 'Amount',
      appId: 'AppId',
      authToken: 'AuthToken',
      customId: 'CustomId',
      extraInfo: 'ExtraInfo',
      miniProgramId: 'MiniProgramId',
      platformId: 'PlatformId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      appId: 'string',
      authToken: 'string',
      customId: 'string',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      miniProgramId: 'string',
      platformId: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

