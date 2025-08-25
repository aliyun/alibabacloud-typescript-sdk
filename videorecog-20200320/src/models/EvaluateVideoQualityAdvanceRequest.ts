// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class EvaluateVideoQualityAdvanceRequest extends $dara.Model {
  /**
   * @example
   * vqa_plus
   */
  mode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://public-vigen-video.oss-cn-shanghai.aliyuncs.com/Common/xxx/dont_delete/decaption/123.mp4
   */
  videoUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      videoUrlObject: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      videoUrlObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

