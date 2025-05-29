// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBResourceGroupResponseBodyResourceGroupItems } from "./DescribeDbresourceGroupResponseBodyResourceGroupItems";


export class DescribeDBResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The queried resource group information.
   */
  resourceGroupItems?: DescribeDBResourceGroupResponseBodyResourceGroupItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroupItems: 'ResourceGroupItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroupItems: DescribeDBResourceGroupResponseBodyResourceGroupItems,
    };
  }

  validate() {
    if(this.resourceGroupItems && typeof (this.resourceGroupItems as any).validate === 'function') {
      (this.resourceGroupItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

