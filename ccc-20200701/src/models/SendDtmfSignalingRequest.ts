// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendDtmfSignalingRequest extends $dara.Model {
  /**
   * @remarks
   * The channel ID of the call to which DTMF tones are to be sent.
   * 
   * This parameter is required.
   * 
   * @example
   * ch:customer:0108989****->1318888****:1609234221870:job-6573574060089****
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
   * DTMF key information, which refers to the keys on a dial pad, including 0–9, \\*, and #.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  dtmf?: string;
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
   * The call ID.
   * 
   * This parameter is required.
   * 
   * @example
   * job-6573574060089****
   */
  jobId?: string;
  /**
   * @remarks
   * The agent ID that sends DTMF.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      deviceId: 'DeviceId',
      dtmf: 'Dtmf',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      deviceId: 'string',
      dtmf: 'string',
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

