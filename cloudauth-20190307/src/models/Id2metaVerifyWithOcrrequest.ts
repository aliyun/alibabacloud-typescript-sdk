// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaVerifyWithOCRRequest extends $dara.Model {
  /**
   * @remarks
   * The input stream of the image for the portrait side of the ID card.
   * Specify either CertUrl or CertFile.
   * 
   * @example
   * None
   */
  certFile?: string;
  /**
   * @remarks
   * The URL of the image of the national emblem side of the ID card. You can specify either CertNationalUrl or CertNationalFile. You can also specify neither.
   * 
   * @example
   * None
   */
  certNationalFile?: string;
  /**
   * @remarks
   * The URL of the image for the national emblem side of the ID card.
   * The URL must be a publicly accessible HTTP or HTTPS link.
   * Specify either CertNationalUrl or CertNationalFile, or leave both empty.
   * 
   * @example
   * https://www.aliyun.com/cert.jpeg
   */
  certNationalUrl?: string;
  /**
   * @remarks
   * The URL of the image for the portrait side of the ID card.
   * The URL must be a publicly accessible HTTP or HTTPS link.
   * Specify either CertUrl or CertFile.
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

