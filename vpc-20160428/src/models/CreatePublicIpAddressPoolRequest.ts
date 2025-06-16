// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePublicIpAddressPoolRequestTag } from "./CreatePublicIpAddressPoolRequestTag";


export class CreatePublicIpAddressPoolRequest extends $dara.Model {
  /**
   * @remarks
   * The service type of the IP address pool. Valid values:
   * 
   * *   **CloudBox** Only cloud box users can select this type.
   * *   **Default**: This is the default value.
   * 
   * @example
   * Default
   */
  bizType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate a value, and you must make sure that each request has a unique token value. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the value of **RequestId** as the value of **ClientToken**. The value of **RequestId** for each API request is different.
   * 
   * @example
   * 02fb3da4-130e-11****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the IP address pool.
   * 
   * The description must be 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * AddressPoolDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to precheck only this request. Valid values:
   * 
   * *   **true**: prechecks the request without creating an IP address pool. The system checks the required parameters, request format, and service limits. If the request fails to pass the precheck, an error code is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false**: sends the request. This is the default value. If the request passes the precheck, a 2xx HTTP status code is returned and the IP address pool is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The line type. Valid values:
   * 
   * *   **BGP** (default)
   * *   **BGP_PRO**
   * 
   * For more information about BGP (Multi-ISP) lines and BGP (Multi-ISP) Pro lines, see the "Line types" section in the [What is EIP?](https://help.aliyun.com/document_detail/32321.html) topic.
   * 
   * *   If you are allowed to use single-ISP bandwidth, you can also use one of the following values:
   * 
   *     *   **ChinaTelecom**
   *     *   **ChinaUnicom**
   *     *   **ChinaMobile**
   *     *   **ChinaTelecom_L2**
   *     *   **ChinaUnicom_L2**
   *     *   **ChinaMobile_L2**
   * 
   * *   If your services are deployed in China East 1 Finance, this parameter is required and you must set the value to **BGP_FinanceCloud**.
   * 
   * @example
   * BGP
   */
  isp?: string;
  /**
   * @remarks
   * The name of the IP address pool.
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
   * The ID of the region where you want to create the IP address pool.
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
   * The editions of Anti-DDoS.
   * - If you do not specify this parameter, Anti-DDoS Origin Basic is used.
   * - If you set the parameter to AntiDDoS_Enhanced, Anti-DDoS Pro/Premium is used.
   */
  securityProtectionTypes?: string[];
  /**
   * @remarks
   * The tag of the resource.
   */
  tag?: CreatePublicIpAddressPoolRequestTag[];
  /**
   * @remarks
   * The zone of the IP address pool. If you set **BizType** to **CloudBox**, this parameter is required.
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

