// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Workspace extends $dara.Model {
  createdAt?: string;
  description?: string;
  isDefault?: boolean;
  name?: string;
  resourceGroupId?: string;
  updatedAt?: string;
  workspaceArn?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      description: 'description',
      isDefault: 'isDefault',
      name: 'name',
      resourceGroupId: 'resourceGroupId',
      updatedAt: 'updatedAt',
      workspaceArn: 'workspaceArn',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      isDefault: 'boolean',
      name: 'string',
      resourceGroupId: 'string',
      updatedAt: 'string',
      workspaceArn: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

