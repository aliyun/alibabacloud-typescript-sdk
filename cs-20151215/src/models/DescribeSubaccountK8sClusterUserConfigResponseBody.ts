// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubaccountK8sClusterUserConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster kubeconfig file. For more information about how to view the kubeconfig file content, see [Configure cluster credentials](https://help.aliyun.com/document_detail/86494.html).
   * 
   * This parameter is required.
   * 
   * @example
   * apiVersion: v1****
   */
  config?: string;
  /**
   * @remarks
   * The expiration date of the kubeconfig file. The value is the UTC time displayed in RFC3339 format.
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

