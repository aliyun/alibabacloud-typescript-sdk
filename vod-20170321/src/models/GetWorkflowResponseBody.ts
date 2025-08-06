// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowResponseBodyWorkflowInfo extends $dara.Model {
  actionList?: string;
  appId?: string;
  callbackConfig?: string;
  creationTime?: string;
  description?: string;
  modifyTime?: string;
  name?: string;
  state?: string;
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      actionList: 'ActionList',
      appId: 'AppId',
      callbackConfig: 'CallbackConfig',
      creationTime: 'CreationTime',
      description: 'Description',
      modifyTime: 'ModifyTime',
      name: 'Name',
      state: 'State',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionList: 'string',
      appId: 'string',
      callbackConfig: 'string',
      creationTime: 'string',
      description: 'string',
      modifyTime: 'string',
      name: 'string',
      state: 'string',
      workflowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowResponseBody extends $dara.Model {
  requestId?: string;
  workflowInfo?: GetWorkflowResponseBodyWorkflowInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workflowInfo: 'WorkflowInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workflowInfo: GetWorkflowResponseBodyWorkflowInfo,
    };
  }

  validate() {
    if(this.workflowInfo && typeof (this.workflowInfo as any).validate === 'function') {
      (this.workflowInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

