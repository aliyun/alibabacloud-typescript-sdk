// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class RecognizePublicFaceAdvanceRequestTask extends $dara.Model {
  imageData?: string;
  /**
   * @example
   * https://viapi-oss.oss-cn-shanghai.aliyuncs.com/doc/facebody/xxx.jpg
   */
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
      imageURLObject: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'string',
      imageURLObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePublicFaceAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * 1
   */
  task?: RecognizePublicFaceAdvanceRequestTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': RecognizePublicFaceAdvanceRequestTask },
    };
  }

  validate() {
    if(Array.isArray(this.task)) {
      $dara.Model.validateArray(this.task);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

