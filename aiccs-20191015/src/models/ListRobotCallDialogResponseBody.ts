// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRobotCallDialogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Script content.
   * 
   * @example
   * 我是某某的客服，看您之前在我们家找过工作，做个回访，现在工作怎么样？
   */
  content?: string;
  /**
   * @remarks
   * File Type.
   * 
   * @example
   * 开场白
   */
  nodeType?: string;
  /**
   * @remarks
   * Role in the conversation content.
   * 
   * @example
   * robot
   */
  role?: string;
  /**
   * @remarks
   * Intent label.
   * 
   * @example
   * 拒绝
   */
  tag?: string;
  /**
   * @remarks
   * Start Time. UNIX timestamp in milliseconds.
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
   * Request status code. A return value of OK indicates that the request succeeded.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Conversation records.
   */
  data?: ListRobotCallDialogResponseBodyData[];
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API invocation succeeded. Valid values:
   * - **true**: Succeeded.
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

