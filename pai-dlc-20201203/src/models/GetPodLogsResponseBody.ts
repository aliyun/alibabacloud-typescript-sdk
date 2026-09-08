// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContainerInfo } from "./ContainerInfo";


export class GetPodLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The container information that may be associated with the node.
   */
  containerInfo?: ContainerInfo;
  /**
   * @remarks
   * The containers used to filter logs. Separate multiple container names with commas (,).
   * 
   * @example
   * pytorch,aimaster-worker
   */
  containers?: string;
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
   * The log list.
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
   * The request ID for this call, used for diagnostics and troubleshooting.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      containerInfo: 'ContainerInfo',
      containers: 'Containers',
      jobId: 'JobId',
      logs: 'Logs',
      podId: 'PodId',
      podUid: 'PodUid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerInfo: ContainerInfo,
      containers: 'string',
      jobId: 'string',
      logs: { 'type': 'array', 'itemType': 'string' },
      podId: 'string',
      podUid: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.containerInfo && typeof (this.containerInfo as any).validate === 'function') {
      (this.containerInfo as any).validate();
    }
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

