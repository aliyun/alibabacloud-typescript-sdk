// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N used for exact search of ECS resources. The tag key must be 1 to 128 characters in length. Valid values of N: 1 to 20.
   * 
   * Methods of using the `Tag.N` parameter pair (Tag.N.Key and Tag.N.Value):
   * 
   * *   Method 1: Use this parameter pair for exact search of ECS resources that have specified tags added. Each tag is a key-value pair.
   * 
   *     *   If you specify only `Tag.N.Key`, all ECS resources whose tags contain the specified tag key are returned.
   *     *   If you specify only `Tag.N.Value`, the `InvalidParameter.TagValue` error is returned.
   *     *   If you specify multiple tag key-value pairs, only the ECS resources that have all these tag key-value pairs added are returned.
   * 
   * *   Method 2: Use this parameter pair to query resource information of a non-default resource group. Set `Key` to `acs:rm:rgId` and `Value` to the ID of a resource group.
   * 
   *     *   If you set `Key` to `acs:rm:rgId`, you must set `Value` to the ID of a non-default resource group. If you set Value to the ID of the default resource group, an error message is returned.
   *     *   If you set `Key` to `acs:rm:rgId`, you cannot specify other Tag.N parameter pairs. If you specify multiple `Tag.N` parameter pairs to query resource groups and resources at the same time, an error message is returned.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N used for exact search of ECS resources. The tag value must be 1 to 128 characters in length. Valid values of N: 1 to 20.
   * 
   * > When Key is set to `acs:rm:rgId`, you can set Value only to the ID of a non-default resource group.
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

