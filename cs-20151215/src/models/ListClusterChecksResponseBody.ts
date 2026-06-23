// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterChecksResponseBodyChecks extends $dara.Model {
  /**
   * @remarks
   * The check ID.
   * 
   * @example
   * 1697100584236600453-ce0da5a1d627e4e9e9f96cae8ad07****-clustercheck-lboto
   */
  checkId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-04-11T02:56:02.565982623Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The completion time.
   * 
   * @example
   * 2025-04-11T02:56:18.881054031Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * The check status message.
   * 
   * @example
   * task succeed
   */
  message?: string;
  /**
   * @remarks
   * The check status.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The check type.
   * 
   * @example
   * ClusterUpgrade
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'check_id',
      createdAt: 'created_at',
      finishedAt: 'finished_at',
      message: 'message',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      createdAt: 'string',
      finishedAt: 'string',
      message: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterChecksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of checks.
   */
  checks?: ListClusterChecksResponseBodyChecks[];
  static names(): { [key: string]: string } {
    return {
      checks: 'checks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checks: { 'type': 'array', 'itemType': ListClusterChecksResponseBodyChecks },
    };
  }

  validate() {
    if(Array.isArray(this.checks)) {
      $dara.Model.validateArray(this.checks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

