// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStreamsResponseBodyStreams extends $dara.Model {
  /**
   * @example
   * live
   */
  app?: string;
  /**
   * @example
   * 2018-12-10T17:00:00Z
   */
  createdTime?: string;
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * 720
   */
  height?: number;
  /**
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 31000000*****0000002
   */
  name?: string;
  /**
   * @example
   * demo.aliyundoc.com
   */
  playDomain?: string;
  /**
   * @example
   * gb28181
   */
  protocol?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  pushDomain?: string;
  /**
   * @example
   * on
   */
  status?: string;
  /**
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
   * @example
   * 5
   */
  pageCount?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  streams?: DescribeStreamsResponseBodyStreams[];
  /**
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

