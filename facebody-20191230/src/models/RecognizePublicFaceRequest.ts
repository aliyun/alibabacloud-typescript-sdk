// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizePublicFaceRequestTask extends $dara.Model {
  imageData?: string;
  /**
   * @example
   * https://viapi-oss.oss-cn-shanghai.aliyuncs.com/doc/facebody/xxx.jpg
   */
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'string',
      imageURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePublicFaceRequest extends $dara.Model {
  /**
   * @remarks
   * 1
   */
  task?: RecognizePublicFaceRequestTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': RecognizePublicFaceRequestTask },
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

