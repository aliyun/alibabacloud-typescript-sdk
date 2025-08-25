// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DetectVideoShotResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 1
   */
  shotFrameIds?: number[];
  static names(): { [key: string]: string } {
    return {
      shotFrameIds: 'ShotFrameIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shotFrameIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.shotFrameIds)) {
      $dara.Model.validateArray(this.shotFrameIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVideoShotResponseBody extends $dara.Model {
  data?: DetectVideoShotResponseBodyData;
  message?: string;
  /**
   * @example
   * 0033B795-09C7-4EB9-A33C-EBA325192B0D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DetectVideoShotResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

