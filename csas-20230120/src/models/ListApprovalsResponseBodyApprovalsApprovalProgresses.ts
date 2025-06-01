// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApprovalsResponseBodyApprovalsApprovalProgressesOperators } from "./ListApprovalsResponseBodyApprovalsApprovalProgressesOperators";


export class ListApprovalsResponseBodyApprovalsApprovalProgresses extends $dara.Model {
  /**
   * @example
   * Approve
   */
  action?: string;
  comment?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  executor?: string;
  operators?: ListApprovalsResponseBodyApprovalsApprovalProgressesOperators[];
  /**
   * @example
   * Approved
   */
  status?: string;
  /**
   * @example
   * 1736752000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      comment: 'Comment',
      executor: 'Executor',
      operators: 'Operators',
      status: 'Status',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      comment: 'string',
      executor: 'string',
      operators: { 'type': 'array', 'itemType': ListApprovalsResponseBodyApprovalsApprovalProgressesOperators },
      status: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.operators)) {
      $dara.Model.validateArray(this.operators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

