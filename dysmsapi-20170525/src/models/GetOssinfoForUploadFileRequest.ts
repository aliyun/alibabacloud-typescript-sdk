// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOSSInfoForUploadFileRequest extends $dara.Model {
  /**
   * @remarks
   * Business type, default value is **fcMediaSms**.
   * 
   * When creating signatures and templates, and uploading **additional materials**, this value is **fcMediaSms**.
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

