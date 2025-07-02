// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIpamRequest extends $dara.Model {
  /**
   * @remarks
   * The effective region that you want to add.
   */
  addOperatingRegion?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The description of the IPAM.
   * 
   * It must be 2 to 256 characters in length and must start with a letter. It cannot start with `http://` or `https://`. The default value is empty.
   * 
   * @example
   * test description
   */
  ipamDescription?: string;
  /**
   * @remarks
   * The ID of the IPAM.
   * 
   * This parameter is required.
   * 
   * @example
   * ipam-ccxbnsbhew0d6t****
   */
  ipamId?: string;
  /**
   * @remarks
   * The name of the IPAM.
   * 
   * It must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  ipamName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the IPAM instance is hosted. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The effective region that you want to remove.
   */
  removeOperatingRegion?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      addOperatingRegion: 'AddOperatingRegion',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamDescription: 'IpamDescription',
      ipamId: 'IpamId',
      ipamName: 'IpamName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      removeOperatingRegion: 'RemoveOperatingRegion',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addOperatingRegion: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      dryRun: 'boolean',
      ipamDescription: 'string',
      ipamId: 'string',
      ipamName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      removeOperatingRegion: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.addOperatingRegion)) {
      $dara.Model.validateArray(this.addOperatingRegion);
    }
    if(Array.isArray(this.removeOperatingRegion)) {
      $dara.Model.validateArray(this.removeOperatingRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

