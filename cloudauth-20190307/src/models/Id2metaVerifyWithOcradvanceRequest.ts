// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class Id2MetaVerifyWithOCRAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The input stream of the image for the portrait side of the ID card.
   * Specify either CertUrl or CertFile.
   * 
   * @example
   * None
   */
  certFileObject?: Readable;
  /**
   * @remarks
   * The URL of the image of the national emblem side of the ID card. You can specify either CertNationalUrl or CertNationalFile. You can also specify neither.
   * 
   * @example
   * None
   */
  certNationalFileObject?: Readable;
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

