// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUpdateFormDataByInstanceMapShrinkRequest extends $dara.Model {
  appType?: string;
  asynchronousExecution?: boolean;
  formUuid?: string;
  ignoreEmpty?: boolean;
  noExecuteExpression?: boolean;
  systemToken?: string;
  updateFormDataJsonMapShrink?: string;
  useLatestFormSchemaVersion?: boolean;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      asynchronousExecution: 'AsynchronousExecution',
      formUuid: 'FormUuid',
      ignoreEmpty: 'IgnoreEmpty',
      noExecuteExpression: 'NoExecuteExpression',
      systemToken: 'SystemToken',
      updateFormDataJsonMapShrink: 'UpdateFormDataJsonMap',
      useLatestFormSchemaVersion: 'UseLatestFormSchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      asynchronousExecution: 'boolean',
      formUuid: 'string',
      ignoreEmpty: 'boolean',
      noExecuteExpression: 'boolean',
      systemToken: 'string',
      updateFormDataJsonMapShrink: 'string',
      useLatestFormSchemaVersion: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

