// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTaskRequest extends $dara.Model {
  /**
   * @example
   * APP_PBKT0MFBEBTDO8T7SLVP
   */
  appType?: string;
  /**
   * @example
   * http://
   */
  digitalSignUrl?: string;
  /**
   * @example
   * {}
   */
  formDataJson?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @example
   * y
   */
  noExecuteExpressions?: string;
  /**
   * @example
   * AGREE
   */
  outResult?: string;
  /**
   * @example
   * f30233fb-72e1-4af4-8cb8-c7e0ea9ee530
   */
  processInstanceId?: string;
  remark?: string;
  /**
   * @example
   * hexxyy
   */
  systemToken?: string;
  /**
   * @example
   * 12002575L
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      digitalSignUrl: 'DigitalSignUrl',
      formDataJson: 'FormDataJson',
      language: 'Language',
      noExecuteExpressions: 'NoExecuteExpressions',
      outResult: 'OutResult',
      processInstanceId: 'ProcessInstanceId',
      remark: 'Remark',
      systemToken: 'SystemToken',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      digitalSignUrl: 'string',
      formDataJson: 'string',
      language: 'string',
      noExecuteExpressions: 'string',
      outResult: 'string',
      processInstanceId: 'string',
      remark: 'string',
      systemToken: 'string',
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

