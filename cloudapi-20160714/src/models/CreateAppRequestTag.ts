// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * Valid values of n: `[1, 20]`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * Valid values of n: `[1, 20]`. If the parameter has a value, you must specify a value for the tag key with the same N as tag.N.Key. Otherwise, an error is reported.
   * 
   * @example
   * \\" \\"
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

