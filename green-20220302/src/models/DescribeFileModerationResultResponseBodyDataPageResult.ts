// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFileModerationResultResponseBodyDataPageResultImageResult } from "./DescribeFileModerationResultResponseBodyDataPageResultImageResult";
import { DescribeFileModerationResultResponseBodyDataPageResultTextResult } from "./DescribeFileModerationResultResponseBodyDataPageResultTextResult";


export class DescribeFileModerationResultResponseBodyDataPageResult extends $dara.Model {
  /**
   * @remarks
   * The image moderation results.
   */
  imageResult?: DescribeFileModerationResultResponseBodyDataPageResultImageResult[];
  /**
   * @remarks
   * The image URL.
   * 
   * @example
   * https://detect-obj.oss-cn-hangzhou.aliyuncs.com/sample/xxxx.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The text moderation results.
   */
  textResult?: DescribeFileModerationResultResponseBodyDataPageResultTextResult[];
  /**
   * @remarks
   * The text URL.
   * 
   * @example
   * https://detect-obj.oss-cn-hangzhou.aliyuncs.com/sample/xxxx.txt
   */
  textUrl?: string;
  static names(): { [key: string]: string } {
    return {
      imageResult: 'ImageResult',
      imageUrl: 'ImageUrl',
      pageNum: 'PageNum',
      textResult: 'TextResult',
      textUrl: 'TextUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageResult: { 'type': 'array', 'itemType': DescribeFileModerationResultResponseBodyDataPageResultImageResult },
      imageUrl: 'string',
      pageNum: 'number',
      textResult: { 'type': 'array', 'itemType': DescribeFileModerationResultResponseBodyDataPageResultTextResult },
      textUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageResult)) {
      $dara.Model.validateArray(this.imageResult);
    }
    if(Array.isArray(this.textResult)) {
      $dara.Model.validateArray(this.textResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

