// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class SplitVideoPartsAdvanceRequest extends $dara.Model {
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
  videoUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      maxTime: 'MaxTime',
      minTime: 'MinTime',
      template: 'Template',
      videoUrlObject: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxTime: 'number',
      minTime: 'number',
      template: 'string',
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

