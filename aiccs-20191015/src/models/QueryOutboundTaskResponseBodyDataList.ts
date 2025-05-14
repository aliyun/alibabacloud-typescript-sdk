// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOutboundTaskResponseBodyDataList extends $dara.Model {
  buId?: number;
  callerNum?: string;
  creator?: string;
  departmentId?: number;
  description?: string;
  endDate?: string;
  endTime?: string;
  extAttrs?: string;
  gmtCreate?: number;
  gmtModified?: number;
  groupName?: string;
  id?: number;
  model?: number;
  modifier?: string;
  name?: string;
  retryInterval?: number;
  retryTime?: number;
  skillGroup?: number;
  startDate?: string;
  startTime?: string;
  status?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      buId: 'BuId',
      callerNum: 'CallerNum',
      creator: 'Creator',
      departmentId: 'DepartmentId',
      description: 'Description',
      endDate: 'EndDate',
      endTime: 'EndTime',
      extAttrs: 'ExtAttrs',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupName: 'GroupName',
      id: 'Id',
      model: 'Model',
      modifier: 'Modifier',
      name: 'Name',
      retryInterval: 'RetryInterval',
      retryTime: 'RetryTime',
      skillGroup: 'SkillGroup',
      startDate: 'StartDate',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buId: 'number',
      callerNum: 'string',
      creator: 'string',
      departmentId: 'number',
      description: 'string',
      endDate: 'string',
      endTime: 'string',
      extAttrs: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      groupName: 'string',
      id: 'number',
      model: 'number',
      modifier: 'string',
      name: 'string',
      retryInterval: 'number',
      retryTime: 'number',
      skillGroup: 'number',
      startDate: 'string',
      startTime: 'string',
      status: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

