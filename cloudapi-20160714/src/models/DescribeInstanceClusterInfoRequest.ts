// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceClusterInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dedicated instance cluster.
   * 
   * @example
   * testvpc
   */
  instanceClusterName?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceClusterName: 'InstanceClusterName',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceClusterName: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

