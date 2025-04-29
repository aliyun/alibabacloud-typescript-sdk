// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnitsStorageCapacityUnitTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * @example
   * TestValue
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * @example
   * TestKey
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

