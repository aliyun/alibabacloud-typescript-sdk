// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AssociateResponseBodyAssociate extends $dara.Model {
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * {}
   */
  meta?: string;
  /**
   * @remarks
   * The title of the associated question.
   * 
   * @example
   * Housing fund withdrawal policy
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      meta: 'Meta',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of associated suggestions.
   */
  associate?: AssociateResponseBodyAssociate[];
  /**
   * @remarks
   * The ID of the response message in the current session.
   * 
   * @example
   * 5ADF0EBD-7C50-1922-A28B-43215B47CC1A
   */
  messageId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5C20F0D4-9721-178A-8236-3BF990634962
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the current session.
   * 
   * @example
   * 1531ded6b3df4afca4be63943f708bb7
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      associate: 'Associate',
      messageId: 'MessageId',
      requestId: 'RequestId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associate: { 'type': 'array', 'itemType': AssociateResponseBodyAssociate },
      messageId: 'string',
      requestId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.associate)) {
      $dara.Model.validateArray(this.associate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

