// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStackRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag N that you want to add to the stack.
   * 
   * Valid values of N: 1 to 20.
   * 
   * > - The Tags parameter is optional. If you specify Tags, you must specify Tags.N.Key.
   * > -  The tag of a stack is propagated to each resource that supports the tag feature in the stack. For more information, see [Propagate tags](https://help.aliyun.com/document_detail/201421.html).
   * 
   * This parameter is required.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N that you want to add to the stack.
   * 
   * Valid values of N: 1 to 20.
   * 
   * > The tag of a stack is propagated to each resource that supports the tag feature in the stack. For more information, see [Propagate tags](https://help.aliyun.com/document_detail/201421.html).
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

