// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowResponseBodyWorkflowInfoList extends $dara.Model {
  actionList?: string;
  appId?: string;
  creationTime?: string;
  modifyTime?: string;
  name?: string;
  state?: string;
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      actionList: 'ActionList',
      appId: 'AppId',
      creationTime: 'CreationTime',
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
      creationTime: 'string',
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

export class ListWorkflowResponseBody extends $dara.Model {
  requestId?: string;
  workflowInfoList?: ListWorkflowResponseBodyWorkflowInfoList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workflowInfoList: 'WorkflowInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workflowInfoList: { 'type': 'array', 'itemType': ListWorkflowResponseBodyWorkflowInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.workflowInfoList)) {
      $dara.Model.validateArray(this.workflowInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

