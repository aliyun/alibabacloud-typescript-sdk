// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApprovalProcessesRequest extends $dara.Model {
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
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * pid-6d6ad77d5b52****
   */
  policyId?: string;
  /**
   * @example
   * DlpSend
   */
  policyType?: string;
  processIds?: string[];
  /**
   * @example
   * test
   */
  processName?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      policyType: 'PolicyType',
      processIds: 'ProcessIds',
      processName: 'ProcessName',
      saseUserId: 'SaseUserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      policyId: 'string',
      policyType: 'string',
      processIds: { 'type': 'array', 'itemType': 'string' },
      processName: 'string',
      saseUserId: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.processIds)) {
      $dara.Model.validateArray(this.processIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

