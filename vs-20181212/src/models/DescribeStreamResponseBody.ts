// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStreamResponseBody extends $dara.Model {
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
   * The time when the stream was created.
   * 
   * @example
   * 2019-02-28T17:00:17Z
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
   * The ID of the group to which the stream belongs.
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
   * The name of the stream.
   * 
   * @example
   * 31000000*****0000002
   */
  name?: string;
  /**
   * @remarks
   * The streaming domain to which the stream belongs.
   * 
   * @example
   * example.aliyundoc.com
   */
  playDomain?: string;
  /**
   * @remarks
   * The protocol of the stream.
   * 
   * @example
   * gb28181
   */
  protocol?: string;
  /**
   * @remarks
   * The ingest domain to which the stream belongs.
   * 
   * @example
   * demo.aliyundoc.com
   */
  pushDomain?: string;
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
   * The status of the stream. Valid values:
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
      requestId: 'RequestId',
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
      requestId: 'string',
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

