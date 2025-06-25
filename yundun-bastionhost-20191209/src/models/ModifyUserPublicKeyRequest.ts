// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserPublicKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the user group. The description can be up to 500 characters in length.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the bastion host on which you want to modify the public key of a user.
   * 
   * >  You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-nif236pmc1u
   */
  instanceId?: string;
  /**
   * @remarks
   * The new public key.
   * 
   * >  Specify a Base64-encoded string.
   * 
   * @example
   * c3NoLWVkMjU1MTkgQUFBQUMzTnphQzFsWkRJMU5URTVBQUFBSUhVcjY4UENFYWFzZjFYRVpNYTVsMlNBQytHV3FpeXVsRVpndkV4dmlPM28gcm9vdEA5NjBkMmNhOTcwYjU=
   */
  publicKey?: string;
  /**
   * @remarks
   * The ID of the public key that you want to modify.
   * 
   * >  You can call the [ListUserPublicKeys](https://help.aliyun.com/document_detail/477555.html) operation to query the public key ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  publicKeyId?: string;
  /**
   * @remarks
   * The name of the public key that you want to modify. This name can be up to 128 characters in length.
   * 
   * @example
   * name
   */
  publicKeyName?: string;
  /**
   * @remarks
   * The region ID of the bastion host that is used to modify the public key of the user.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      instanceId: 'InstanceId',
      publicKey: 'PublicKey',
      publicKeyId: 'PublicKeyId',
      publicKeyName: 'PublicKeyName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      instanceId: 'string',
      publicKey: 'string',
      publicKeyId: 'string',
      publicKeyName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

