// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecordingRequest extends $dara.Model {
  /**
   * @example
   * 868eef14-7515-4856-8a50-5c9a22abdbcc
   */
  instanceId?: string;
  /**
   * @example
   * 89ab28c2-eb94-4010-a539-f0eee922e371
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

