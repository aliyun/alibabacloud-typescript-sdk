// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelReportShareRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the work. The works here include BI portal, dashboards, spreadsheets, and self-service access.
   * 
   * This parameter is required.
   * 
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  reportId?: string;
  /**
   * @remarks
   * The ID of the person to be shared, which may be the user ID of the Quick BI or the user group ID.
   * 
   * *   If ShareToType is 0 (user), ShareTo is the user ID.
   * *   When ShareToType is set to 1 (user group), ShareTo is the user group ID.
   * *   When ShareToType=2 (organization), ShareTo is the ID of the organization.
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
   * *   0: Delete by user
   * *   1: Delete by user group
   * *   2: Delete by organization
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

