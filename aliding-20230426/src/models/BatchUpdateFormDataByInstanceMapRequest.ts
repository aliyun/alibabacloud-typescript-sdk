// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUpdateFormDataByInstanceMapRequest extends $dara.Model {
  appType?: string;
  asynchronousExecution?: boolean;
  formUuid?: string;
  ignoreEmpty?: boolean;
  noExecuteExpression?: boolean;
  systemToken?: string;
  updateFormDataJsonMap?: { [key: string]: any };
  useLatestFormSchemaVersion?: boolean;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      asynchronousExecution: 'AsynchronousExecution',
      formUuid: 'FormUuid',
      ignoreEmpty: 'IgnoreEmpty',
      noExecuteExpression: 'NoExecuteExpression',
      systemToken: 'SystemToken',
      updateFormDataJsonMap: 'UpdateFormDataJsonMap',
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
      updateFormDataJsonMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      useLatestFormSchemaVersion: 'boolean',
    };
  }

  validate() {
    if(this.updateFormDataJsonMap) {
      $dara.Model.validateMap(this.updateFormDataJsonMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

