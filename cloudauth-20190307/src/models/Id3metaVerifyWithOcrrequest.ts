// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id3MetaVerifyWithOCRRequest extends $dara.Model {
  /**
   * @remarks
   * The input stream of the portrait side image of the ID card. Specify either CertUrl or CertFile.
   * 
   * @example
   * 无
   */
  certFile?: string;
  /**
   * @remarks
   * The image of the national emblem side of the ID card. Specify either CertNationalUrl or CertNationalFile, or leave both empty.
   * 
   * @example
   * 无
   */
  certNationalFile?: string;
  /**
   * @remarks
   * The URL of the national emblem side image of the ID card. Specify a publicly accessible HTTP or HTTPS URL. Specify either CertNationalUrl or CertNationalFile, or leave both empty.
   * 
   * @example
   * https://www.aliyun.com/cert.jpeg
   */
  certNationalUrl?: string;
  /**
   * @remarks
   * The image of the portrait side of the ID card. Specify a publicly accessible HTTP or HTTPS URL. Specify either CertUrl or CertFile.
   * 
   * @example
   * https://www.aliyun.com/cert.jpeg
   */
  certUrl?: string;
  static names(): { [key: string]: string } {
    return {
      certFile: 'CertFile',
      certNationalFile: 'CertNationalFile',
      certNationalUrl: 'CertNationalUrl',
      certUrl: 'CertUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certFile: 'string',
      certNationalFile: 'string',
      certNationalUrl: 'string',
      certUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

