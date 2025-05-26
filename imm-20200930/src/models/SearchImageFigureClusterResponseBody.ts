// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchImageFigureClusterResponseBodyClusters } from "./SearchImageFigureClusterResponseBodyClusters";


export class SearchImageFigureClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The face clusters.
   */
  clusters?: SearchImageFigureClusterResponseBodyClusters[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C2734912-E6D5-052C-AC67-6A9FD02*****
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
      clusters: { 'type': 'array', 'itemType': SearchImageFigureClusterResponseBodyClusters },
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

