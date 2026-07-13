// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAtiRegistrantRequest extends $dara.Model {
  /**
   * @remarks
   * The country.
   * 
   * @example
   * 中国
   */
  cc?: string;
  /**
   * @remarks
   * The city.
   * 
   * @example
   * 杭州市
   */
  city?: string;
  /**
   * @remarks
   * Ensures the idempotency of the request. Generate a unique parameter value from your client to ensure that the value is unique across different requests. ClientToken supports only ASCII characters and cannot exceed 64 characters in length.
   * 
   * If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may be different for each API request.
   * 
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cC.....
   */
  clientToken?: string;
  /**
   * @remarks
   * The document number of the registrant. Maximum length: 50 characters.
   * 
   * @example
   * 11011239900307663x
   */
  documentCode?: string;
  /**
   * @remarks
   * The document image of the registrant (Base64-encoded). The original file size must be between 50 KB and 3 MB.
   * 
   * @example
   * 证件图片
   */
  documentImage?: string;
  /**
   * @remarks
   * The document type of the registrant. For more information, see the appendix on document types.
   * 
   * @example
   * SFZ
   */
  documentType?: string;
  /**
   * @remarks
   * The email address. Maximum length: 300 characters.
   * 
   * @example
   * example@example.com
   */
  email?: string;
  /**
   * @remarks
   * The name of the registrant. Maximum length: 255 characters.
   * 
   * @example
   * 张xx
   */
  name?: string;
  /**
   * @remarks
   * The phone number of the registrant. Maximum length: 128 characters. If the country is China, the area code of a non-mobile phone number must match the city.
   * 
   * @example
   * 13112345678
   */
  phone?: string;
  /**
   * @remarks
   * The ID of the registrant profile.
   * 
   * @example
   * 2072277378616354816
   */
  registrantId?: string;
  /**
   * @remarks
   * The state or province.
   * 
   * @example
   * 浙江省
   */
  state?: string;
  /**
   * @remarks
   * The street.
   * 
   * @example
   * xx区xx街道
   */
  street?: string;
  static names(): { [key: string]: string } {
    return {
      cc: 'Cc',
      city: 'City',
      clientToken: 'ClientToken',
      documentCode: 'DocumentCode',
      documentImage: 'DocumentImage',
      documentType: 'DocumentType',
      email: 'Email',
      name: 'Name',
      phone: 'Phone',
      registrantId: 'RegistrantId',
      state: 'State',
      street: 'Street',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cc: 'string',
      city: 'string',
      clientToken: 'string',
      documentCode: 'string',
      documentImage: 'string',
      documentType: 'string',
      email: 'string',
      name: 'string',
      phone: 'string',
      registrantId: 'string',
      state: 'string',
      street: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

