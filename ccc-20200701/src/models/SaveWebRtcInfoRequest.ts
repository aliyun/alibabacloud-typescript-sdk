// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveWebRtcInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e13c9740-1e37-123b-21b6-00163e352f9
   */
  callId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"media_source":{},"remote_inbound_rtp":{},"outbound_rtp":{},"inbound_rtp":{},"remote_outbound_rtp":{},"candidate":{},"basic":{"callId":"e13c9740-1e37-123b-21b6-00163e352f9","timestamp":"1647262108395","callStartTime":"1647262108393","uid":"user-test","access_point":"shanghai","browser":"90","ip":"127.0.0.1"}}
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  contentType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * job-b8b0ca63-330c-4e65-8ae3-9de2c7ce7683
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      content: 'Content',
      contentType: 'ContentType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      content: 'string',
      contentType: 'string',
      instanceId: 'string',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

