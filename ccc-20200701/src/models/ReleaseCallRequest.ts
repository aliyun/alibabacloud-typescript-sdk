// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseCallRequest extends $dara.Model {
  /**
   * @remarks
   * Channel ID of the call to hang up. This parameter is optional. If not specified, it defaults to the channel where the agent corresponding to the UserId is located.
   * 
   * @example
   * ch:user:1390501****->8032****:1609138902226:job-6538214103685****
   */
  channelId?: string;
  /**
   * @remarks
   * Device ID. This parameter is meaningless and can be filled with any value.
   * 
   * @example
   * device
   */
  deviceId?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Call ID.
   * 
   * This parameter is required.
   * 
   * @example
   * job-6538214103685****
   */
  jobId?: string;
  /**
   * @remarks
   * Agent ID. If not specified, the agent mapped to the current Resource Access Management (RAM) user is used by default.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

