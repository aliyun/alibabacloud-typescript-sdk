// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPromptVersionResponseBodyDataVariables extends $dara.Model {
  /**
   * @remarks
   * Default value
   * 
   * @example
   * code
   */
  defaultValue?: string;
  /**
   * @remarks
   * Variable description
   * 
   * @example
   * domain
   */
  description?: string;
  /**
   * @remarks
   * Variable name
   * 
   * @example
   * domain
   */
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
  /**
   * @remarks
   * Commit message of this version
   * 
   * @example
   * This is a test version
   */
  commitMsg?: string;
  /**
   * @remarks
   * Last modified time of the prompt
   * 
   * @example
   * 1605345828000
   */
  gmtModified?: number;
  /**
   * @remarks
   * MD5 hash of the prompt content for this version
   * 
   * @example
   * 93EF3AC0C56DDACB5A9E528BB1C825C8
   */
  md5?: string;
  /**
   * @remarks
   * Unique identifier of the prompt
   * 
   * @example
   * customer-service-qa
   */
  promptKey?: string;
  /**
   * @remarks
   * Creator of this version
   * 
   * @example
   * admin
   */
  srcUser?: string;
  /**
   * @remarks
   * Version status. Draft: draft / Published: online
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * Template content of the prompt version
   * 
   * @example
   * You are a {{domain}} expert.
   */
  template?: string;
  /**
   * @remarks
   * List of variables for this version
   */
  variables?: GetPromptVersionResponseBodyDataVariables[];
  /**
   * @remarks
   * Version number
   * 
   * @example
   * 0.0.1
   */
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
  /**
   * @remarks
   * Query result
   */
  data?: GetPromptVersionResponseBodyData;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * D9E87E66-9EF0-5C10-A5E6-924020A0C9B7
   */
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

