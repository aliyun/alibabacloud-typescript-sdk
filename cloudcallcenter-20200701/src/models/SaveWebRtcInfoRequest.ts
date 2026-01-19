// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveWebRtcInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  callId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contentType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
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

