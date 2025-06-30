// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssObjectDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the OSS object.
   * 
   * >  You can call the [DescribeOssObjects](https://help.aliyun.com/document_detail/410152.html) operation to obtain the ID of the OSS object.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345213
   */
  id?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

