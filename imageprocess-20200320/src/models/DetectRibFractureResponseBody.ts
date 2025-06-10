// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetectRibFractureResponseBodyData } from "./DetectRibFractureResponseBodyData";


export class DetectRibFractureResponseBody extends $dara.Model {
  data?: DetectRibFractureResponseBodyData;
  message?: string;
  /**
   * @example
   * 5C695B5D-41A6-4202-8BF7-E647698678DF
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
      data: DetectRibFractureResponseBodyData,
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

