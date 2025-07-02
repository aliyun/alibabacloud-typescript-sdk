// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceDTSParameters extends $dara.Model {
  /**
   * @example
   * dts-cn-shanghai-vpc.com:18003
   */
  brokerUrl?: string;
  /**
   * @example
   * 1677340805
   */
  initCheckPoint?: number;
  /**
   * @example
   * dtsTest123
   */
  password?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * dtse34j22j025a****
   */
  sid?: string;
  /**
   * @example
   * e34z2gm325q****
   */
  taskId?: string;
  /**
   * @example
   * cn_shanghai_vpc_rm_uf6398ykj0218****_dts_trigger_upgrade_from_old_version2
   */
  topic?: string;
  /**
   * @example
   * dts_trigger
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      brokerUrl: 'BrokerUrl',
      initCheckPoint: 'InitCheckPoint',
      password: 'Password',
      regionId: 'RegionId',
      sid: 'Sid',
      taskId: 'TaskId',
      topic: 'Topic',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brokerUrl: 'string',
      initCheckPoint: 'number',
      password: 'string',
      regionId: 'string',
      sid: 'string',
      taskId: 'string',
      topic: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

