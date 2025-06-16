// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagKeysResponseBodyTagKeysTagKey extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * FinanceDept
   */
  tagKey?: string;
  /**
   * @remarks
   * The type of the tag key. Valid values:
   * 
   * *   **Custom**: custom
   * *   **System**: system
   * 
   * @example
   * Custom
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

