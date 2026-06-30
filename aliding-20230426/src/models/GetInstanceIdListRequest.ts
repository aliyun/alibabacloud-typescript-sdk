// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceIdListRequest extends $dara.Model {
  appType?: string;
  approvedResult?: string;
  createFromTimeGMT?: string;
  createToTimeGMT?: string;
  formUuid?: string;
  instanceStatus?: string;
  language?: string;
  modifiedFromTimeGMT?: string;
  modifiedToTimeGMT?: string;
  originatorId?: string;
  pageNumber?: number;
  pageSize?: number;
  searchFieldJson?: string;
  systemToken?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      approvedResult: 'ApprovedResult',
      createFromTimeGMT: 'CreateFromTimeGMT',
      createToTimeGMT: 'CreateToTimeGMT',
      formUuid: 'FormUuid',
      instanceStatus: 'InstanceStatus',
      language: 'Language',
      modifiedFromTimeGMT: 'ModifiedFromTimeGMT',
      modifiedToTimeGMT: 'ModifiedToTimeGMT',
      originatorId: 'OriginatorId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchFieldJson: 'SearchFieldJson',
      systemToken: 'SystemToken',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      approvedResult: 'string',
      createFromTimeGMT: 'string',
      createToTimeGMT: 'string',
      formUuid: 'string',
      instanceStatus: 'string',
      language: 'string',
      modifiedFromTimeGMT: 'string',
      modifiedToTimeGMT: 'string',
      originatorId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchFieldJson: 'string',
      systemToken: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

