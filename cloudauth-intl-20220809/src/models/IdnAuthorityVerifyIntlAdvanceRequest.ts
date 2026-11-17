// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class IdnAuthorityVerifyIntlAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The date of birth.
   * 
   * This parameter is required.
   * 
   * @example
   * 2000-01-01
   */
  birthDate?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * a*@gmail.com
   */
  email?: string;
  /**
   * @remarks
   * The full name.
   * 
   * This parameter is required.
   * 
   * @example
   * ray
   */
  fullName?: string;
  /**
   * @remarks
   * The ID card number.
   * 
   * This parameter is required.
   * 
   * @example
   * 3612841***47001
   */
  idNumber?: string;
  /**
   * @remarks
   * The custom unique business identifier on the merchant side, which is used for subsequent troubleshooting. The value can be up to 32 characters in length and can contain letters and digits. Make sure that the value is unique.
   * 
   * This parameter is required.
   * 
   * @example
   * dso932dsjsd22
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The custom user ID or other identifier that identifies a specific user, such as a mobile phone number or email address. Desensitize the value of this field in advance, such as by hashing the value.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @remarks
   * The Indonesian mobile phone number. The number must start with +62, followed by 9 to 11 digits.
   * 
   * This parameter is required.
   * 
   * @example
   * +6281293671234
   */
  mobile?: string;
  /**
   * @remarks
   * The product solution to be integrated. Valid value: IDN_META.
   * 
   * This parameter is required.
   * 
   * @example
   * IDN_META
   */
  productCode?: string;
  /**
   * @remarks
   * The custom authentication scenario ID, which is used to query related records by entering this scenario ID in the console later. The value can be up to 10 characters in length and can contain letters, digits, and underscores.
   * 
   * @example
   * 1234567890
   */
  sceneCode?: string;
  /**
   * @remarks
   * The Base64-encoded portrait photo.
   * 
   * Note
   * 
   * - If you choose this method to pass the ID photo, check the photo size and do not pass oversized photos.
   * - Specify only one of the following parameters: SourceFacePicture, SourceFacePictureUrl, and SourceFacePictureFile.
   * 
   * @example
   * base64
   */
  sourceFacePicture?: string;
  /**
   * @remarks
   * The file stream of the portrait photo.
   * 
   * @example
   * InputStream
   */
  sourceFacePictureFileObject?: Readable;
  /**
   * @remarks
   * The URL of the portrait photo. The URL must be a publicly accessible HTTP or HTTPS link.
   * 
   * @example
   * https://***face1.jpeg
   */
  sourceFacePictureUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      birthDate: 'BirthDate',
      email: 'Email',
      fullName: 'FullName',
      idNumber: 'IdNumber',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      mobile: 'Mobile',
      productCode: 'ProductCode',
      sceneCode: 'SceneCode',
      sourceFacePicture: 'SourceFacePicture',
      sourceFacePictureFileObject: 'SourceFacePictureFile',
      sourceFacePictureUrl: 'SourceFacePictureUrl',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthDate: 'string',
      email: 'string',
      fullName: 'string',
      idNumber: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      mobile: 'string',
      productCode: 'string',
      sceneCode: 'string',
      sourceFacePicture: 'string',
      sourceFacePictureFileObject: 'Readable',
      sourceFacePictureUrl: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

