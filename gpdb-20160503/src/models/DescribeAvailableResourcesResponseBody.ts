// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourcesResponseBodyResources } from "./DescribeAvailableResourcesResponseBodyResources";


export class DescribeAvailableResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 61DC563C-F8E4-593A-8D27-CE**********
   */
  requestId?: string;
  /**
   * @remarks
   * The zone ID.
   */
  resources?: DescribeAvailableResourcesResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': DescribeAvailableResourcesResponseBodyResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

