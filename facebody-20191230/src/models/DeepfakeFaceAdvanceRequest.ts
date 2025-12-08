// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class DeepfakeFaceAdvanceRequestTasks extends $dara.Model {
  /**
   * @example
   * /9j/4AAQSkZJRgABAQAAAQABAAD/2****
   */
  imageData?: string;
  /**
   * @example
   * https://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/DeepfakeFace/DeepfakeFace1.jpg
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

export class DeepfakeFaceAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  tasks?: DeepfakeFaceAdvanceRequestTasks[];
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: { 'type': 'array', 'itemType': DeepfakeFaceAdvanceRequestTasks },
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

