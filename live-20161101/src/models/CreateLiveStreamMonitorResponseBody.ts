// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveStreamMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the monitoring session.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  monitorId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5c6a2a0d-f228-4a64-af62-20e91b9676b3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorId: 'MonitorId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

