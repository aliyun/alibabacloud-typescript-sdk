// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * 1d2db86sca4384811e0b5e8707e******
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number of the resource relationship list. This parameter is deprecated.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  page?: number;
  /**
   * @remarks
   * The list of instance IDs to query. The value is in JSON array format and can contain up to 20 items.
   * 
   * @example
   * ["es-cn-aaa","es-cn-bbb"]
   */
  resourceIds?: string;
  /**
   * @remarks
   * The resource type definition.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The number of entries per page in Settings for paged query and paging. This field is deprecated.
   * 
   * @example
   * 10
   * 
   * @deprecated
   */
  size?: number;
  /**
   * @remarks
   * The list of tags to query. The value is in JSON string format and can contain up to 20 items.
   * 
   * @example
   * [{"key":"env", "value":"dev"},{"key":"dev", "value":"IT"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      page: 'Page',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      size: 'Size',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      page: 'number',
      resourceIds: 'string',
      resourceType: 'string',
      size: 'number',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

