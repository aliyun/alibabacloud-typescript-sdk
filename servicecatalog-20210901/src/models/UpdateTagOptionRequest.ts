// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTagOptionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the tag option. Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The ID of the tag option.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-bp1u6mdf3d****
   */
  tagOptionId?: string;
  /**
   * @remarks
   * The value of the tag option.
   * 
   * The value can be up to 128 characters in length. It cannot start with `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      tagOptionId: 'TagOptionId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      tagOptionId: 'string',
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

