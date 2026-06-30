// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSaveFormDataRequest extends $dara.Model {
  appType?: string;
  asynchronousExecution?: boolean;
  formDataJsonList?: string[];
  formUuid?: string;
  keepRunningAfterException?: boolean;
  noExecuteExpression?: boolean;
  systemToken?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      asynchronousExecution: 'AsynchronousExecution',
      formDataJsonList: 'FormDataJsonList',
      formUuid: 'FormUuid',
      keepRunningAfterException: 'KeepRunningAfterException',
      noExecuteExpression: 'NoExecuteExpression',
      systemToken: 'SystemToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      asynchronousExecution: 'boolean',
      formDataJsonList: { 'type': 'array', 'itemType': 'string' },
      formUuid: 'string',
      keepRunningAfterException: 'boolean',
      noExecuteExpression: 'boolean',
      systemToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.formDataJsonList)) {
      $dara.Model.validateArray(this.formDataJsonList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

