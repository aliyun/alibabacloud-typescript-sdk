// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateCommonBandwidthPackageRequestTag } from "./CreateCommonBandwidthPackageRequestTag";


export class CreateCommonBandwidthPackageRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
   * 
   * Valid values: **1** to **1000**. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the Internet Shared Bandwidth instance.
   * 
   * The description must be 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * abc
   */
  description?: string;
  /**
   * @remarks
   * The line type. Valid values:
   * 
   * *   **BGP** (default) All regions support BGP (Multi-ISP).
   * *   **BGP_PRO** BGP (Multi-ISP) Pro lines are available in the China (Hong Kong), Singapore, Japan (Tokyo), Philippines (Manila), Malaysia (Kuala Lumpur), Indonesia (Jakarta), and Thailand (Bangkok) regions.
   * 
   * If you are allowed to use single-ISP bandwidth, you can also use one of the following values:
   * 
   * *   **ChinaTelecom**
   * *   **ChinaUnicom**
   * *   **ChinaMobile**
   * *   **ChinaTelecom_L2**
   * *   **ChinaUnicom_L2**
   * *   **ChinaMobile_L2**
   * 
   * If your services are deployed in China East 1 Finance, this parameter is required and you must set the value to **BGP_FinanceCloud**.
   * 
   * @example
   * BGP
   */
  ISP?: string;
  /**
   * @remarks
   * The billing method of the Internet Shared Bandwidth instance. Set the value to **PayByTraffic**, which specifies the pay-by-data-transfer billing method.
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The name of the Internet Shared Bandwidth instance.
   * 
   * The name must be 0 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test123
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The percentage of the minimum bandwidth commitment. Set the parameter to **20**.
   * 
   * > This parameter is available only on the Alibaba Cloud China site.
   * 
   * @example
   * 20
   */
  ratio?: number;
  /**
   * @remarks
   * The region ID of the Internet Shared Bandwidth instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazdjdhd****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * AntiDDoS_Enhanced
   */
  securityProtectionTypes?: string[];
  tag?: CreateCommonBandwidthPackageRequestTag[];
  /**
   * @remarks
   * The zone of the Internet Shared Bandwidth instance. This parameter is required if you create an Internet Shared Bandwidth instance for a cloud box.
   * 
   * @example
   * ap-southeast-1-lzdvn-cb
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      description: 'Description',
      ISP: 'ISP',
      internetChargeType: 'InternetChargeType',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      ratio: 'Ratio',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityProtectionTypes: 'SecurityProtectionTypes',
      tag: 'Tag',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      description: 'string',
      ISP: 'string',
      internetChargeType: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      ratio: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityProtectionTypes: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': CreateCommonBandwidthPackageRequestTag },
      zone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.securityProtectionTypes)) {
      $dara.Model.validateArray(this.securityProtectionTypes);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

