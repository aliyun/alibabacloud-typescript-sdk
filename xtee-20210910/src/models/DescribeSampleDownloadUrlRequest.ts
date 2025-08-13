// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSampleDownloadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * Set the language type for request and response, default value is **zh**. Values: 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Sample ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5467
   */
  sampleId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regId: 'regId',
      sampleId: 'sampleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regId: 'string',
      sampleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

