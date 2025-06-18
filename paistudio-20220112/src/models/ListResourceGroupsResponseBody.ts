// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceGroup } from "./ResourceGroup";


export class ListResourceGroupsResponseBody extends $dara.Model {
  /**
   * @example
   * 9CFA2665-1FFE-5929-8468-C14C25890486
   */
  requestId?: string;
  /**
   * @example
   * RG1
   */
  resourceGroups?: ResourceGroup[];
  /**
   * @remarks
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

