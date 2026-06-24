// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogstashRequest extends $dara.Model {
  /**
   * @remarks
   * The instance name. Fuzzy match is supported. For example, if you search for an instance named abc, instances named abc, abcde, xyabc, and xabcy may all be returned.
   * 
   * @example
   * ls-cn-abc
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ls-cn-n6w1o5jq****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number of the instance list. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm2h5vbzd****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The number of entries per page for paging. Default value: 20.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The instance tags.
   * 
   * @example
   * [{"tagKey":"key1","tagValue":"value1"}]
   */
  tags?: string;
  /**
   * @remarks
   * The instance version.
   * 
   * @example
   * 5.5.3_with_X-Pack
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      instanceId: 'instanceId',
      page: 'page',
      resourceGroupId: 'resourceGroupId',
      size: 'size',
      tags: 'tags',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      page: 'number',
      resourceGroupId: 'string',
      size: 'number',
      tags: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

