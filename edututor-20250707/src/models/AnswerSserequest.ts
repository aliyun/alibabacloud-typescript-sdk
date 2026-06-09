// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AnswerSSERequestMessages extends $dara.Model {
  content?: { [key: string]: string }[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      role: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerSSERequestParameters extends $dara.Model {
  /**
   * @example
   * 6
   */
  grade?: number;
  /**
   * @example
   * other
   */
  stage?: string;
  /**
   * @example
   * other
   */
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      grade: 'grade',
      stage: 'stage',
      subject: 'subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grade: 'number',
      stage: 'string',
      subject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerSSERequest extends $dara.Model {
  messages?: AnswerSSERequestMessages[];
  parameters?: AnswerSSERequestParameters;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-1ijrzuv3v0ivvls7
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
      parameters: 'parameters',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': AnswerSSERequestMessages },
      parameters: AnswerSSERequestParameters,
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

