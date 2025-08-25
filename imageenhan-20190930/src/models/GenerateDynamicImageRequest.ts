// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateDynamicImageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11
   */
  operation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://vigen-invi.oss-cn-shanghai.aliyuncs.com/temp/xl/dynamicPhoto/viapi_test_images/xxxx.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: 'string',
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

