// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApprovalsResponseBodyApprovals } from "./ListApprovalsResponseBodyApprovals";


export class ListApprovalsResponseBody extends $dara.Model {
  approvals?: ListApprovalsResponseBodyApprovals[];
  /**
   * @example
   * 6965F5BA-53B6-5650-A708-51F090F843BB
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: string;
  static names(): { [key: string]: string } {
    return {
      approvals: 'Approvals',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvals: { 'type': 'array', 'itemType': ListApprovalsResponseBodyApprovals },
      requestId: 'string',
      totalNum: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.approvals)) {
      $dara.Model.validateArray(this.approvals);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

