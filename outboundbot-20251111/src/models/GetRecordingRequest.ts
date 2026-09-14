// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecordingRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 1dcb09c5-d5db-4397-bf65-db854463beea
   */
  instanceId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * job-b4c0d17b-e871-498f-b6c7-5219bc22b87a
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

