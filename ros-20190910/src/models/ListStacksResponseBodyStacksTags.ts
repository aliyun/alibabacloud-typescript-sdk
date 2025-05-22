// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStacksResponseBodyStacksTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the stack.
   * 
   * @example
   * acs:rm:rgId
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the stack.
   * 
   * @example
   * rg-aek2frunvw7****
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

