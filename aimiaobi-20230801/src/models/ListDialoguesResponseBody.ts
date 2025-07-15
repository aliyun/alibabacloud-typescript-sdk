// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDialoguesResponseBodyData extends $dara.Model {
  /**
   * @example
   * xx
   */
  bot?: string;
  /**
   * @example
   * 2024-01-04 11:46:07
   */
  createTime?: string;
  /**
   * @example
   * xx
   */
  createUser?: string;
  /**
   * @example
   * 2
   */
  dialogueType?: number;
  /**
   * @example
   * xx
   */
  taskId?: string;
  /**
   * @example
   * x
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      bot: 'Bot',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dialogueType: 'DialogueType',
      taskId: 'TaskId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bot: 'string',
      createTime: 'string',
      createUser: 'string',
      dialogueType: 'number',
      taskId: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialoguesResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  data?: ListDialoguesResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListDialoguesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
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

