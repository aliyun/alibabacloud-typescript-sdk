// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRCDiskRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can create N tag keys at a time. Valid values of N: **1 to 20**. The tag key cannot be an empty string.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can query N values at a time. Valid values of N: **1** to **20**. The tag value can be an empty string.
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

