// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeepfakeFaceRequestTasks extends $dara.Model {
  /**
   * @example
   * /9j/4AAQSkZJRgABAQAAAQABAAD/2****
   */
  imageData?: string;
  /**
   * @example
   * https://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/DeepfakeFace/DeepfakeFace1.jpg
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

export class DeepfakeFaceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  tasks?: DeepfakeFaceRequestTasks[];
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: { 'type': 'array', 'itemType': DeepfakeFaceRequestTasks },
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

