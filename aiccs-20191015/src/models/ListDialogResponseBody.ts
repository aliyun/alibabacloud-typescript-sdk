// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDialogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Dialogue content.
   * 
   * @example
   * 您好
   */
  content?: string;
  /**
   * @remarks
   * File Type.
   * 
   * @example
   * normal
   */
  nodeType?: string;
  /**
   * @remarks
   * Speaking role. Valid values:
   * 
   * - robot: Bot.
   * 
   * - user: User.
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
   * 肯定
   */
  tag?: string;
  /**
   * @remarks
   * Start Time. UNIX timestamp format, in milliseconds.
   * 
   * @example
   * 1619763900718
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

export class ListDialogResponseBody extends $dara.Model {
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
   * Call interaction content.
   */
  data?: ListDialogResponseBodyData[];
  /**
   * @remarks
   * Status code description.
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
      data: { 'type': 'array', 'itemType': ListDialogResponseBodyData },
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

