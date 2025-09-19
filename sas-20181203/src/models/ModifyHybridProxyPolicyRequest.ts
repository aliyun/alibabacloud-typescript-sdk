// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHybridProxyPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the proxy cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * sas-proxy
   */
  clusterName?: string;
  /**
   * @remarks
   * The policy of the proxy cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * [
   *     {
   *         "policyType": "limitFrequency",
   *         "info":
   *         [
   *             {
   *                 "type": "file",
   *                 "config": "10"
   *             }
   *         ]
   *     },
   *     {
   *         "policyType": "limitBandWidth",
   *         "info":
   *         [
   *             {
   *                 "type": "net"
   *             },
   *             {
   *                 "type": "process"
   *             }
   *         ]
   *     }
   * ]
   */
  policyInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      policyInfo: 'PolicyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      policyInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

