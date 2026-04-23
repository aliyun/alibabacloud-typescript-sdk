// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayUserAvgResponseBodyUserPlayStatisAvgsUserPlayStatisAvg extends $dara.Model {
  avgPlayCount?: string;
  avgPlayDuration?: string;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      avgPlayCount: 'AvgPlayCount',
      avgPlayDuration: 'AvgPlayDuration',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgPlayCount: 'string',
      avgPlayDuration: 'string',
      date: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayUserAvgResponseBodyUserPlayStatisAvgs extends $dara.Model {
  userPlayStatisAvg?: DescribePlayUserAvgResponseBodyUserPlayStatisAvgsUserPlayStatisAvg[];
  static names(): { [key: string]: string } {
    return {
      userPlayStatisAvg: 'UserPlayStatisAvg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPlayStatisAvg: { 'type': 'array', 'itemType': DescribePlayUserAvgResponseBodyUserPlayStatisAvgsUserPlayStatisAvg },
    };
  }

  validate() {
    if(Array.isArray(this.userPlayStatisAvg)) {
      $dara.Model.validateArray(this.userPlayStatisAvg);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayUserAvgResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6C7F90B2-BDA4-4FAC-****-A38A121DFE19
   */
  requestId?: string;
  userPlayStatisAvgs?: DescribePlayUserAvgResponseBodyUserPlayStatisAvgs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userPlayStatisAvgs: 'UserPlayStatisAvgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userPlayStatisAvgs: DescribePlayUserAvgResponseBodyUserPlayStatisAvgs,
    };
  }

  validate() {
    if(this.userPlayStatisAvgs && typeof (this.userPlayStatisAvgs as any).validate === 'function') {
      (this.userPlayStatisAvgs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

