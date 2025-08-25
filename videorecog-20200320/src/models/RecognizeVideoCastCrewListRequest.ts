// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeVideoCastCrewListRequestParams extends $dara.Model {
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

export class RecognizeVideoCastCrewListRequest extends $dara.Model {
  params?: RecognizeVideoCastCrewListRequestParams[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://shanghai.oss-cn-shanghai.aliyuncs.com/download/xxxx.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': RecognizeVideoCastCrewListRequestParams },
      videoUrl: 'string',
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

