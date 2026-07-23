// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShoppingAssistantResponseBodyCitation extends $dara.Model {
  /**
   * @remarks
   * The ID of the `item`.
   * 
   * @example
   * 0005
   */
  itemId?: string;
  /**
   * @remarks
   * The reference data type. Fixed value: `item`.
   * 
   * @example
   * item
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShoppingAssistantResponseBodyResultCitation extends $dara.Model {
  /**
   * @remarks
   * The ID of the item.
   * 
   * @example
   * 48
   */
  itemId?: string;
  /**
   * @remarks
   * The reference data type. Fixed value: item.
   * 
   * @example
   * item
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShoppingAssistantResponseBodyResultStepInfo extends $dara.Model {
  /**
   * @remarks
   * The step.
   * 
   * @example
   * analyze_requirement
   */
  step?: string;
  static names(): { [key: string]: string } {
    return {
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      step: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShoppingAssistantResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The citation information.
   */
  citation?: ShoppingAssistantResponseBodyResultCitation;
  /**
   * @remarks
   * The returned content.
   * 
   * @example
   * Here are some light-colored long-sleeve shirts I picked for you:\\\\n.
   */
  content?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @remarks
   * The step information.
   */
  stepInfo?: ShoppingAssistantResponseBodyResultStepInfo;
  /**
   * @remarks
   * The stop reason.
   * 
   * @example
   * stop
   */
  stopReason?: string;
  static names(): { [key: string]: string } {
    return {
      citation: 'Citation',
      content: 'Content',
      errorCode: 'ErrorCode',
      stepInfo: 'StepInfo',
      stopReason: 'StopReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      citation: ShoppingAssistantResponseBodyResultCitation,
      content: 'string',
      errorCode: 'string',
      stepInfo: ShoppingAssistantResponseBodyResultStepInfo,
      stopReason: 'string',
    };
  }

  validate() {
    if(this.citation && typeof (this.citation as any).validate === 'function') {
      (this.citation as any).validate();
    }
    if(this.stepInfo && typeof (this.stepInfo as any).validate === 'function') {
      (this.stepInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShoppingAssistantResponseBody extends $dara.Model {
  /**
   * @remarks
   * The citation information.
   */
  citation?: ShoppingAssistantResponseBodyCitation;
  /**
   * @remarks
   * The returned content.
   * 
   * @example
   * Here are some light-colored long-sleeve shirts I picked for you:\\n.
   */
  content?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * e47cfae9-c0cc-42e1-91e2-e67cdb0e7b96
   */
  conversationId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @remarks
   * The event.
   * 
   * @example
   * analyze_requirement
   */
  event?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @remarks
   * The result details.
   */
  result?: ShoppingAssistantResponseBodyResult;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * e47cfae9-c0cc-42e1-91e2-e67cdb0e7b96
   */
  sessionId?: string;
  /**
   * @remarks
   * The stop reason.
   * 
   * @example
   * stop
   */
  stopReason?: string;
  static names(): { [key: string]: string } {
    return {
      citation: 'Citation',
      content: 'Content',
      conversationId: 'ConversationId',
      errorCode: 'ErrorCode',
      event: 'Event',
      requestId: 'RequestId',
      result: 'Result',
      sessionId: 'SessionId',
      stopReason: 'StopReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      citation: ShoppingAssistantResponseBodyCitation,
      content: 'string',
      conversationId: 'string',
      errorCode: 'string',
      event: 'string',
      requestId: 'string',
      result: ShoppingAssistantResponseBodyResult,
      sessionId: 'string',
      stopReason: 'string',
    };
  }

  validate() {
    if(this.citation && typeof (this.citation as any).validate === 'function') {
      (this.citation as any).validate();
    }
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

