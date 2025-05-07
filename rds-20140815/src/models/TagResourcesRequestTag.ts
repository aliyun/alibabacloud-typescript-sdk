// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. You can create N tag keys at a time. Valid values of N: **1** to **20**. The value of this parameter cannot be an empty string.
   * 
   * This parameter is required.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can create N tag values at a time. Valid values of N: **1** to **20**. The value of this parameter can be an empty string.
   * 
   * @example
   * testvalue1
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

