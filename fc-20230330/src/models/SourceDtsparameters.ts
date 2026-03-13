// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceDTSParameters extends $dara.Model {
  /**
   * @remarks
   * The network address and port number of the change tracking instance.
   * 
   * @example
   * dts-cn-shanghai-vpc.com:18003
   */
  brokerUrl?: string;
  /**
   * @remarks
   * The UNIX timestamp that is generated when the SDK client consumes the first data record.
   * 
   * @example
   * 1677340805
   */
  initCheckPoint?: number;
  /**
   * @remarks
   * The consumer group password.
   * 
   * @example
   * dtsTest123
   */
  password?: string;
  /**
   * @remarks
   * The region of the DTS instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * dtse34j22j025a****
   */
  sid?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * e34z2gm325q****
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the tracked topic of the change tracking instance.
   * 
   * @example
   * cn_shanghai_vpc_rm_uf6398ykj0218****_dts_trigger_upgrade_from_old_version2
   */
  topic?: string;
  /**
   * @remarks
   * The account of the consumer group.
   * 
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

