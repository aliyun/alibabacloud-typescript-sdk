// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceInput extends $dara.Model {
  description?: string;
  enablePresetModel?: boolean;
  name?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      enablePresetModel: 'enablePresetModel',
      name: 'name',
      resourceGroupId: 'resourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enablePresetModel: 'boolean',
      name: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

