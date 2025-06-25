// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserPublicKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the public key. The description can be up to 500 characters in length.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the bastion host on which you want to create a public key for the user.
   * 
   * > You can call the [listinstances](https://help.aliyun.com/document_detail/204522.html) operation to query the ID of the bastion host.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The public key. Encode the value by using the Base64 algorithm.
   * 
   * This parameter is required.
   * 
   * @example
   * c3NoLWVkMjU1MTkgQUFBQUMzTnphQzFsWkRJMU5URTVBQUFBSUxGQnQxUUpyT3IxK2hTTGRkbERMZUx4WGRIZ3hBalBxWHJIbWNFNWxqSk8gbm93Y29kZXJAbm93Y29kZXJkZU1hY0Jvb2stUHJvLmxvY2Fs
   */
  publicKey?: string;
  /**
   * @remarks
   * The name of the public key.
   * 
   * This parameter is required.
   * 
   * @example
   * Public key of a user
   */
  publicKeyName?: string;
  /**
   * @remarks
   * Specifies the region ID of the bastion host on which you want to create a public key for the user.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user for whom you want to create a public key.
   * 
   * >  You can call the [ListUsers](https://help.aliyun.com/document_detail/204522.html) operation to query the user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      instanceId: 'InstanceId',
      publicKey: 'PublicKey',
      publicKeyName: 'PublicKeyName',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      instanceId: 'string',
      publicKey: 'string',
      publicKeyName: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

