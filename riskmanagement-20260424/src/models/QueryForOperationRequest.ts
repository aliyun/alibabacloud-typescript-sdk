// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryForOperationRequest extends $dara.Model {
  /**
   * @example
   * 1791937232000
   */
  applyTimeEnd?: number;
  /**
   * @example
   * 1791937132000
   */
  applyTimeStart?: number;
  /**
   * @example
   * EIP
   */
  assetType?: string;
  /**
   * @example
   * 1791937232000
   */
  auditTimeEnd?: number;
  /**
   * @example
   * 1791937132000
   */
  auditTimeStart?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 1647796581073291
   */
  customerUid?: string;
  /**
   * @example
   * 12.3*.22.11
   */
  ip?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
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

