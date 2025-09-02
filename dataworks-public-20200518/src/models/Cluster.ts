// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Cluster extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c-d8a7523****
   */
  clusterBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  clusterId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterBizId: 'ClusterBizId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterBizId: 'string',
      clusterId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

