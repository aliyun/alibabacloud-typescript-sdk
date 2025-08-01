// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterChecksResponseBodyChecks extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster check task.
   * 
   * @example
   * 1697100584236600453-ce0da5a1d627e4e9e9f96cae8ad07****-clustercheck-lboto
   */
  checkId?: string;
  /**
   * @remarks
   * The time when the cluster check task was created.
   * 
   * @example
   * 2023-10-16T08:31:20.292030178Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The time when the cluster check task was completed.
   * 
   * @example
   * 2023-10-16T08:35:20.292030178Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * The message that indicates the status of the cluster check task.
   * 
   * @example
   * task succeed
   */
  message?: string;
  /**
   * @remarks
   * The status of the cluster check.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The check method.
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
   * The list of check items.
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

