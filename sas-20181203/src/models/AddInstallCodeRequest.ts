// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddInstallCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of the installation command. The value is a 13-digit timestamp.
   * 
   * >  The installation command is valid only within the validity period. An expired installation command cannot be used to install the Security Center agent.
   * 
   * @example
   * 1680257463853
   */
  expiredDate?: number;
  /**
   * @remarks
   * The ID of the asset group to which you want to add the asset.
   * 
   * > You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to query the IDs of asset groups.
   * 
   * @example
   * 8076980
   */
  groupId?: number;
  /**
   * @remarks
   * Specifies whether to create an image. Default value: **false**. Valid values:
   * 
   * *   **false**: does not create an image.
   * *   **true**: creates an image.
   * 
   * @example
   * false
   */
  onlyImage?: boolean;
  /**
   * @remarks
   * The operating system of the asset. Default value: **linux**. Valid values:
   * 
   * *   **linux**
   * *   **windows**
   * 
   * @example
   * linux
   */
  os?: string;
  /**
   * @remarks
   * The ID of the PrivateLink endpoint.
   * 
   * @example
   * 72845
   */
  privateLinkId?: number;
  /**
   * @remarks
   * The name of the proxy cluster.
   * 
   * @example
   * proxy_test
   */
  proxyCluster?: string;
  /**
   * @remarks
   * The name of the service provider for the asset. Default value: **ALIYUN**.
   * 
   * >  You can call the [DescribeVendorList](~~DescribeVendorList~~) operation to query the names of service providers.
   * 
   * @example
   * ALIYUN
   */
  vendorName?: string;
  static names(): { [key: string]: string } {
    return {
      expiredDate: 'ExpiredDate',
      groupId: 'GroupId',
      onlyImage: 'OnlyImage',
      os: 'Os',
      privateLinkId: 'PrivateLinkId',
      proxyCluster: 'ProxyCluster',
      vendorName: 'VendorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredDate: 'number',
      groupId: 'number',
      onlyImage: 'boolean',
      os: 'string',
      privateLinkId: 'number',
      proxyCluster: 'string',
      vendorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

