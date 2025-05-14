// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserLatestPlanResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  accountHandleStatus?: number;
  /**
   * @example
   * 2022-02-02
   */
  accountHandleTime?: string;
  /**
   * @example
   * 0
   */
  accountType?: number;
  /**
   * @example
   * 2022-02-05
   */
  agreementFirstSignTime?: string;
  /**
   * @example
   * 2022-02-06
   */
  agreementLastSignTime?: string;
  /**
   * @example
   * 1
   */
  agreementStatus?: number;
  /**
   * @example
   * 2022-02-04
   */
  dataHandleEndTime?: string;
  /**
   * @example
   * 2022-02-03
   */
  dataHandleStartTime?: string;
  /**
   * @example
   * 1
   */
  dataHandleStatus?: number;
  /**
   * @example
   * 1
   */
  exclusivePlan?: number;
  /**
   * @example
   * 1
   */
  newAccountUid?: number;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      accountHandleStatus: 'accountHandleStatus',
      accountHandleTime: 'accountHandleTime',
      accountType: 'accountType',
      agreementFirstSignTime: 'agreementFirstSignTime',
      agreementLastSignTime: 'agreementLastSignTime',
      agreementStatus: 'agreementStatus',
      dataHandleEndTime: 'dataHandleEndTime',
      dataHandleStartTime: 'dataHandleStartTime',
      dataHandleStatus: 'dataHandleStatus',
      exclusivePlan: 'exclusivePlan',
      newAccountUid: 'newAccountUid',
      requestId: 'requestId',
      status: 'status',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountHandleStatus: 'number',
      accountHandleTime: 'string',
      accountType: 'number',
      agreementFirstSignTime: 'string',
      agreementLastSignTime: 'string',
      agreementStatus: 'number',
      dataHandleEndTime: 'string',
      dataHandleStartTime: 'string',
      dataHandleStatus: 'number',
      exclusivePlan: 'number',
      newAccountUid: 'number',
      requestId: 'string',
      status: 'number',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

