// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDialogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The script content.
   * 
   * @example
   * Hello
   */
  content?: string;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * normal
   */
  nodeType?: string;
  /**
   * @remarks
   * The role of the speaker. Valid values:
   * 
   * - robot: The speaker is a robot.
   * 
   * - user: The speaker is a user.
   * 
   * @example
   * robot
   */
  role?: string;
  /**
   * @remarks
   * The intent tag.
   * 
   * @example
   * Affirmative
   */
  tag?: string;
  /**
   * @remarks
   * The start time. The value is a timestamp in milliseconds.
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
   * The request status code. A value of OK indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The call interaction content.
   */
  data?: ListDialogResponseBodyData[];
  /**
   * @remarks
   * The status code description.
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
   * Indicates whether the operation was called successfully. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
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

