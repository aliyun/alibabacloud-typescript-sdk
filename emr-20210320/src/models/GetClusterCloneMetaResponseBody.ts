// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetClusterCloneMetaResponseBodyClusterCloneMeta } from "./GetClusterCloneMetaResponseBodyClusterCloneMeta";


export class GetClusterCloneMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * Cluster clone metadata.
   */
  clusterCloneMeta?: GetClusterCloneMetaResponseBodyClusterCloneMeta;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterCloneMeta: 'ClusterCloneMeta',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterCloneMeta: GetClusterCloneMetaResponseBodyClusterCloneMeta,
      requestId: 'string',
    };
  }

  validate() {
    if(this.clusterCloneMeta && typeof (this.clusterCloneMeta as any).validate === 'function') {
      (this.clusterCloneMeta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

