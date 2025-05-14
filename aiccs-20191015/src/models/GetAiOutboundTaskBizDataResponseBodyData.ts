// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiOutboundTaskBizDataResponseBodyData extends $dara.Model {
  /**
   * @example
   * {"customer":123}
   */
  bizData?: string;
  /**
   * @example
   * 123
   */
  caseId?: number;
  /**
   * @example
   * 158****0000
   */
  phoneNum?: string;
  /**
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      bizData: 'BizData',
      caseId: 'CaseId',
      phoneNum: 'PhoneNum',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizData: 'string',
      caseId: 'number',
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

