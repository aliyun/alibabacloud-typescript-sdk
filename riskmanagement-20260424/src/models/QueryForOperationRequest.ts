// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryForOperationRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the application.
   * 
   * @example
   * 1791937232000
   */
  applyTimeEnd?: number;
  /**
   * @remarks
   * The start time of the application.
   * 
   * @example
   * 1791937132000
   */
  applyTimeStart?: number;
  /**
   * @remarks
   * The asset type. Valid values:
   * 
   * - **EIP**: VPC public IP address.
   * - **SLB**: load balancing.
   * - **ECS**: Public IP address in the classic network.
   * 
   * @example
   * EIP
   */
  assetType?: string;
  /**
   * @remarks
   * The end time of the review.
   * 
   * @example
   * 1791937232000
   */
  auditTimeEnd?: number;
  /**
   * @remarks
   * The start time of the review.
   * 
   * @example
   * 1791937132000
   */
  auditTimeStart?: number;
  /**
   * @remarks
   * The current page number.
   * 
   * > Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The customer UID.
   * 
   * @example
   * 1647796581073291
   */
  customerUid?: string;
  /**
   * @remarks
   * IP
   * 
   * @example
   * 12.3*.22.11
   */
  ip?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **auditing**: Under review.
   * - **approved**: Approved.
   * - **rejected**: Rejected.
   * - **effective**: Effective.
   * - **ineffective**: Ineffective.
   * 
   * @example
   * approved
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applyTimeEnd: 'ApplyTimeEnd',
      applyTimeStart: 'ApplyTimeStart',
      assetType: 'AssetType',
      auditTimeEnd: 'AuditTimeEnd',
      auditTimeStart: 'AuditTimeStart',
      currentPage: 'CurrentPage',
      customerUid: 'CustomerUid',
      ip: 'Ip',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyTimeEnd: 'number',
      applyTimeStart: 'number',
      assetType: 'string',
      auditTimeEnd: 'number',
      auditTimeStart: 'number',
      currentPage: 'number',
      customerUid: 'string',
      ip: 'string',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

