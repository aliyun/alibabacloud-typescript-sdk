// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetectLungNoduleResponseBodyData } from "./DetectLungNoduleResponseBodyData";


export class DetectLungNoduleResponseBody extends $dara.Model {
  data?: DetectLungNoduleResponseBodyData;
  message?: string;
  /**
   * @example
   * 9889ef5b-b973-4dd0-9f26-3b9cc489c436
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
      data: DetectLungNoduleResponseBodyData,
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

