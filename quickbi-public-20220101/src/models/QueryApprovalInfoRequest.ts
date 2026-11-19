// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryApprovalInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 1000.
   * 
   * @example
   * 1000
   */
  pageSize?: number;
  /**
   * @remarks
   * The approval status. Valid values:
   * - 0: Pending.
   * - 1: Processed.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The QBI user ID of the current approver.
   * 
   * This parameter is required.
   * 
   * @example
   * 12352fasdavsa
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      status: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

