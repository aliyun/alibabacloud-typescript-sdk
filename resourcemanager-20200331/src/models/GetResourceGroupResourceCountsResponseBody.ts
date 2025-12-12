// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceGroupResourceCountsResponseBodyResourceCounts extends $dara.Model {
  /**
   * @remarks
   * The number of the resources.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The dimension by which resources are queried.
   * 
   * @example
   * ResourceGroupId
   */
  groupByKey?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-9gLOoK****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      groupByKey: 'GroupByKey',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      groupByKey: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupResourceCountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B34724D-54B0-4A51-B34D-4512372FE1BE
   */
  requestId?: string;
  /**
   * @remarks
   * The numbers of the resources.
   */
  resourceCounts?: GetResourceGroupResourceCountsResponseBodyResourceCounts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceCounts: 'ResourceCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceCounts: { 'type': 'array', 'itemType': GetResourceGroupResourceCountsResponseBodyResourceCounts },
    };
  }

  validate() {
    if(Array.isArray(this.resourceCounts)) {
      $dara.Model.validateArray(this.resourceCounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

