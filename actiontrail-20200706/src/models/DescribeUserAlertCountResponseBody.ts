// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserAlertCountResponseBodyData extends $dara.Model {
  counts?: number[];
  dates?: string[];
  static names(): { [key: string]: string } {
    return {
      counts: 'Counts',
      dates: 'Dates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      counts: { 'type': 'array', 'itemType': 'number' },
      dates: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.counts)) {
      $dara.Model.validateArray(this.counts);
    }
    if(Array.isArray(this.dates)) {
      $dara.Model.validateArray(this.dates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserAlertCountResponseBody extends $dara.Model {
  data?: DescribeUserAlertCountResponseBodyData;
  /**
   * @example
   * 90D6CC31-947F-5D8A-BEDC-F312EE9B31EA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeUserAlertCountResponseBodyData,
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

