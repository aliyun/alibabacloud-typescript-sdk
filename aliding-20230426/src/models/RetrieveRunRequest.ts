// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrieveRunRequestExtLoginUser extends $dara.Model {
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

export class RetrieveRunRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * assistantId1
   */
  assistantId?: string;
  extLoginUser?: RetrieveRunRequestExtLoginUser;
  /**
   * @example
   * assistantId
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
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      extLoginUser: 'extLoginUser',
      originalAssistantId: 'originalAssistantId',
      runId: 'runId',
      sourceIdOfOriginalAssistantId: 'sourceIdOfOriginalAssistantId',
      sourceTypeOfOriginalAssistantId: 'sourceTypeOfOriginalAssistantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      extLoginUser: RetrieveRunRequestExtLoginUser,
      originalAssistantId: 'string',
      runId: 'string',
      sourceIdOfOriginalAssistantId: 'string',
      sourceTypeOfOriginalAssistantId: 'string',
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

