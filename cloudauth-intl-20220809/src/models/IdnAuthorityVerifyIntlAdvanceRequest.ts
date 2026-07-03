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
   * The merchant-side custom business unique identifier, which is used for subsequent troubleshooting. The value can be a combination of letters and digits with a maximum length of 32 characters. Ensure that the value is unique.
   * 
   * This parameter is required.
   * 
   * @example
   * dso932dsjsd22
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The custom user ID, or another identifier that can identify a specific user, such as a phone number or email address. We strongly recommend that you desensitize the value of this field in advance, for example, by hashing the value.
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
   * The product solution to use. Set the value to IDN_META.
   * 
   * This parameter is required.
   * 
   * @example
   * IDN_META
   */
  productCode?: string;
  /**
   * @remarks
   * The custom authentication scenario ID. You can use this scenario ID to query related records in the console. The value can be a combination of letters, digits, or underscores with a maximum length of 10 characters.
   * 
   * @example
   * 1234567890
   */
  sceneCode?: string;
  /**
   * @remarks
   * The Base64-encoded facial photo.
   * 
   * > **Note**
   * 
   * - If you use this method to pass the ID photo, check the photo size and do not pass an excessively large photo.
   * - Specify one of the following parameters: SourceFacePicture, SourceFacePictureUrl, or SourceFacePictureFile.
   * 
   * @example
   * base64
   */
  sourceFacePicture?: string;
  /**
   * @remarks
   * The file stream of the facial photo.
   * 
   * @example
   * InputStream
   */
  sourceFacePictureFileObject?: Readable;
  /**
   * @remarks
   * The URL of the facial photo. The URL must be a publicly accessible HTTP or HTTPS link.
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

