// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTagCloudResourcesResponseBodyResourceTags } from "./ListTagCloudResourcesResponseBodyResourceTags";


export class ListTagCloudResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the next query is required.
   * 
   * @example
   * AAAAAYRHtOLVQzCYj17y+OP7LZRrUJaF4rnBGQkWwMiVHlLZBB1w3Us37CVvhvyM0TXavA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The tags added to the cloud resources.
   */
  resourceTags?: ListTagCloudResourcesResponseBodyResourceTags[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceTags: 'ResourceTags',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resourceTags: { 'type': 'array', 'itemType': ListTagCloudResourcesResponseBodyResourceTags },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceTags)) {
      $dara.Model.validateArray(this.resourceTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

