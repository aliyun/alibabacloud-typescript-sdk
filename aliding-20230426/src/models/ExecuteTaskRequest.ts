// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTaskRequest extends $dara.Model {
  appType?: string;
  digitalSignUrl?: string;
  formDataJson?: string;
  language?: string;
  noExecuteExpressions?: string;
  outResult?: string;
  processInstanceId?: string;
  remark?: string;
  systemToken?: string;
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

