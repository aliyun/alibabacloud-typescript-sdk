// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerunWorkflowNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of node keys affected by this rerun, which the caller can use to refresh data. This list is always included in a successful response and may be omitted in an error response.
   * 
   * @example
   * ["query.amount"]
   */
  affectedNodeKeys?: string[];
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The current physical plan ID after the rerun. Rerunning a fixed planning node may generate a new plan. Use this value for subsequent queries.
   * 
   * @example
   * plan_new
   */
  planId?: string;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The current plan revision number after the rerun.
   * 
   * @example
   * 2
   */
  revision?: number;
  /**
   * @remarks
   * The current workflow run ID. This value remains unchanged when a fixed node generates a new revision.
   * 
   * @example
   * run_20261105_01
   */
  runId?: string;
  /**
   * @remarks
   * The workflow state version after the rerun is accepted.
   * 
   * @example
   * 8
   */
  stateVersion?: number;
  static names(): { [key: string]: string } {
    return {
      affectedNodeKeys: 'affectedNodeKeys',
      code: 'code',
      message: 'message',
      planId: 'planId',
      requestId: 'requestId',
      revision: 'revision',
      runId: 'runId',
      stateVersion: 'stateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedNodeKeys: { 'type': 'array', 'itemType': 'string' },
      code: 'string',
      message: 'string',
      planId: 'string',
      requestId: 'string',
      revision: 'number',
      runId: 'string',
      stateVersion: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.affectedNodeKeys)) {
      $dara.Model.validateArray(this.affectedNodeKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

