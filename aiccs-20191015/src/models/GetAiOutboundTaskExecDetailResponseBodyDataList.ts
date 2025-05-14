// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiOutboundTaskExecDetailResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 1
   */
  batchVersion?: number;
  /**
   * @example
   * 123
   */
  bizData?: string;
  /**
   * @example
   * 1
   */
  callCount?: number;
  /**
   * @example
   * 123456
   */
  caseId?: number;
  /**
   * @example
   * 1632289999000
   */
  createTime?: number;
  /**
   * @example
   * 未接通
   */
  lastCallResult?: string;
  /**
   * @example
   * 150****0000
   */
  phoneNum?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 待呼叫
   */
  statusDesc?: number;
  static names(): { [key: string]: string } {
    return {
      batchVersion: 'BatchVersion',
      bizData: 'BizData',
      callCount: 'CallCount',
      caseId: 'CaseId',
      createTime: 'CreateTime',
      lastCallResult: 'LastCallResult',
      phoneNum: 'PhoneNum',
      status: 'Status',
      statusDesc: 'StatusDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchVersion: 'number',
      bizData: 'string',
      callCount: 'number',
      caseId: 'number',
      createTime: 'number',
      lastCallResult: 'string',
      phoneNum: 'string',
      status: 'number',
      statusDesc: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

