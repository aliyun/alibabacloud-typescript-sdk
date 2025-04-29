// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClustersResponseBodyClusters } from "./DescribeClustersResponseBodyClusters";


export class DescribeClustersResponseBody extends $dara.Model {
  clusters?: DescribeClustersResponseBodyClusters;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: DescribeClustersResponseBodyClusters,
      requestId: 'string',
    };
  }

  validate() {
    if(this.clusters && typeof (this.clusters as any).validate === 'function') {
      (this.clusters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

