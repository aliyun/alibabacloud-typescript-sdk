// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTier2CouponApprovalRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application form.
   * 
   * @example
   * d54ca949-9b88-4514-add3-c6029c4027f4
   */
  applicationSheetId?: string;
  /**
   * @remarks
   * The approval status. Valid values:
   * - 1: Revoked.
   * - 2: Under review.
   * - 3: Rejected.
   * - 4: Approved.
   * - 5: Approved but issuance failed.
   * - 8: Pending.
   * 
   * @example
   * 1
   */
  approvalStatus?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the secondary distributor.
   * 
   * @example
   * test account
   */
  t2PartnerName?: string;
  /**
   * @remarks
   * The UID of the secondary distributor.
   * 
   * @example
   * 5248516956402795
   */
  t2PartnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      applicationSheetId: 'ApplicationSheetId',
      approvalStatus: 'ApprovalStatus',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      t2PartnerName: 'T2PartnerName',
      t2PartnerUid: 'T2PartnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationSheetId: 'string',
      approvalStatus: 'string',
      currentPage: 'number',
      pageSize: 'number',
      t2PartnerName: 'string',
      t2PartnerUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

