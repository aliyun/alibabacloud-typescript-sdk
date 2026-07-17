// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSignalResponseBody extends $dara.Model {
  /**
   * @example
   * 2026-03-18T10:02:04+08:00
   */
  gmtCreated?: string;
  /**
   * @example
   * 2026-03-18T10:02:04+08:00
   */
  gmtModified?: string;
  /**
   * @example
   * oper***********
   */
  jobId?: string;
  /**
   * @example
   * signal delivered to 1 pods
   */
  message?: string;
  podNames?: string[];
  /**
   * @example
   * Completed
   */
  reason?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-xxxxxxx
   */
  requestId?: string;
  roles?: string[];
  /**
   * @example
   * pods
   */
  scope?: string;
  /**
   * @example
   * SIGUSR1
   */
  signal?: string;
  /**
   * @example
   * dlc***********
   */
  signalId?: string;
  /**
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

