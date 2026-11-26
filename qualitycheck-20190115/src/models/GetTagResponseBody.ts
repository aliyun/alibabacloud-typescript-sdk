// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTagResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of direct child nodes.
   * 
   * @example
   * 5
   */
  childCount?: number;
  /**
   * @remarks
   * The time when the tag was created.
   * 
   * @example
   * 1748428991000
   */
  createTime?: number;
  /**
   * @remarks
   * The tag description.
   * 
   * @example
   * Used to aggregate all intents and FAQs related to after-sales services
   */
  description?: string;
  /**
   * @remarks
   * The level of the current node.
   * 
   * @example
   * 2
   */
  level?: number;
  /**
   * @remarks
   * The time when the tag was last modified.
   * 
   * @example
   * 1748428991000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * After-sales issues
   */
  name?: string;
  /**
   * @remarks
   * The parent tag node ID.
   * 
   * @example
   * -1
   */
  parentTagId?: number;
  /**
   * @remarks
   * The tag ID.
   * 
   * @example
   * 128
   */
  tagId?: number;
  static names(): { [key: string]: string } {
    return {
      childCount: 'ChildCount',
      createTime: 'CreateTime',
      description: 'Description',
      level: 'Level',
      modifyTime: 'ModifyTime',
      name: 'Name',
      parentTagId: 'ParentTagId',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childCount: 'number',
      createTime: 'number',
      description: 'string',
      level: 'number',
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

export class GetTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of 200 indicates success, and other values indicate failure. You can determine the cause of the failure based on this field.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: GetTagResponseBodyData;
  /**
   * @remarks
   * The error message returned if an error occurs.
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
      data: GetTagResponseBodyData,
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

