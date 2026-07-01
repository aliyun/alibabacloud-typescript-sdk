// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsQualificationRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The company name.
   * 
   * @example
   * 阿里云云通信有限公司
   */
  companyName?: string;
  /**
   * @remarks
   * The name of the legal representative.
   * 
   * @example
   * 李华
   */
  legalPersonName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 50**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The qualification name.
   * 
   * @example
   * 阿里云云通信有限公司李华
   */
  qualificationGroupName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The review status. Valid values:
   * 
   * - INIT: Under review.
   * - NOT_PASS: Review rejected. 
   * - PASS: Review approved.
   * - NOT_FINISH: Additional information required.
   * - CANCEL: Withdrawn.
   * 
   * @example
   * PASS
   */
  state?: string;
  /**
   * @remarks
   * The purpose of the qualification application. Valid values:
   * 
   * - **true**: For self-use.
   * - **false**: For use by others.
   * 
   * @example
   * true
   */
  useBySelf?: boolean;
  /**
   * @remarks
   * The review ticket ID.
   * 
   * @example
   * 2001****
   */
  workOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      companyName: 'CompanyName',
      legalPersonName: 'LegalPersonName',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qualificationGroupName: 'QualificationGroupName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      state: 'State',
      useBySelf: 'UseBySelf',
      workOrderId: 'WorkOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyName: 'string',
      legalPersonName: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      qualificationGroupName: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      state: 'string',
      useBySelf: 'boolean',
      workOrderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

