// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFaceRecordV2Request extends $dara.Model {
  /**
   * @remarks
   * The code of the face group. If you do not specify this parameter, the face data of the user in all face groups is deleted.
   * 
   * @example
   * sgl****7uc
   */
  faceGroupCode?: string;
  /**
   * @remarks
   * The unique identifier of the user. This value must be the same as the one specified when the face record was added by using AddFaceRecord. If no user identifier was specified when the record was added, you can use the default image name.
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

