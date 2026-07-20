// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSignalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-03-18T10:02:04+08:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2026-03-18T10:02:04+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * oper***********
   */
  jobId?: string;
  /**
   * @remarks
   * The status description, which contains a summary for each pod (number of successful deliveries, names of failed or pending pods, etc.).
   * 
   * @example
   * signal delivered to 1 pods
   */
  message?: string;
  /**
   * @remarks
   * The list of pod names.
   */
  podNames?: string[];
  /**
   * @remarks
   * The status reason code, such as `Completed`, `SignalFailed`, or `StoppedByJobEnded`.
   * 
   * @example
   * Completed
   */
  reason?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-xxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The list of role objects.
   */
  roles?: string[];
  /**
   * @remarks
   * The delivery scope.
   * 
   * @example
   * pods
   */
  scope?: string;
  /**
   * @remarks
   * The signal.
   * 
   * @example
   * SIGUSR1
   */
  signal?: string;
  /**
   * @remarks
   * The signal ID.
   * 
   * @example
   * dlc***********
   */
  signalId?: string;
  /**
   * @remarks
   * The signal status.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      jobId: 'JobId',
      message: 'Message',
      podNames: 'PodNames',
      reason: 'Reason',
      requestId: 'RequestId',
      roles: 'Roles',
      scope: 'Scope',
      signal: 'Signal',
      signalId: 'SignalId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'string',
      gmtModified: 'string',
      jobId: 'string',
      message: 'string',
      podNames: { 'type': 'array', 'itemType': 'string' },
      reason: 'string',
      requestId: 'string',
      roles: { 'type': 'array', 'itemType': 'string' },
      scope: 'string',
      signal: 'string',
      signalId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.podNames)) {
      $dara.Model.validateArray(this.podNames);
    }
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

