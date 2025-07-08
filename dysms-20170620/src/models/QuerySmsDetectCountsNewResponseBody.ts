// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsDetectCountsNewResponseBody extends $dara.Model {
  detectedTimes?: number;
  leftTimes?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      detectedTimes: 'DetectedTimes',
      leftTimes: 'LeftTimes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectedTimes: 'number',
      leftTimes: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

