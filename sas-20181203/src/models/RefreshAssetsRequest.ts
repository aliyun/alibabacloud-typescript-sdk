// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of asset to synchronize. Default value: **ecs**. Valid values:
   * - **cloud_product**: cloud product
   * - **ecs**: server
   * - **container_image**: container image
   * 
   * @example
   * cloud_product
   */
  assetType?: string;
  /**
   * @remarks
   * The subtype of the cloud product.
   * 
   * > Refer to the following list for valid values.
   * 
   * @example
   * 0
   */
  cloudAssetSubType?: number;
  /**
   * @remarks
   * The type of cloud product. Valid values:
   * 
   * - **0**: server
   * - **1**: load balancing
   * - **3**: ApsaraDB RDS database
   * - **4**: ApsaraDB for MongoDB database
   * - **5**: Tair (Redis® OSS-Compatible) database
   * - **6**: Container Registry
   * - **8**: container service for Kubernetes
   * - **9**: VPC
   * - **11**: ActionTrail
   * - **12**: CDN
   * - **13**: Certificate Management Service (formerly SSL Certificates Service)
   * - **14**: Apsara Devops
   * - **15**: access control
   * - **16**: Anti-DDoS
   * - **17**: Web Application Firewall
   * - **18**: OSS
   * - **19**: cloud-native relational database PolarDB
   * - **20**: ApsaraDB RDS for PostgreSQL database
   * - **21**: Microservices Engine
   * - **22**: File Storage NAS
   * - **23**: Data Security Center
   * - **24**: EIP
   * 
   * @example
   * 0
   */
  cloudAssetType?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account of the member accounts in the resource directory.
   * > Call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The server vendor. Valid values:
   * 
   * - **0**: Alibaba Cloud asset
   * - **1**: asset outside the cloud
   * - **2**: IDC asset
   * - **3**, **4**, **5**, **7**: third-party cloud asset
   * - **8**: lightweight asset
   * 
   * @example
   * 0
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      cloudAssetSubType: 'CloudAssetSubType',
      cloudAssetType: 'CloudAssetType',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
      cloudAssetSubType: 'number',
      cloudAssetType: 'number',
      resourceDirectoryAccountId: 'number',
      vendor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

