// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClustersV1ResponseBodyClustersOperationPolicyClusterAutoUpgrade } from "./DescribeClustersV1responseBodyClustersOperationPolicyClusterAutoUpgrade";


export class DescribeClustersV1ResponseBodyClustersOperationPolicy extends $dara.Model {
  /**
   * @remarks
   * The configurations of auto cluster update.
   */
  clusterAutoUpgrade?: DescribeClustersV1ResponseBodyClustersOperationPolicyClusterAutoUpgrade;
  static names(): { [key: string]: string } {
    return {
      clusterAutoUpgrade: 'cluster_auto_upgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterAutoUpgrade: DescribeClustersV1ResponseBodyClustersOperationPolicyClusterAutoUpgrade,
    };
  }

  validate() {
    if(this.clusterAutoUpgrade && typeof (this.clusterAutoUpgrade as any).validate === 'function') {
      (this.clusterAutoUpgrade as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

