// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendLogisticsSmsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  expressCompanyCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  mailNo?: string;
  /**
   * @example
   * 示例值
   */
  outId?: string;
  ownerId?: number;
  /**
   * @example
   * 示例值
   */
  platformCompanyCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  signName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  templateCode?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  templateParam?: string;
  static names(): { [key: string]: string } {
    return {
      expressCompanyCode: 'ExpressCompanyCode',
      mailNo: 'MailNo',
      outId: 'OutId',
      ownerId: 'OwnerId',
      platformCompanyCode: 'PlatformCompanyCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      templateCode: 'TemplateCode',
      templateParam: 'TemplateParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressCompanyCode: 'string',
      mailNo: 'string',
      outId: 'string',
      ownerId: 'number',
      platformCompanyCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      templateCode: 'string',
      templateParam: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

