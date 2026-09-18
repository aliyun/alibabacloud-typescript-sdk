// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRobotCallDialogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The script content.
   * 
   * @example
   * I am a customer service representative from XX. I noticed that you previously looked for a job with us. I am doing a follow-up. How is your work going?
   */
  content?: string;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * Opening
   */
  nodeType?: string;
  /**
   * @remarks
   * The role in the conversation.
   * 
   * @example
   * robot
   */
  role?: string;
  /**
   * @remarks
   * The intent label.
   * 
   * @example
   * Rejection
   */
  tag?: string;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1621483557000
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      nodeType: 'NodeType',
      role: 'Role',
      tag: 'Tag',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      nodeType: 'string',
      role: 'string',
      tag: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotCallDialogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code. OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The conversation records.
   */
  data?: ListRobotCallDialogResponseBodyData[];
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListRobotCallDialogResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

