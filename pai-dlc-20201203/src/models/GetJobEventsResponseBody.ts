// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The events.
   */
  events?: string[];
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc-20210126170216-******
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID, which can be used for troubleshooting.
   * 
   * @example
   * 78F6FCE2-278F-4C4A-A6B7-DD8ECEA9C456
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': 'string' },
      jobId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

