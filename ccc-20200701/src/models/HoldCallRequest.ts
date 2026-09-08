// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HoldCallRequest extends $dara.Model {
  /**
   * @remarks
   * Channel ID to be held.
   * 
   * This parameter is required.
   * 
   * @example
   * ch:customer:010123****->1318888****:1609255715825:job-6582589278232****
   */
  channelId?: string;
  /**
   * @remarks
   * A unique ID provided by the agent endpoint to represent an agent workbench. An agent can have multiple workbenches of different types, such as browser, iOS, or Android, but only one can be active at a time.
   * 
   * @example
   * ACC-YUNBS-1.0.10-****
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
   * Call job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * job-6582589278232****
   */
  jobId?: string;
  /**
   * @remarks
   * Name of the hold music. This parameter is optional and defaults to empty.
   * 
   * @example
   * 无
   */
  music?: string;
  /**
   * @remarks
   * Agent ID.
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
      music: 'Music',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
      music: 'string',
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

