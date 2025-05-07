// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPodLogsResponseBody extends $dara.Model {
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
   * The logs.
   */
  logs?: string[];
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * dlc-20210126170216-****-chief-0
   */
  podId?: string;
  /**
   * @remarks
   * The instance UID.
   * 
   * @example
   * 94a7cc7c-0033-48b5-85bd-71c63592c268
   */
  podUid?: string;
  /**
   * @remarks
   * The request ID which is used for diagnostics and Q\\&A.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      logs: 'Logs',
      podId: 'PodId',
      podUid: 'PodUid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      logs: { 'type': 'array', 'itemType': 'string' },
      podId: 'string',
      podUid: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

