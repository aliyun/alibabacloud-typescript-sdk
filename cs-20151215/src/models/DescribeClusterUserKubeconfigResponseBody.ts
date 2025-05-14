// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterUserKubeconfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the kubeconfig file. For more information about how to view the kubeconfig file, see [Configure cluster credentials](https://help.aliyun.com/document_detail/86494.html).
   * 
   * @example
   * apiVersion: v1****
   */
  config?: string;
  /**
   * @remarks
   * The validity period of the kubeconfig file. The value is the UTC time displayed in RFC3339 format.
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

