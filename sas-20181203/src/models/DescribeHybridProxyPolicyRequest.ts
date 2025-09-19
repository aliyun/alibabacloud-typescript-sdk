// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridProxyPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the proxy cluster. You can query the name of the proxy cluster in the Security Center console.
   * 
   * This parameter is required.
   * 
   * @example
   * test-idc
   */
  clusterName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

