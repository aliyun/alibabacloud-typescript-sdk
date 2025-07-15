// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamRecordContentResponseBodyRecordContentInfoListRecordContentInfo extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range for which the recordings were queried. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 10
   */
  duration?: number;
  /**
   * @remarks
   * The recordings.
   * 
   * @example
   * 2015-12-01T07:46:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The recording length. Unit: seconds.
   * 
   * @example
   * liveBucket****
   */
  ossBucket?: string;
  /**
   * @remarks
   * The naming rule of recordings in OSS.
   * 
   * @example
   * cn-oss-****.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) bucket.
   * 
   * @example
   * record/{Date}/{UnixTimestamp}_{Sequence}
   */
  ossObjectPrefix?: string;
  /**
   * @remarks
   * The end of the time range for which the recordings were queried. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2015-12-01T07:36:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      endTime: 'EndTime',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossObjectPrefix: 'OssObjectPrefix',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      endTime: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossObjectPrefix: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordContentResponseBodyRecordContentInfoList extends $dara.Model {
  recordContentInfo?: DescribeLiveStreamRecordContentResponseBodyRecordContentInfoListRecordContentInfo[];
  static names(): { [key: string]: string } {
    return {
      recordContentInfo: 'RecordContentInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordContentInfo: { 'type': 'array', 'itemType': DescribeLiveStreamRecordContentResponseBodyRecordContentInfoListRecordContentInfo },
    };
  }

  validate() {
    if(Array.isArray(this.recordContentInfo)) {
      $dara.Model.validateArray(this.recordContentInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamRecordContentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   */
  recordContentInfoList?: DescribeLiveStreamRecordContentResponseBodyRecordContentInfoList;
  /**
   * @remarks
   * The end of the time range to query. The time range that is specified by the StartTime and EndTime parameters cannot exceed 4 days. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 62136AE6-7793-45ED-B14A-60D19A9486D3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordContentInfoList: 'RecordContentInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordContentInfoList: DescribeLiveStreamRecordContentResponseBodyRecordContentInfoList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recordContentInfoList && typeof (this.recordContentInfoList as any).validate === 'function') {
      (this.recordContentInfoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

