// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStreamsResponseBodyStreams extends $dara.Model {
  /**
   * @remarks
   * The application to which the stream belongs.
   * 
   * @example
   * live
   */
  app?: string;
  /**
   * @remarks
   * The time when the stream was created. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2018-12-10T17:00:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The ID of the device to which the stream belongs.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @remarks
   * Indicates whether the stream is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ID of the space to which the stream belongs.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * The height of the video stream resolution.
   * 
   * @example
   * 720
   */
  height?: number;
  /**
   * @remarks
   * The stream ID.
   * 
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * The stream name.
   * 
   * @example
   * 31000000*****0000002
   */
  name?: string;
  /**
   * @remarks
   * The playback domain name to which the stream belongs.
   * 
   * @example
   * demo.aliyundoc.com
   */
  playDomain?: string;
  /**
   * @remarks
   * The stream protocol.
   * 
   * @example
   * gb28181
   */
  protocol?: string;
  /**
   * @remarks
   * The ingest domain name to which the stream belongs.
   * 
   * @example
   * example.aliyundoc.com
   */
  pushDomain?: string;
  /**
   * @remarks
   * The stream status. Valid values:
   * - on: online
   * - off: offline
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The width of the video stream resolution.
   * 
   * @example
   * 1280
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      createdTime: 'CreatedTime',
      deviceId: 'DeviceId',
      enabled: 'Enabled',
      groupId: 'GroupId',
      height: 'Height',
      id: 'Id',
      name: 'Name',
      playDomain: 'PlayDomain',
      protocol: 'Protocol',
      pushDomain: 'PushDomain',
      status: 'Status',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      createdTime: 'string',
      deviceId: 'string',
      enabled: 'boolean',
      groupId: 'string',
      height: 'number',
      id: 'string',
      name: 'string',
      playDomain: 'string',
      protocol: 'string',
      pushDomain: 'string',
      status: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 5
   */
  pageCount?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The list of streams.
   */
  streams?: DescribeStreamsResponseBodyStreams[];
  /**
   * @remarks
   * The total number of streams.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      streams: 'Streams',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      streams: { 'type': 'array', 'itemType': DescribeStreamsResponseBodyStreams },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.streams)) {
      $dara.Model.validateArray(this.streams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

