// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * test.csv
   */
  fileName?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The upload type.
   * 
   * @example
   * COMMUNITY_SAMPLE
   */
  uploadType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      fileName: 'fileName',
      regId: 'regId',
      uploadType: 'uploadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      fileName: 'string',
      regId: 'string',
      uploadType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

