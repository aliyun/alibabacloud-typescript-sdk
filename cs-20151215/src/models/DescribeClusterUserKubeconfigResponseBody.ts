// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterUserKubeconfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The KubeConfig of the cluster.
   * 
   * @example
   * apiVersion: v1\\nclusters:\\n- cluster:\\n    server: https://114.55.xx.xx:6443\\n    certificate-authority-data: LS0tLS****
   */
  config?: string;
  /**
   * @remarks
   * The expiration time of the KubeConfig. Format: UTC time in RFC 3339 format.
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

