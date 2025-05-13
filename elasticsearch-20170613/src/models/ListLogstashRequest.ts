// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogstashRequest extends $dara.Model {
  /**
   * @remarks
   * rg-acfm2h5vbzd\\*\\*\\*\\*
   * 
   * @example
   * ls-cn-abc
   */
  description?: string;
  /**
   * @remarks
   * [{"tagKey":"key1","tagValue":"value1"}]
   * 
   * @example
   * ls-cn-n6w1o5jq****
   */
  instanceId?: string;
  /**
   * @remarks
   * ls-cn-n6w1o5jq\\*\\*\\*\\*
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Details of the request header.
   * 
   * @example
   * rg-acfm2h5vbzd****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * 5.5.3_with_X-Pack
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * [{"tagKey":"key1","tagValue":"value1"}]
   */
  tags?: string;
  /**
   * @remarks
   * The ID of the request.
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

