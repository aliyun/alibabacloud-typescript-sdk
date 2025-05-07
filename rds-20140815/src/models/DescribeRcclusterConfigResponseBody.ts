// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCClusterConfigResponseBody extends $dara.Model {
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E9DD55F4-1A5F-48CA-BA57-DFB3CA8C4C34
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      expiration: 'Expiration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      expiration: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

