// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatResponseBodyContent extends $dara.Model {
  /**
   * @example
   * {"call_id":"call_xxx","name":"get_weather","arguments":"{"city":"Beijing"}"}
   */
  data?: { [key: string]: any };
  /**
   * @example
   * ""
   */
  object?: string;
  /**
   * @example
   * 您好
   */
  text?: string;
  /**
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      object: 'Object',
      text: 'Text',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      object: 'string',
      text: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  content?: ChatResponseBodyContent[];
  /**
   * @example
   * 1773380609
   */
  created?: string;
  /**
   * @example
   * 1773380609
   */
  createdAt?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * msg_xxx
   */
  id?: string;
  /**
   * @example
   * null
   */
  message?: string;
  /**
   * @example
   * response
   */
  object?: string;
  /**
   * @example
   * EA12****-****-****-****-****E5C
   */
  requestId?: string;
  /**
   * @example
   * user
   */
  role?: string;
  /**
   * @example
   * 1
   */
  sequenceNumber?: string;
  /**
   * @example
   * 176405663****961
   */
  sessionId?: string;
  /**
   * @example
   * in_progress
   */
  status?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * "hello"
   */
  text?: string;
  /**
   * @example
   * message / text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      content: 'Content',
      created: 'Created',
      createdAt: 'CreatedAt',
      httpStatusCode: 'HttpStatusCode',
      id: 'Id',
      message: 'Message',
      object: 'Object',
      requestId: 'RequestId',
      role: 'Role',
      sequenceNumber: 'SequenceNumber',
      sessionId: 'SessionId',
      status: 'Status',
      success: 'Success',
      text: 'Text',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      content: { 'type': 'array', 'itemType': ChatResponseBodyContent },
      created: 'string',
      createdAt: 'string',
      httpStatusCode: 'number',
      id: 'string',
      message: 'string',
      object: 'string',
      requestId: 'string',
      role: 'string',
      sequenceNumber: 'string',
      sessionId: 'string',
      status: 'string',
      success: 'boolean',
      text: 'string',
      type: 'string',
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

