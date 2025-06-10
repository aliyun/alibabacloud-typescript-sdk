// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TargetVolumeSegmentResponseBodyData } from "./TargetVolumeSegmentResponseBodyData";


export class TargetVolumeSegmentResponseBody extends $dara.Model {
  data?: TargetVolumeSegmentResponseBodyData;
  message?: string;
  /**
   * @example
   * 6cc7232e-d38b-4dda-b86d-6e0e31704fa1
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
      data: TargetVolumeSegmentResponseBodyData,
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

