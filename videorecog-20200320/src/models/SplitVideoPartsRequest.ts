// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SplitVideoPartsRequest extends $dara.Model {
  maxTime?: number;
  minTime?: number;
  template?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://viapi-test.oss-cn-shanghai.aliyuncs.com/test-team/ocr/xxxx.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      maxTime: 'MaxTime',
      minTime: 'MinTime',
      template: 'Template',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxTime: 'number',
      minTime: 'number',
      template: 'string',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

