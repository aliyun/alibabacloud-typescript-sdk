// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserEntityTag } from "./UserEntityTag";


export class ListEntitiesByTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the entity.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-table
   */
  entityType?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * 12345
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The tags.
   * 
   * This parameter is required.
   */
  tags?: UserEntityTag[];
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
      nextToken: 'string',
      pageSize: 'number',
      tags: { 'type': 'array', 'itemType': UserEntityTag },
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

