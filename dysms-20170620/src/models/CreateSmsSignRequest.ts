// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsSignRequest extends $dara.Model {
  extendMessage?: string;
  fileIds?: string;
  orderId?: string;
  ownerId?: number;
  prodCode?: string;
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sceneType?: number;
  serviceType?: number;
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      extendMessage: 'ExtendMessage',
      fileIds: 'FileIds',
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sceneType: 'SceneType',
      serviceType: 'ServiceType',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendMessage: 'string',
      fileIds: 'string',
      orderId: 'string',
      ownerId: 'number',
      prodCode: 'string',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sceneType: 'number',
      serviceType: 'number',
      signName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

