// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClusterResponseBodyClusters } from "./DescribeClusterResponseBodyClusters";


export class DescribeClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the information about clusters.
   */
  clusters?: DescribeClusterResponseBodyClusters[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': DescribeClusterResponseBodyClusters },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusters)) {
      $dara.Model.validateArray(this.clusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

