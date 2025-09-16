// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClusterStage } from "./ClusterStage";


export class ClusterState extends $dara.Model {
  clusterStage?: ClusterStage;
  status?: string;
  subStatus?: string;
  static names(): { [key: string]: string } {
    return {
      clusterStage: 'ClusterStage',
      status: 'Status',
      subStatus: 'SubStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterStage: ClusterStage,
      status: 'string',
      subStatus: 'string',
    };
  }

  validate() {
    if(this.clusterStage && typeof (this.clusterStage as any).validate === 'function') {
      (this.clusterStage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

