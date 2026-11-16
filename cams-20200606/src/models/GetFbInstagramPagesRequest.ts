// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFbInstagramPagesRequest extends $dara.Model {
  /**
   * @remarks
   * The personal access token. This parameter is not required if you use an Alibaba Cloud AccessKey pair or Security Token Service (STS) for temporary authorization.
   * 
   * This parameter is required.
   * 
   * @example
   * ftete3254***
   */
  accessToken?: string;
  /**
   * @remarks
   * The instance ID, which is the unique identity of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * inst-8t47hh***5pyj0ps
   */
  instanceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      instanceId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

