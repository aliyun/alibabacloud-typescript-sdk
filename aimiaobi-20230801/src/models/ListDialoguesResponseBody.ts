// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDialoguesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Model output.
   * 
   * @example
   * xx
   */
  bot?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2024-01-04 11:46:07
   */
  createTime?: string;
  /**
   * @remarks
   * Creator.
   * 
   * @example
   * xx
   */
  createUser?: string;
  /**
   * @remarks
   * Generation type. Valid values: 1 (creation) and 2 (intelligent search). Default value: 2.
   * 
   * @example
   * 2
   */
  dialogueType?: number;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * xx
   */
  taskId?: string;
  /**
   * @remarks
   * User input.
   * 
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
   * @remarks
   * Status code.
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * Page number of the current page.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * List of generation history records.
   */
  data?: ListDialoguesResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Unique identifier for the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * Indicates whether the operation succeeded. A value of true indicates success. A value of false indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of records.
   * 
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

