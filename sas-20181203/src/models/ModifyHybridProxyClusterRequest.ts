// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHybridProxyClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the proxy cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * sas-test-cnnf
   */
  clusterName?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

