// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class CredentialVerifyIntlAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0101
   */
  credName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 01
   */
  credType?: string;
  imageFileObject?: Readable;
  /**
   * @example
   * https://oss-bj01.avic.com/eavic-prod-commodity/pic/commodity/94677ee6-1067-4287-8ff4-6e030ef3a5a8.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      credName: 'CredName',
      credType: 'CredType',
      imageFileObject: 'ImageFile',
      imageUrl: 'ImageUrl',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credName: 'string',
      credType: 'string',
      imageFileObject: 'Readable',
      imageUrl: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

