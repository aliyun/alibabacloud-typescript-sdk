// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageDiagnoseRequest extends $dara.Model {
  /**
   * @example
   * {   "product_id": "1",   "platform": "ae" }
   */
  extra?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://xxxxx.oss-cn-shenzhen.aliyuncs.com/jd/41209/xxxxx.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

