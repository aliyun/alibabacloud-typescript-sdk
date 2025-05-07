// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPodEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The events returned.
   */
  events?: string[];
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc-20210126170216-*****
   */
  jobId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dlc-20210126170216-*****-chief-0
   */
  podId?: string;
  /**
   * @remarks
   * The node UID.
   * 
   * @example
   * 94a7cc7c-0033-48b5-85bd-71c63592c268
   */
  podUid?: string;
  /**
   * @remarks
   * The request ID, which can be used for troubleshooting.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      jobId: 'JobId',
      podId: 'PodId',
      podUid: 'PodUid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': 'string' },
      jobId: 'string',
      podId: 'string',
      podUid: 'string',
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

