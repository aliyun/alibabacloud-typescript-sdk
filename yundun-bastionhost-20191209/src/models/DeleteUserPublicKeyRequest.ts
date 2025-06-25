// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserPublicKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Bastionhost instance to which the users to be queried belong.
   * 
   * >  You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the ID of the Bastionhost instance.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The public key ID.
   * 
   * >  You can call the [ListUserPublicKeys](https://help.aliyun.com/document_detail/477555.html) operation to query the public key ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  publicKeyId?: string;
  /**
   * @remarks
   * The region ID of the bastion host. For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      publicKeyId: 'PublicKeyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      publicKeyId: 'string',
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

