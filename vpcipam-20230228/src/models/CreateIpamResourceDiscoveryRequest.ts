// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpamResourceDiscoveryRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length. It must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and it cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length. It cannot contain `http://` or `https://`.
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

export class CreateIpamResourceDiscoveryRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a unique parameter value from your client. The client token supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID is different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Sends a check request without creating the resource discovery instance. The system checks for required parameters, request format, and service limits. If the check fails, an error is returned. If the check passes, the DryRunOperation error code is returned.
   * 
   * - **false** (default): Sends a normal request. After the request passes the check, an HTTP 2xx status code is returned and the resource discovery instance is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The description of the resource discovery.
   * 
   * @example
   * description
   */
  ipamResourceDiscoveryDescription?: string;
  /**
   * @remarks
   * The name of the resource discovery.
   * 
   * @example
   * name
   */
  ipamResourceDiscoveryName?: string;
  /**
   * @remarks
   * The list of regions where the resource discovery is effective.
   * 
   * This parameter is required.
   */
  operatingRegionList?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The request region.
   * 
   * > The request region is the hosted region of the resource discovery instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2sermdd6****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateIpamResourceDiscoveryRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamResourceDiscoveryDescription: 'IpamResourceDiscoveryDescription',
      ipamResourceDiscoveryName: 'IpamResourceDiscoveryName',
      operatingRegionList: 'OperatingRegionList',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ipamResourceDiscoveryDescription: 'string',
      ipamResourceDiscoveryName: 'string',
      operatingRegionList: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateIpamResourceDiscoveryRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.operatingRegionList)) {
      $dara.Model.validateArray(this.operatingRegionList);
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

