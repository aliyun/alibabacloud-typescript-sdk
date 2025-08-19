// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaVerifyWithOCRRequest extends $dara.Model {
  /**
   * @remarks
   * Input stream for the portrait side of the ID card image.
   * Choose one between CertUrl and CertFile.
   * 
   * @example
   * 无
   */
  certFile?: string;
  /**
   * @remarks
   * National emblem side of the ID card image address.
   * Choose one between CertNationalUrl and CertNationalFile, or omit both.
   * 
   * @example
   * 无
   */
  certNationalFile?: string;
  /**
   * @remarks
   * National emblem side of the ID card image URL. National emblem side
   * A publicly accessible HTTP or HTTPS link.
   * Choose one between CertNationalUrl and CertNationalFile, or omit both.
   * 
   * @example
   * https://www.aliyun.com/cert.jpeg
   */
  certNationalUrl?: string;
  /**
   * @remarks
   * Portrait side of the ID card image.
   * A publicly accessible HTTP or HTTPS link.
   * Choose one between CertUrl and CertFile.
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

