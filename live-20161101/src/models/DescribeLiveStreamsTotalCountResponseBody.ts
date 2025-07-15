// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamsTotalCountResponseBodyStreamCountListStreamCountInfos extends $dara.Model {
  /**
   * @remarks
   * The total number of live streams.
   * 
   * @example
   * 934
   */
  count?: number;
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 2023-07-24T16:00:00Z
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsTotalCountResponseBodyStreamCountList extends $dara.Model {
  streamCountInfos?: DescribeLiveStreamsTotalCountResponseBodyStreamCountListStreamCountInfos[];
  static names(): { [key: string]: string } {
    return {
      streamCountInfos: 'StreamCountInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamCountInfos: { 'type': 'array', 'itemType': DescribeLiveStreamsTotalCountResponseBodyStreamCountListStreamCountInfos },
    };
  }

  validate() {
    if(Array.isArray(this.streamCountInfos)) {
      $dara.Model.validateArray(this.streamCountInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsTotalCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * String	FCFFE4A4-F34F-4EEF-B401-36A01689AFBC
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics about the live streams.
   */
  streamCountList?: DescribeLiveStreamsTotalCountResponseBodyStreamCountList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      streamCountList: 'StreamCountList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      streamCountList: DescribeLiveStreamsTotalCountResponseBodyStreamCountList,
    };
  }

  validate() {
    if(this.streamCountList && typeof (this.streamCountList as any).validate === 'function') {
      (this.streamCountList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

