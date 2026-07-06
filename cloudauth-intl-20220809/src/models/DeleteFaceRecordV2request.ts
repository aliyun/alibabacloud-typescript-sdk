// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFaceRecordV2Request extends $dara.Model {
  /**
   * @remarks
   * The face group code. If this parameter is not specified, the face data of the user is deleted from all face groups.
   * 
   * @example
   * sgl****7uc
   */
  faceGroupCode?: string;
  /**
   * @remarks
   * The unique user identifier, which must be consistent with the one used when calling AddFaceRecord. If this parameter was not specified during registration, you can use the default image name.
   * 
   * This parameter is required.
   * 
   * @example
   * 1231****
   */
  merchantUserId?: string;
  static names(): { [key: string]: string } {
    return {
      faceGroupCode: 'FaceGroupCode',
      merchantUserId: 'MerchantUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceGroupCode: 'string',
      merchantUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

