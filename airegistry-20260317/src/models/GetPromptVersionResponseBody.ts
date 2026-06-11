// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPromptVersionResponseBodyDataVariables extends $dara.Model {
  defaultValue?: string;
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPromptVersionResponseBodyData extends $dara.Model {
  commitMsg?: string;
  gmtModified?: number;
  md5?: string;
  promptKey?: string;
  srcUser?: string;
  status?: string;
  template?: string;
  variables?: GetPromptVersionResponseBodyDataVariables[];
  version?: string;
  static names(): { [key: string]: string } {
    return {
      commitMsg: 'CommitMsg',
      gmtModified: 'GmtModified',
      md5: 'Md5',
      promptKey: 'PromptKey',
      srcUser: 'SrcUser',
      status: 'Status',
      template: 'Template',
      variables: 'Variables',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitMsg: 'string',
      gmtModified: 'number',
      md5: 'string',
      promptKey: 'string',
      srcUser: 'string',
      status: 'string',
      template: 'string',
      variables: { 'type': 'array', 'itemType': GetPromptVersionResponseBodyDataVariables },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPromptVersionResponseBody extends $dara.Model {
  data?: GetPromptVersionResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetPromptVersionResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

