// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveOrderRelationInfoToMsenceRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  amount?: number;
  /**
   * @example
   * ALIPUBE5C3F6D091419
   */
  appId?: string;
  /**
   * @example
   * 3929520
   */
  bizOrderId?: string;
  /**
   * @example
   * 2
   */
  bizOrderStatus?: number;
  /**
   * @example
   * test_custom_id
   */
  customId?: string;
  /**
   * @example
   * 123321
   */
  miniProgramId?: string;
  /**
   * @example
   * 123456
   */
  openUid?: string;
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
      bizOrderId: 'BizOrderId',
      bizOrderStatus: 'BizOrderStatus',
      customId: 'CustomId',
      miniProgramId: 'MiniProgramId',
      openUid: 'OpenUid',
      platformId: 'PlatformId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      appId: 'string',
      bizOrderId: 'string',
      bizOrderStatus: 'number',
      customId: 'string',
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

