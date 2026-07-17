// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSignalsResponseBodySignals extends $dara.Model {
  /**
   * @example
   * 2025-12-30T14:07:38+08:00
   */
  gmtCreated?: string;
  /**
   * @example
   * 2025-12-30T14:07:38+08:00
   */
  gmtModified?: string;
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
   * oper*********
   */
  signalId?: string;
  /**
   * @example
   * Stopped
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      message: 'Message',
      podNames: 'PodNames',
      reason: 'Reason',
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
      message: 'string',
      podNames: { 'type': 'array', 'itemType': 'string' },
      reason: 'string',
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

export class ListSignalsResponseBody extends $dara.Model {
  /**
   * @example
   * dlc-...
   */
  jobId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-xxxxxxx
   */
  requestId?: string;
  signals?: ListSignalsResponseBodySignals[];
  /**
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      signals: 'Signals',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      signals: { 'type': 'array', 'itemType': ListSignalsResponseBodySignals },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.signals)) {
      $dara.Model.validateArray(this.signals);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

