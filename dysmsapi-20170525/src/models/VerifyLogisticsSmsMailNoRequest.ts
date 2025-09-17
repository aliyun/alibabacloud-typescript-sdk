// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyLogisticsSmsMailNoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
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
  ownerId?: number;
  /**
   * @example
   * 示例值示例值
   */
  platformCompanyCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      expressCompanyCode: 'ExpressCompanyCode',
      mailNo: 'MailNo',
      ownerId: 'OwnerId',
      platformCompanyCode: 'PlatformCompanyCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressCompanyCode: 'string',
      mailNo: 'string',
      ownerId: 'number',
      platformCompanyCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

