// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileByBizRequest extends $dara.Model {
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  bizType?: string;
  fileType?: string;
  ownerId?: number;
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  saveOssFileName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userViewFileName?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      fileType: 'FileType',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      saveOssFileName: 'SaveOssFileName',
      userViewFileName: 'UserViewFileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      fileType: 'string',
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      saveOssFileName: 'string',
      userViewFileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

