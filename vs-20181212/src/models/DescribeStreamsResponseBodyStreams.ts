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

