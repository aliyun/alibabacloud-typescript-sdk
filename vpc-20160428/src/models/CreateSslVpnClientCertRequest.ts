// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSslVpnClientCertRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the client certificate.
   * 
   * The name must be 1 to 100 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * SslVpnClientCert1
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the VPN gateway. 
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the SSL-VPN server.
   * 
   * This parameter is required.
   * 
   * @example
   * vss-m5et0q3iy1qex328w****
   */
  sslVpnServerId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sslVpnServerId: 'SslVpnServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sslVpnServerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

