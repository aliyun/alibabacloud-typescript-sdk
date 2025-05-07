// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can use this parameter to add tags to the instance.
   * 
   * *   If the specified tag key is an existing key, the system directly adds the tag key to the instance. You can call the ListTagResources to query the existing tag.
   * *   If the specified tag key does not exist, the system creates the tag key and adds the tag key to the instance.
   * *   The value cannot be an empty string.
   * *   This parameter must be used together with the **Tag.Value** parameter.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can use this parameter to add tags to the instance.
   * 
   * *   If the specified tag value is found in the specified tag key, the system directly adds the tag value to the instance. You can call the ListTagResources to query the existing tag.
   * *   If the specified tag value is not found in the specified tag key, the system creates the tag value and adds the tag value to the instance.
   * *   This parameter must be used together with the **Tag.Key** parameter.
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

