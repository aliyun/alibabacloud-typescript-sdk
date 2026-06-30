// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTagResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the label node was created.
   * 
   * @example
   * 1748428991000
   */
  createTime?: number;
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * 用于归集售后服务相关的所有意图与 FAQ
   */
  description?: string;
  /**
   * @remarks
   * The time when the label node was last modified.
   * 
   * @example
   * 1748428991000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The label name.
   * 
   * @example
   * 售后问题
   */
  name?: string;
  /**
   * @remarks
   * The parent label node ID.
   * 
   * @example
   * -1
   */
  parentTagId?: number;
  /**
   * @remarks
   * The label ID.
   * 
   * @example
   * 128
   */
  tagId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      modifyTime: 'ModifyTime',
      name: 'Name',
      parentTagId: 'ParentTagId',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      modifyTime: 'number',
      name: 'string',
      parentTagId: 'number',
      tagId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success. Other values indicate failure. You can use this field to determine the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: CreateTagResponseBodyData;
  /**
   * @remarks
   * The error message, if any.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values: true: The call was successful. false: The call failed.
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
      data: CreateTagResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

