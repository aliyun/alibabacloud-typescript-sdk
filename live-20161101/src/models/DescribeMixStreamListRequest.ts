// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMixStreamListRequest extends $dara.Model {
  /**
   * @remarks
   * The app name.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format and in UTC.
   * 
   * @example
   * 2020-09-20T13:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the stream mixing task. If you create a stream mixing task by calling the [CreateMixStream](https://help.aliyun.com/document_detail/2848087.html) operation, use the MixStreamId value that is returned in the response.
   * 
   * @example
   * 5b2a046e-74d7-385e-d2d7-8a5b87e4****
   */
  mixStreamId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be greater than **0** and cannot exceed the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of records to display on each page. Default value: **1000**.
   * 
   * @example
   * 1000
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The start time. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format and in UTC.
   * 
   * @example
   * 2020-09-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The stream name of the stream mixing task.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      endTime: 'EndTime',
      mixStreamId: 'MixStreamId',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      mixStreamId: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'string',
      streamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

