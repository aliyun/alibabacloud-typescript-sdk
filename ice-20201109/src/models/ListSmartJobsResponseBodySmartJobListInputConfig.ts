// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmartJobsResponseBodySmartJobListInputConfig extends $dara.Model {
  /**
   * @remarks
   * The information about the input file.
   * 
   * @example
   * oss://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputFile?: string;
  /**
   * @remarks
   * The keyword information.
   * 
   * @example
   * 测试关键词
   */
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      inputFile: 'InputFile',
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFile: 'string',
      keyword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

