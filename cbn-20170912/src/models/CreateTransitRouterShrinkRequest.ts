// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * The tag keys cannot be an empty string. The tag key can be up to 64 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * tagtest
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be an empty string or up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * Each key-value must be unique. You can specify at most 20 tag values in each call.
   * 
   * @example
   * TagValue
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

export class CreateTransitRouterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-j3jzhw1zpau2km****
   */
  cenId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, the system automatically uses **RequestId** as **ClientToken**. The value of **RequestId** of each API request is different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to check the request without performing the operation. Check items include permissions and the status of the specified cloud resources. Valid values:
   * 
   * *   **false** (default): sends the request. If the request passes the check, an Enterprise Edition transit router is created.
   * *   **true**: checks the request but does not create the Enterprise Edition transit router. If you use this value, the system checks whether the required parameters are set, and whether the request syntax is valid. If the request fails the check, an error message is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Enterprise Edition transit router is deployed.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable the multicast feature for the Enterprise Edition transit router. Valid values:
   * 
   * *   **false** (default): no
   * *   **true**: yes
   * 
   * The multicast feature is supported only in specific regions. You can call [ListTransitRouterAvailableResource](https://help.aliyun.com/document_detail/261356.html) to query the regions that support multicast.
   * 
   * @example
   * false
   */
  supportMulticast?: boolean;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateTransitRouterShrinkRequestTag[];
  /**
   * @remarks
   * The CIDR blocks to be added to the transit router.
   */
  transitRouterCidrListShrink?: string;
  /**
   * @remarks
   * The description of the Enterprise Edition transit router instance.
   * 
   * The description must be 1 to 256 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.
   * 
   * @example
   * testdesc
   */
  transitRouterDescription?: string;
  /**
   * @remarks
   * The name of the Enterprise Edition transit router.
   * 
   * The name must be 1 to 128 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.
   * 
   * @example
   * testname
   */
  transitRouterName?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      supportMulticast: 'SupportMulticast',
      tag: 'Tag',
      transitRouterCidrListShrink: 'TransitRouterCidrList',
      transitRouterDescription: 'TransitRouterDescription',
      transitRouterName: 'TransitRouterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      supportMulticast: 'boolean',
      tag: { 'type': 'array', 'itemType': CreateTransitRouterShrinkRequestTag },
      transitRouterCidrListShrink: 'string',
      transitRouterDescription: 'string',
      transitRouterName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

