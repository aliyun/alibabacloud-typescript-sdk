// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSaveFormDataShrinkRequest extends $dara.Model {
  appType?: string;
  asynchronousExecution?: boolean;
  formDataJsonListShrink?: string;
  formUuid?: string;
  keepRunningAfterException?: boolean;
  noExecuteExpression?: boolean;
  systemToken?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      asynchronousExecution: 'AsynchronousExecution',
      formDataJsonListShrink: 'FormDataJsonList',
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
      formDataJsonListShrink: 'string',
      formUuid: 'string',
      keepRunningAfterException: 'boolean',
      noExecuteExpression: 'boolean',
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

