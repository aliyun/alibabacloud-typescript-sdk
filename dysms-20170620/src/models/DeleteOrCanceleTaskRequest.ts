// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOrCanceleTaskRequest extends $dara.Model {
  isDeleted?: number;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      isDeleted: 'IsDeleted',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDeleted: 'number',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

