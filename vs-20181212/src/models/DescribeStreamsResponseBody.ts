// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStreamsResponseBodyStreams extends $dara.Model {
  /**
   * @remarks
   * Application that owns this stream.
   * 
   * @example
   * live
   */
  app?: string;
  /**
   * @remarks
   * Time when the stream was created.
   * 
   * @example
   * 2018-12-10T17:00:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * Device ID of this stream.
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
   * The ID of the group to which the stream belongs.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * Video stream height in pixels.
   * 
   * @example
   * 720
   */
  height?: number;
  /**
   * @remarks
   * Stream ID.
   * 
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * Stream name.
   * 
   * @example
   * 31000000*****0000002
   */
  name?: string;
  /**
   * @remarks
   * Streaming domain for this stream.
   * 
   * @example
   * demo.aliyundoc.com
   */
  playDomain?: string;
  /**
   * @remarks
   * Stream protocol.
   * 
   * @example
   * gb28181
   */
  protocol?: string;
  /**
   * @remarks
   * Ingest domain for this stream.
   * 
   * @example
   * example.aliyundoc.com
   */
  pushDomain?: string;
  /**
   * @remarks
   * Stream status. Valid values:
   * 
   * - on (online)
   * 
   * - off (offline)
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * Video stream width in pixels.
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
   * Total number of pages.
   * 
   * @example
   * 5
   */
  pageCount?: number;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * List of streams.
   */
  streams?: DescribeStreamsResponseBodyStreams[];
  /**
   * @remarks
   * Total number of streams.
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

