// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddShareReportRequest extends $dara.Model {
  /**
   * @remarks
   * The scope of authorization. Valid values:
   * 
   * *   1: view only
   * *   3: View and export
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  authPoint?: number;
  /**
   * @remarks
   * The validity period of the share. The value is a timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1608202110838
   */
  expireDate?: number;
  /**
   * @remarks
   * The ID of the person to be shared, which may be the user ID of the Quick BI or the user group ID.
   * 
   * *   If ShareToType is 0 (user), ShareTo is the user ID.
   * *   When ShareToType is set to 1 (user group), ShareTo is the user group ID.
   * *   When ShareToType=2 (organization), ShareTo is the ID of the organization.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  shareToId?: string;
  /**
   * @remarks
   * The share type of the template. Valid values:
   * 
   * *   0: user
   * *   1: user group
   * *   2: organization
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  shareToType?: number;
  /**
   * @remarks
   * The ID of the shared work. The works here include BI portal, dashboards, spreadsheets, and self-service access.
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

