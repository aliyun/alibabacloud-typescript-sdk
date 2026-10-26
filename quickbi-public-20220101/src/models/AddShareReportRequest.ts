// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddShareReportRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization type. Valid values:
   * 
   * - 1: View only.
   * - 3: View and export.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  authPoint?: number;
  /**
   * @remarks
   * The expiration time of the sharing, in millisecond-level UNIX timestamp format.
   * 
   * This parameter is required.
   * 
   * @example
   * 1608202110838
   */
  expireDate?: number;
  /**
   * @remarks
   * The ID of the share recipient. The value can be a Quick BI user ID or a user group ID.
   * 
   * - ShareToType=0 (user): ShareTo is the user ID.
   * - ShareToType=1 (user group): ShareTo is the user group ID.
   * - ShareToType=2 (organization): ShareTo is the organization ID.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  shareToId?: string;
  /**
   * @remarks
   * The sharing type. Valid values:
   * 
   * - 0: user
   * - 1: user group
   * - 2: organization
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  shareToType?: number;
  /**
   * @remarks
   * The ID of the work to share. Works include data portals, dashboards, workbooks, and ad hoc queries.
   * 
   * This parameter is required.
   * 
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      authPoint: 'AuthPoint',
      expireDate: 'ExpireDate',
      shareToId: 'ShareToId',
      shareToType: 'ShareToType',
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authPoint: 'number',
      expireDate: 'number',
      shareToId: 'string',
      shareToType: 'number',
      worksId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

