// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskConfigListRequest extends $dara.Model {
  groupId?: number;
  id?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      id: 'Id',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      id: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

