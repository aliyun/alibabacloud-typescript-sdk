// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelReportShareRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data work. Data works include data portals, dashboards, workbooks, and ad hoc queries.
   * 
   * This parameter is required.
   * 
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  reportId?: string;
  /**
   * @remarks
   * The ID of the sharee. It can be a Quick BI user ID or a user group ID.
   * 
   * - If ShareToType is set to 0 (user), the value is the user ID.
   * - If ShareToType is set to 1 (user group), the value is the user group ID.
   * - If ShareToType is set to 2 (organization), the value is the organization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  shareToIds?: string;
  /**
   * @remarks
   * The deletion method. Valid values:
   * 
   * - 0: Delete by user.
   * - 1: Delete by user group.
   * - 2: Delete by organization.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  shareToType?: number;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
      shareToIds: 'ShareToIds',
      shareToType: 'ShareToType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
      shareToIds: 'string',
      shareToType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

