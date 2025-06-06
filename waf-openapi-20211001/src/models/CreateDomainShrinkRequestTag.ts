// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDomainShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * Tagkey1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * TagValue1
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

