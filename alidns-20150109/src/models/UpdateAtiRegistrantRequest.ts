// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAtiRegistrantRequest extends $dara.Model {
  /**
   * @remarks
   * The country.
   * 
   * @example
   * China
   */
  cc?: string;
  /**
   * @remarks
   * The city.
   * 
   * @example
   * Hangzhou
   */
  city?: string;
  /**
   * @remarks
   * Ensures the idempotency of the request. Generate a parameter value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters and cannot exceed 64 characters.
   * 
   * If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may differ for each API request.
   * 
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cC.....
   */
  clientToken?: string;
  /**
   * @remarks
   * The document number of the registrant. The number cannot exceed 50 characters in length.
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
   * Document image
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
   * The email address. The address cannot exceed 300 characters in length.
   * 
   * @example
   * example@example.com
   */
  email?: string;
  /**
   * @remarks
   * The name of the registrant. The name cannot exceed 255 characters in length.
   * 
   * @example
   * Zhang XX
   */
  name?: string;
  /**
   * @remarks
   * The phone number of the registrant. The number cannot exceed 128 characters in length. If the country is China and the number is not a mobile phone number, the area code must match the city.
   * 
   * @example
   * 13112345678
   */
  phone?: string;
  /**
   * @remarks
   * The ID of the real-name registrant.
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
   * Zhejiang
   */
  state?: string;
  /**
   * @remarks
   * The street address.
   * 
   * @example
   * XX District, XX Street
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

