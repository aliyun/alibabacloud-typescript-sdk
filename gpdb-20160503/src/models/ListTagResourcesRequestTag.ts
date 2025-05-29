// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N. The key must be 1 to 64 characters in length.
   * 
   * You can use `Tag.N` to query AnalyticDB for PostgreSQL instances that have specific tags added. Tag.N consists of Tag.N.Key and Tag.N.Value.
   * 
   * Valid values of N: 1 to 20.
   * 
   * *   If you specify only `Tag.N.Key`, all instances that have the tag key added are returned.
   * *   If you specify only `Tag.N.Value`, the `InvalidParameter.TagValue` error message is returned.
   * *   If you specify multiple tag key-value pairs at a time, the instances that match all the specified tag key-value pairs are returned.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N. The value must be 1 to 128 characters in length.
   * 
   * Valid values of N: 1 to 20.
   * 
   * @example
   * TestValue
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

