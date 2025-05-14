// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecutePlatformTaskRequest extends $dara.Model {
  /**
   * @example
   * APP_PBxxx
   */
  appType?: string;
  /**
   * @example
   * []
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
   * Agree
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
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      formDataJson: 'FormDataJson',
      language: 'Language',
      noExecuteExpressions: 'NoExecuteExpressions',
      outResult: 'OutResult',
      processInstanceId: 'ProcessInstanceId',
      remark: 'Remark',
      systemToken: 'SystemToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      formDataJson: 'string',
      language: 'string',
      noExecuteExpressions: 'string',
      outResult: 'string',
      processInstanceId: 'string',
      remark: 'string',
      systemToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

