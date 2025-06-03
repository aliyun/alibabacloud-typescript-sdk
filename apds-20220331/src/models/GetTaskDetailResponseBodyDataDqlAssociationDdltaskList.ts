// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskDetailResponseBodyDataDqlAssociationDDLTaskList extends $dara.Model {
  ddlTaskId?: number;
  ddlTaskName?: string;
  dqlTaskId?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  tenantId?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      ddlTaskId: 'ddlTaskId',
      ddlTaskName: 'ddlTaskName',
      dqlTaskId: 'dqlTaskId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      tenantId: 'tenantId',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddlTaskId: 'number',
      ddlTaskName: 'string',
      dqlTaskId: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      tenantId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

