// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterUserKubeconfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The kubeconfig file of the cluster.
   * 
   * @example
   * apiVersion: v1****
   */
  config?: string;
  /**
   * @remarks
   * The expiration time of the kubeconfig file. Format: the UTC time in the RFC3339 format.
   * 
   * @example
   * 2024-03-10T09:56:17Z
   */
  expiration?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      expiration: 'expiration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      expiration: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

