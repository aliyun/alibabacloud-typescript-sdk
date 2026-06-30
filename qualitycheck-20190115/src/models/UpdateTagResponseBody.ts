// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTagResponseBodyData extends $dara.Model {
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
   * 涵盖退款、退货、维修、咨询等售后链路
   */
  description?: string;
  /**
   * @remarks
   * The time when the label node was last modified.
   * 
   * @example
   * 1748431368000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The label name.
   * 
   * @example
   * 售后服务
   */
  name?: string;
  /**
   * @remarks
   * The ID of the parent label node.
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

export class UpdateTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success. Other values indicate failure. You can use this field to determine the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: UpdateTagResponseBodyData;
  /**
   * @remarks
   * The error message returned when an error occurs.
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
   * 3CEA0495-341B-4482-9AD9-8191EF4***
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
      data: UpdateTagResponseBodyData,
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

