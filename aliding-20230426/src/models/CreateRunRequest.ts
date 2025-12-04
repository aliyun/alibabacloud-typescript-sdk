// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRunRequestExtLoginUser extends $dara.Model {
  /**
   * @example
   * mozi
   */
  extLoginUserDomain?: string;
  /**
   * @example
   * outeruserId123
   */
  extLoginUserId?: string;
  /**
   * @example
   * 外部游客1
   */
  extLoginUserName?: string;
  static names(): { [key: string]: string } {
    return {
      extLoginUserDomain: 'extLoginUserDomain',
      extLoginUserId: 'extLoginUserId',
      extLoginUserName: 'extLoginUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extLoginUserDomain: 'string',
      extLoginUserId: 'string',
      extLoginUserName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRunRequest extends $dara.Model {
  allowStructViewContent?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * assistantId1
   */
  assistantId?: string;
  extLoginUser?: CreateRunRequestExtLoginUser;
  /**
   * @example
   * assistantId
   */
  originalAssistantId?: string;
  /**
   * @example
   * agentKey1
   */
  sourceIdOfOriginalAssistantId?: string;
  /**
   * @example
   * 1
   */
  sourceTypeOfOriginalAssistantId?: string;
  /**
   * @example
   * false
   */
  stream?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * threadId123
   */
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      allowStructViewContent: 'allowStructViewContent',
      assistantId: 'assistantId',
      extLoginUser: 'extLoginUser',
      originalAssistantId: 'originalAssistantId',
      sourceIdOfOriginalAssistantId: 'sourceIdOfOriginalAssistantId',
      sourceTypeOfOriginalAssistantId: 'sourceTypeOfOriginalAssistantId',
      stream: 'stream',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowStructViewContent: 'boolean',
      assistantId: 'string',
      extLoginUser: CreateRunRequestExtLoginUser,
      originalAssistantId: 'string',
      sourceIdOfOriginalAssistantId: 'string',
      sourceTypeOfOriginalAssistantId: 'string',
      stream: 'boolean',
      threadId: 'string',
    };
  }

  validate() {
    if(this.extLoginUser && typeof (this.extLoginUser as any).validate === 'function') {
      (this.extLoginUser as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

