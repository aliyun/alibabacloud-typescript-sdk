// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersRequestTags extends $dara.Model {
  /**
   * @remarks
   * Tag key.
   * 
   * @example
   * my_key
   */
  key?: string;
  /**
   * @remarks
   * Tag value.
   * 
   * @example
   * my_value
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

export class ListClustersRequest extends $dara.Model {
  /**
   * @remarks
   * Number of entries per page. Default: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for retrieving the next page of results. Use the NextToken value returned in the previous response.
   * 
   * @example
   * a3f2224a5ec7224116c4f5246120abe2
   */
  nextToken?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-aek2bg6wyoox6jq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * List of tags.
   */
  tags?: ListClustersRequestTags[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListClustersRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

