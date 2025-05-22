// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackGroupsResponseBodyStackGroupsTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag that is added to the stack group.
   * 
   * @example
   * usage1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that is added to the stack group.
   * 
   * @example
   * test1
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

