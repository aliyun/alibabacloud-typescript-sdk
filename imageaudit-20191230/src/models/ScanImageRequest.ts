// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ScanImageRequestTask extends $dara.Model {
  /**
   * @example
   * uuid-xxxx-xxxx-1234
   */
  dataId?: string;
  /**
   * @example
   * 1
   */
  imageTimeMillisecond?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://xxx.xxx.com/xxx.jpg
   */
  imageURL?: string;
  /**
   * @example
   * 1
   */
  interval?: number;
  /**
   * @example
   * 1
   */
  maxFrames?: number;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      imageTimeMillisecond: 'ImageTimeMillisecond',
      imageURL: 'ImageURL',
      interval: 'Interval',
      maxFrames: 'MaxFrames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      imageTimeMillisecond: 'number',
      imageURL: 'string',
      interval: 'number',
      maxFrames: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScanImageRequest extends $dara.Model {
  /**
   * @remarks
   * 1
   * 
   * This parameter is required.
   * 
   * @example
   * porn
   */
  scene?: string[];
  /**
   * @remarks
   * 1
   * 
   * This parameter is required.
   */
  task?: ScanImageRequestTask[];
  static names(): { [key: string]: string } {
    return {
      scene: 'Scene',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: { 'type': 'array', 'itemType': 'string' },
      task: { 'type': 'array', 'itemType': ScanImageRequestTask },
    };
  }

  validate() {
    if(Array.isArray(this.scene)) {
      $dara.Model.validateArray(this.scene);
    }
    if(Array.isArray(this.task)) {
      $dara.Model.validateArray(this.task);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

