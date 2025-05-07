// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTagResourcesResponseBodyDataTagResources } from "./ListTagResourcesResponseBodyDataTagResources";


export class ListTagResourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A maximum of 50 entries can be returned for a query. If a query generates more than 50 entries, the NextToken parameter is returned with the first 50 entries. You can use the NextToken parameter value to retrieve the subsequent entries that are not returned in the current query result.
   * 
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @remarks
   * The mapping relationships between applications and tags.
   */
  tagResources?: ListTagResourcesResponseBodyDataTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyDataTagResources },
    };
  }

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

