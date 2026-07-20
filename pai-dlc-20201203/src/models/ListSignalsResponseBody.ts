// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSignalsResponseBodySignals extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-12-30T14:07:38+08:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-12-30T14:07:38+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The message returned with the result.
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
   * The reason.
   * 
   * @example
   * Completed
   */
  reason?: string;
  /**
   * @remarks
   * The list of role types.
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
   * The signal code.
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
   * oper*********
   */
  signalId?: string;
  /**
   * @remarks
   * The signal status.
   * 
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
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc-...
   */
  jobId?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * The list of signal records for the job. Each element has the same structure as the response of GetSignal.
   */
  signals?: ListSignalsResponseBodySignals[];
  /**
   * @remarks
   * The total number of records.
   * 
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

