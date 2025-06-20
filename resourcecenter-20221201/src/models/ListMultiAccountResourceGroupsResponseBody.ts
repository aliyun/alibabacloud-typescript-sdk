// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMultiAccountResourceGroupsResponseBodyResourceGroups } from "./ListMultiAccountResourceGroupsResponseBodyResourceGroups";


export class ListMultiAccountResourceGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAU5VsT9R1adMTuz9GzginZ3Y+7Y/5JATS+6q5GK9kT75
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0FF0A66E-781F-51EE-9531-928F197558F2
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resource groups.
   */
  resourceGroups?: ListMultiAccountResourceGroupsResponseBodyResourceGroups[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceGroups: 'ResourceGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resourceGroups: { 'type': 'array', 'itemType': ListMultiAccountResourceGroupsResponseBodyResourceGroups },
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroups)) {
      $dara.Model.validateArray(this.resourceGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

