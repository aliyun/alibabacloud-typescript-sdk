// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class GenerateImageWithTextAndImageAdvanceRequest extends $dara.Model {
  /**
   * @example
   * center_crop
   */
  aspectRatioMode?: string;
  /**
   * @example
   * 1
   */
  number?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://viapi-test.oss-cn-shanghai.aliyuncs.com/yxrtest/%E6%96%87%E7%94%9F%E5%9B%BE/%E7%9D%A1%E8%8E%B2.jpg"
   */
  refImageUrlObject?: Readable;
  /**
   * @example
   * 1024*1024
   */
  resolution?: string;
  /**
   * @example
   * 0.2
   */
  similarity?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      aspectRatioMode: 'AspectRatioMode',
      number: 'Number',
      refImageUrlObject: 'RefImageUrl',
      resolution: 'Resolution',
      similarity: 'Similarity',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aspectRatioMode: 'string',
      number: 'number',
      refImageUrlObject: 'Readable',
      resolution: 'string',
      similarity: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

