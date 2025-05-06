// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterAvailableResourcesResponseBodyAvailableZones } from "./DescribeDbclusterAvailableResourcesResponseBodyAvailableZones";


export class DescribeDBClusterAvailableResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The available zones of the cluster.
   */
  availableZones?: DescribeDBClusterAvailableResourcesResponseBodyAvailableZones[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2B19F698-8FFC-4918-B9E2-58D878******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: { 'type': 'array', 'itemType': DescribeDBClusterAvailableResourcesResponseBodyAvailableZones },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availableZones)) {
      $dara.Model.validateArray(this.availableZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

