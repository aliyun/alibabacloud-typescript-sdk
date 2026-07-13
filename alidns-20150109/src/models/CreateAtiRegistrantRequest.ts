// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAtiRegistrantRequest extends $dara.Model {
  /**
   * @remarks
   * The country or region of the registrant. Specify a 2-character country or region code in compliance with GB/T 2659.1-2022.
   * 
   * This parameter is required.
   * 
   * @example
   * 中国
   */
  cc?: string;
  /**
   * @remarks
   * The city of the registrant. The value cannot exceed 255 characters in length. If the country is China, the value must comply with GB/T 2260-2007.
   * 
   * This parameter is required.
   * 
   * @example
   * 杭州市
   */
  city?: string;
  /**
   * @remarks
   * Ensures the idempotency of the request. Generate a unique parameter value from your client to ensure that the value is unique across different requests. The ClientToken value supports only ASCII characters and cannot exceed 64 characters in length.
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may vary for each API request.
   * 
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cC.....
   */
  clientToken?: string;
  /**
   * @remarks
   * The document number of the registrant. The value cannot exceed 50 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 110123456789122341
   */
  documentCode?: string;
  /**
   * @remarks
   * The document image of the registrant in Base64 encoding. The original file size must be between 50 KB and 3 MB.
   * 
   * This parameter is required.
   * 
   * @example
   * 证件图片
   */
  documentImage?: string;
  /**
   * @remarks
   * The document type of the registrant.
   * | Field | Description             |
   * | ---- | ---------------- |
   * | SFZ   | ID card  |
   * | HZ    | Passport  |
   * | ORG   | Organization code certificate  |
   * | YYZZ	| Business license |
   * | BDDM | Military unit code |
   * | CHNSHXYD	| Unified Social Credit Code certificate of the People\\"s Republic of China |
   * | GAJMTX | Mainland Travel Permit for Hong Kong and Macao Residents |
   * | GAJZZ	| Residence Permit for Hong Kong and Macao Residents |
   * | GATLYCZD	| Registration certificate for permanent representative offices of tourism departments in Hong Kong, Macao, and Taiwan |
   * | GAXWZNDJ	| Registration certificate for permanent mainland journalist stations of Hong Kong and Macao news agencies |
   * | GZJGZY	| Notary office practice certificate |
   * | JDDWFW | Military unit paid service license |
   * | JGZ	| Military officer certificate |
   * | JJHFR	| Foundation legal person registration certificate |
   * | LSZY	| Law firm practice license |
   * | MBFQY	| Private non-enterprise unit registration certificate |
   * | MBXXBX	| Private school operating license |
   * | NCJTJJZZ	| Rural collective economic organization registration certificate |
   * | QTTYDM | Other - Unified Social Credit Code  |
   * | SFJD	| Judicial appraisal license |
   * | SHTTFR | Social organization legal person registration certificate |
   * | SHFWJG	| Social service institution registration certificate |
   * | SYDWFR | Public institution legal person certificate |
   * | TYDM  | Unified Social Credit Code certificate  |
   * | YLJGZY	| Medical institution practice license |
   * | ZCWYHDJZ	| Arbitration commission registration certificate |
   * | ZJCS	| Religious activity venue registration certificate |
   * | BJWSXX	| Beijing operating license for schools for children of foreign embassy staff |
   * | JWJG	| Overseas institution certificate |
   * | JWFZFDBJ	| Overseas non-governmental organization representative office registration certificate |
   * | WGCZJG | Foreign enterprise permanent representative office registration certificate |
   * | WGZHWH	| Foreign cultural center registration certificate in China |
   * | WGZHXWJG	| Foreign news agency certificate in China |
   * | WJLSFZ| Foreigner permanent residence ID card |
   * | WLCZJG	| Approval registration certificate for permanent representative offices of foreign government tourism departments |
   * | QT     | Other |
   * 
   * This parameter is required.
   * 
   * @example
   * SFZ
   */
  documentType?: string;
  /**
   * @remarks
   * The email address. The value cannot exceed 300 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * example@example.com
   */
  email?: string;
  /**
   * @remarks
   * The name of the registrant. The value cannot exceed 255 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 张xx
   */
  name?: string;
  /**
   * @remarks
   * The phone number of the registrant. The value cannot exceed 128 characters in length. If the country is China and the number is not a mobile phone number, the area code must match the city.
   * 
   * This parameter is required.
   * 
   * @example
   * 13112345678
   */
  phone?: string;
  /**
   * @remarks
   * The province of the registrant. The value cannot exceed 255 characters in length. If the country is China, the value must comply with GB/T 2260-2007.
   * 
   * This parameter is required.
   * 
   * @example
   * 浙江省
   */
  state?: string;
  /**
   * @remarks
   * The address of the registrant. The value cannot exceed 255 characters in length.
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

