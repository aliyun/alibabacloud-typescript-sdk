// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePublicIpAddressPoolRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicIpAddressPoolRequest extends $dara.Model {
  /**
   * @remarks
   * The business type of the IP address pool. Valid values:
   * - **CloudBox**: CloudBox. Only CloudBox users can select this type.
   * - **Default** (default): indicates that the business type is not a special type.
   * 
   * @example
   * Default
   */
  bizType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the IP address pool instance.
   * 
   * The description must be 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * AddressPoolDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run without creating the IP address pool. The system checks the required parameters, request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The line type. Valid values:
   * 
   * - **BGP** (default): BGP (Multi-ISP) line.
   * 
   * - **BGP_PRO**: BGP (Multi-ISP) Pro line.
   * 
   * For more information about BGP (Multi-ISP) lines and BGP (Multi-ISP) Pro lines, see [EIP line types](https://help.aliyun.com/document_detail/32321.html).
   * 
   * - If you are a whitelist user of single-ISP bandwidth, you can also select the following types:
   *     - **ChinaTelecom**: China Telecom
   *     - **ChinaUnicom**: China Unicom
   *     - **ChinaMobile**: China Mobile
   *     - **ChinaTelecom_L2**: China Telecom L2
   *     - **ChinaUnicom_L2**: China Unicom L2
   *     - **ChinaMobile_L2**: China Mobile L2
   * - If you are a China (Hangzhou) Finance Cloud user, this field is required. Set this parameter to **BGP_FinanceCloud**.
   * 
   * @example
   * BGP
   */
  isp?: string;
  /**
   * @remarks
   * The name of the IP address pool instance.
   * 
   * The name must be 0 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * AddressPoolName
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the IP address pool that you want to create.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-chengdu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the IP address pool belongs.
   * 
   * @example
   * rg-acfmxazb4pcdvf****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The security protection level.
   * 
   * - If this parameter is left empty, DDoS Protection (Basic) is used by default.
   * 
   * - If this parameter is set to **AntiDDoS_Enhanced**, DDoS Protection (Enhanced) is used.
   */
  securityProtectionTypes?: string[];
  /**
   * @remarks
   * The tags of the resource.
   */
  tag?: CreatePublicIpAddressPoolRequestTag[];
  /**
   * @remarks
   * The zones of the IP address pool.
   * This parameter is required only when **BizType** is set to **CloudBox**, which indicates that the business type of the IP address pool is CloudBox.
   */
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      isp: 'Isp',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityProtectionTypes: 'SecurityProtectionTypes',
      tag: 'Tag',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      isp: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityProtectionTypes: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': CreatePublicIpAddressPoolRequestTag },
      zones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityProtectionTypes)) {
      $dara.Model.validateArray(this.securityProtectionTypes);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

