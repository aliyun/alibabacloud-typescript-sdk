// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PunishResourceSearchRequest extends $dara.Model {
  actionCodes?: string[];
  bussinessCodes?: string[];
  class?: string;
  domain?: string;
  endDate?: number;
  instanceId?: string;
  ip?: string;
  page?: number;
  pageSize?: number;
  sourceCodes?: string[];
  startDate?: number;
  status?: string;
  url?: string;
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      actionCodes: 'ActionCodes',
      bussinessCodes: 'BussinessCodes',
      class: 'Class',
      domain: 'Domain',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      ip: 'Ip',
      page: 'Page',
      pageSize: 'PageSize',
      sourceCodes: 'SourceCodes',
      startDate: 'StartDate',
      status: 'Status',
      url: 'Url',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCodes: { 'type': 'array', 'itemType': 'string' },
      bussinessCodes: { 'type': 'array', 'itemType': 'string' },
      class: 'string',
      domain: 'string',
      endDate: 'number',
      instanceId: 'string',
      ip: 'string',
      page: 'number',
      pageSize: 'number',
      sourceCodes: { 'type': 'array', 'itemType': 'string' },
      startDate: 'number',
      status: 'string',
      url: 'string',
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.actionCodes)) {
      $dara.Model.validateArray(this.actionCodes);
    }
    if(Array.isArray(this.bussinessCodes)) {
      $dara.Model.validateArray(this.bussinessCodes);
    }
    if(Array.isArray(this.sourceCodes)) {
      $dara.Model.validateArray(this.sourceCodes);
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

