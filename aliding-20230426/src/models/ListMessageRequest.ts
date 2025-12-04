// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageRequestExtLoginUser extends $dara.Model {
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

export class ListMessageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * assistantId1
   */
  assistantId?: string;
  extLoginUser?: ListMessageRequestExtLoginUser;
  /**
   * @example
   * 20
   */
  limit?: number;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * assistantId2
   */
  originalAssistantId?: string;
  /**
   * @example
   * runId123
   */
  runId?: string;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * threadId123
   */
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      extLoginUser: 'extLoginUser',
      limit: 'limit',
      order: 'order',
      originalAssistantId: 'originalAssistantId',
      runId: 'runId',
      sourceIdOfOriginalAssistantId: 'sourceIdOfOriginalAssistantId',
      sourceTypeOfOriginalAssistantId: 'sourceTypeOfOriginalAssistantId',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      extLoginUser: ListMessageRequestExtLoginUser,
      limit: 'number',
      order: 'string',
      originalAssistantId: 'string',
      runId: 'string',
      sourceIdOfOriginalAssistantId: 'string',
      sourceTypeOfOriginalAssistantId: 'string',
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

