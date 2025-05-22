// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * > 
   * 
   * *   N specifies the serial number of the tag. For example, Tag.1.Key specifies the key of the first tag, and Tag.2.Key specifies the key of the second tag.
   * 
   * *   The tag key cannot be an empty string.
   * 
   * This parameter is required.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * > 
   * 
   * *   N specifies the serial number of the tag. For example, Tag.1.Value specifies the value of the first tag and Tag.2.Value specifies the value of the second tag.
   * 
   * *   The tag value can be an empty string.
   * 
   * This parameter is required.
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

