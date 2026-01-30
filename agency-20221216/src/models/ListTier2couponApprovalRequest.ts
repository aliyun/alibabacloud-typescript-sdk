// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTier2CouponApprovalRequest extends $dara.Model {
  /**
   * @example
   * d54ca949-9b88-4514-add3-c6029c4027f4
   */
  applicationSheetId?: string;
  /**
   * @example
   * 1
   */
  approvalStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * test account
   */
  t2PartnerName?: string;
  /**
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

