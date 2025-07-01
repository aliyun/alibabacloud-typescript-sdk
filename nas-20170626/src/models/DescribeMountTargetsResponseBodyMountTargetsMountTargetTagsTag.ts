// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMountTargetsResponseBodyMountTargetsMountTargetTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. Limits:
   * 
   * *   The tag key cannot be null or an empty string.
   * *   The tag key can be up to 128 characters in length.
   * *   The key value cannot start with aliyun or acs:.
   * *   The key value cannot contain http:// or https://.
   * 
   * @example
   * nastest
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * Limits:
   * 
   * *   The tag value can be up to 128 characters in length.
   * *   The tag value cannot contain http:// or https://.
   * 
   * @example
   * mounttargettest
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

