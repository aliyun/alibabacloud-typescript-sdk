// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiOutboundTaskExecDetailRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  batchVersion?: number;
  /**
   * @example
   * 123456
   */
  caseId?: number;
  /**
   * @example
   * 1
   */
  caseStatus?: number;
  /**
   * @example
   * 1632290119000
   */
  createTimeEnd?: number;
  /**
   * @example
   * 1632289999000
   */
  createTimeStart?: number;
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
   * agent_***
   */
  instanceId?: string;
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
   * 150****000
   */
  phoneNum?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchVersion: 'BatchVersion',
      caseId: 'CaseId',
      caseStatus: 'CaseStatus',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      phoneNum: 'PhoneNum',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchVersion: 'number',
      caseId: 'number',
      caseStatus: 'number',
      createTimeEnd: 'number',
      createTimeStart: 'number',
      currentPage: 'number',
      instanceId: 'string',
      pageSize: 'number',
      phoneNum: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

