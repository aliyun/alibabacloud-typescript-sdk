// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserResourcesResponseBodyResources } from "./DescribeUserResourcesResponseBodyResources";


export class DescribeUserResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  queryFailedResourceTypes?: string[];
  /**
   * @example
   * 1732869815062
   */
  rankVersion?: number;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  resources?: DescribeUserResourcesResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      queryFailedResourceTypes: 'QueryFailedResourceTypes',
      rankVersion: 'RankVersion',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      queryFailedResourceTypes: { 'type': 'array', 'itemType': 'string' },
      rankVersion: 'number',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': DescribeUserResourcesResponseBodyResources },
    };
  }

  validate() {
    if(Array.isArray(this.queryFailedResourceTypes)) {
      $dara.Model.validateArray(this.queryFailedResourceTypes);
    }
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

