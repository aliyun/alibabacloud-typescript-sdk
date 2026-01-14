// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCrossBorderApprovalStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Cross border permissions of Alibaba Cloud account (main account).
   * 
   * -  UNAPPLIED : No cross-border permission application has been submitted or application records cannot be found.
   * -  APPLIED : Cross-border permission review in progress.
   * -  REJECTED : Cross-border permission review failed.
   * -  PASSED : Cross-border permission review passed.
   * 
   * @example
   * UNAPPLIED
   */
  approvalStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F96E634B-A523-587F-9A09-AE8B2FD04B9C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      approvalStatus: 'ApprovalStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

