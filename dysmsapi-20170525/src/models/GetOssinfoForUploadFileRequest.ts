// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOSSInfoForUploadFileRequest extends $dara.Model {
  /**
   * @remarks
   * The business type. Default value: **fcMediaSms**.
   * 
   * When you create a signature or template and upload **More Materials**, the value is **fcMediaSms**.
   * 
   * @example
   * fcMediaSms
   */
  bizType?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      ownerId: 'number',
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

