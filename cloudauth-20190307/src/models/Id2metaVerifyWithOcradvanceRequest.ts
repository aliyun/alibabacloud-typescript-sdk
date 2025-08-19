// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class Id2MetaVerifyWithOCRAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * Input stream for the portrait side of the ID card image.
   * Choose one between CertUrl and CertFile.
   * 
   * @example
   * 无
   */
  certFileObject?: Readable;
  /**
   * @remarks
   * National emblem side of the ID card image address.
   * Choose one between CertNationalUrl and CertNationalFile, or omit both.
   * 
   * @example
   * 无
   */
  certNationalFileObject?: Readable;
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
      certFileObject: 'CertFile',
      certNationalFileObject: 'CertNationalFile',
      certNationalUrl: 'CertNationalUrl',
      certUrl: 'CertUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certFileObject: 'Readable',
      certNationalFileObject: 'Readable',
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

