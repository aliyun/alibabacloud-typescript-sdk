// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PermissionAssistantApi extends $dara.Model {
  createTime?: string;
  id?: number;
  name?: string;
  resourceType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      id: 'id',
      name: 'name',
      resourceType: 'resourceType',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'number',
      name: 'string',
      resourceType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

