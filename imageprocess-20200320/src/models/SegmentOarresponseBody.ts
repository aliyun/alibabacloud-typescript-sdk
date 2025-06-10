// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SegmentOARResponseBodyData } from "./SegmentOarresponseBodyData";


export class SegmentOARResponseBody extends $dara.Model {
  data?: SegmentOARResponseBodyData;
  message?: string;
  /**
   * @example
   * 57784EDF-7322-1559-89C2-26A08570B26B
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
      data: SegmentOARResponseBodyData,
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

