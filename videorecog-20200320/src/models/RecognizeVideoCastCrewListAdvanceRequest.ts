// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class RecognizeVideoCastCrewListAdvanceRequestParams extends $dara.Model {
  /**
   * @example
   * cast
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCastCrewListAdvanceRequest extends $dara.Model {
  params?: RecognizeVideoCastCrewListAdvanceRequestParams[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://shanghai.oss-cn-shanghai.aliyuncs.com/download/xxxx.mp4
   */
  videoUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      videoUrlObject: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': RecognizeVideoCastCrewListAdvanceRequestParams },
      videoUrlObject: 'Readable',
    };
  }

  validate() {
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

