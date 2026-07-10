// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class Id2MetaVerifyWithOCRAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The input stream of the portrait side image of the ID card.
   * Specify either CertUrl or CertFile.
   * 
   * @example
   * 无
   */
  certFileObject?: Readable;
  /**
   * @remarks
   * The image of the national emblem side of the ID card.
   * Specify either CertNationalUrl or CertNationalFile. You can also leave both empty.
   * 
   * @example
   * 无
   */
  certNationalFileObject?: Readable;
  /**
   * @remarks
   * The URL of the national emblem side image of the ID card.
   * A publicly accessible HTTP or HTTPS URL.
   * Specify either CertNationalUrl or CertNationalFile. You can also leave both empty.
   * 
   * @example
   * https://www.aliyun.com/cert.jpeg
   */
  certNationalUrl?: string;
  /**
   * @remarks
   * The image of the portrait side of the ID card.
   * A publicly accessible HTTP or HTTPS URL.
   * Specify either CertUrl or CertFile.
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

