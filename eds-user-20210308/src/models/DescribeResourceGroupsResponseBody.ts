// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeResourceGroupsResponseBodyResourceGroup } from "./DescribeResourceGroupsResponseBodyResourceGroup";


export class DescribeResourceGroupsResponseBody extends $dara.Model {
  /**
   * @example
   * 68BA1DF7-8814-5AED-B844-F8F7F7****
   */
  requestId?: string;
  resourceGroup?: DescribeResourceGroupsResponseBodyResourceGroup[];
  /**
   * @example
   * 7
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroup: 'ResourceGroup',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroup: { 'type': 'array', 'itemType': DescribeResourceGroupsResponseBodyResourceGroup },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroup)) {
      $dara.Model.validateArray(this.resourceGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

