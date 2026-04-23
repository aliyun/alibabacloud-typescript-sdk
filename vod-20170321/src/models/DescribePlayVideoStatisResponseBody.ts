// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayVideoStatisResponseBodyVideoPlayStatisDetailsVideoPlayStatisDetail extends $dara.Model {
  date?: string;
  playDuration?: string;
  playRange?: string;
  title?: string;
  UV?: string;
  VV?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      playDuration: 'PlayDuration',
      playRange: 'PlayRange',
      title: 'Title',
      UV: 'UV',
      VV: 'VV',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      playDuration: 'string',
      playRange: 'string',
      title: 'string',
      UV: 'string',
      VV: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayVideoStatisResponseBodyVideoPlayStatisDetails extends $dara.Model {
  videoPlayStatisDetail?: DescribePlayVideoStatisResponseBodyVideoPlayStatisDetailsVideoPlayStatisDetail[];
  static names(): { [key: string]: string } {
    return {
      videoPlayStatisDetail: 'VideoPlayStatisDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoPlayStatisDetail: { 'type': 'array', 'itemType': DescribePlayVideoStatisResponseBodyVideoPlayStatisDetailsVideoPlayStatisDetail },
    };
  }

  validate() {
    if(Array.isArray(this.videoPlayStatisDetail)) {
      $dara.Model.validateArray(this.videoPlayStatisDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayVideoStatisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A92D3600-A3E7-43D6-****-B6E3B4A1FE6B
   */
  requestId?: string;
  videoPlayStatisDetails?: DescribePlayVideoStatisResponseBodyVideoPlayStatisDetails;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      videoPlayStatisDetails: 'VideoPlayStatisDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      videoPlayStatisDetails: DescribePlayVideoStatisResponseBodyVideoPlayStatisDetails,
    };
  }

  validate() {
    if(this.videoPlayStatisDetails && typeof (this.videoPlayStatisDetails as any).validate === 'function') {
      (this.videoPlayStatisDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

