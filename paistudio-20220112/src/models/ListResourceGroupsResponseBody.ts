// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceGroup } from "./ResourceGroup";


export class ListResourceGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9CFA2665-1FFE-5929-8468-C14C25890486
   */
  requestId?: string;
  /**
   * @remarks
   * The list of resource groups.
   * 
   * @example
   * RG1
   */
  resourceGroups?: ResourceGroup[];
  /**
   * @remarks
   * The total number of matching resource groups.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroups: 'ResourceGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroups: { 'type': 'array', 'itemType': ResourceGroup },
      totalCount: 'number',
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

