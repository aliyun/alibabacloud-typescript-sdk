// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWorkflowRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  actionList?: string;
  appId?: string;
  bizVersion?: string;
  callbackConfig?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      actionList: 'ActionList',
      appId: 'AppId',
      bizVersion: 'BizVersion',
      callbackConfig: 'CallbackConfig',
      description: 'Description',
      name: 'Name',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionList: 'string',
      appId: 'string',
      bizVersion: 'string',
      callbackConfig: 'string',
      description: 'string',
      name: 'string',
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

