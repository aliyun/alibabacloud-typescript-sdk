// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryShareListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Sharing permissions. Possible values:
   * 
   * - 1: View only
   * - 3: View and export
   * 
   * @example
   * 3
   */
  authPoint?: number;
  /**
   * @remarks
   * The timestamp in milliseconds indicating the expiration time of the authorization.
   * 
   * @example
   * 1640102400000
   */
  expireDate?: number;
  /**
   * @remarks
   * The ID of the work.
   * 
   * @example
   * 6b407e50-e774-406b-9956-da2425c2****
   */
  reportId?: string;
  /**
   * @remarks
   * The ID of the sharing configuration.
   * 
   * @example
   * 0ab9659e-29cf-47d7-a364-3a91553b****
   */
  shareId?: string;
  /**
   * @remarks
   * The ID of the sharing target, which could be a user ID or a group ID in Quick BI.
   * 
   * - When ShareToType=2 (all members within an organization), ShareToId is the organization ID.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  shareToId?: string;
  /**
   * @remarks
   * The name of the sharing target.
   * 
   * @example
   * test
   */
  shareToName?: string;
  /**
   * @remarks
   * The type of sharing. Possible values:
   * 
   * - 0: User
   * - 1: Group
   * - 2: Organization
   * - 3: Space
   * 
   * @example
   * 0
   */
  shareToType?: number;
  /**
   * @remarks
   * The type of the shared work. The value range includes: 
   * - dataProduct: Data Portal 
   * - dashboard: Dashboard 
   * - report: Spreadsheet 
   * - dashboardOfflineQuery: Self-service Data Extraction 
   * - ANALYSIS: Ad-hoc Analysis 
   * - DATAFORM: Data Entry 
   * - SCREEN: Data Visualization Screen
   * 
   * @example
   * dashboard
   */
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      authPoint: 'AuthPoint',
      expireDate: 'ExpireDate',
      reportId: 'ReportId',
      shareId: 'ShareId',
      shareToId: 'ShareToId',
      shareToName: 'ShareToName',
      shareToType: 'ShareToType',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authPoint: 'number',
      expireDate: 'number',
      reportId: 'string',
      shareId: 'string',
      shareToId: 'string',
      shareToName: 'string',
      shareToType: 'number',
      shareType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

