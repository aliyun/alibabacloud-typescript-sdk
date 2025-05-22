// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStackGroupShrinkRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the stack group.
   * 
   * > Tags is optional. If you want to specify Tags, you must also specify Tags.N.Key.
   * 
   * This parameter is required.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the stack group.
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

