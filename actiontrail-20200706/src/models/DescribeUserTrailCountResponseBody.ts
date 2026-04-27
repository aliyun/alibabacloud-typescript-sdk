// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserTrailCountResponseBodyData extends $dara.Model {
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

export class DescribeUserTrailCountResponseBody extends $dara.Model {
  data?: DescribeUserTrailCountResponseBodyData;
  /**
   * @example
   * EDDEBA6B-FFE2-4EF6-8BAB-2A6B98DC****
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
      data: DescribeUserTrailCountResponseBodyData,
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

