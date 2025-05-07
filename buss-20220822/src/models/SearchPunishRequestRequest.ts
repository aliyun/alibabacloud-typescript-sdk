// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchPunishRequestRequest extends $dara.Model {
  antiStatuses?: string[];
  bussinessCodes?: string[];
  class?: string;
  endDate?: number;
  eventCodes?: string[];
  extRequestId?: string;
  id?: number;
  idType?: string;
  instanceId?: string;
  page?: number;
  pageSize?: number;
  punishDomain?: string;
  punishIp?: string;
  punishStatuses?: string[];
  punishUrl?: string;
  punishUrlFull?: string;
  sourceCodes?: string[];
  startDate?: number;
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      antiStatuses: 'AntiStatuses',
      bussinessCodes: 'BussinessCodes',
      class: 'Class',
      endDate: 'EndDate',
      eventCodes: 'EventCodes',
      extRequestId: 'ExtRequestId',
      id: 'Id',
      idType: 'IdType',
      instanceId: 'InstanceId',
      page: 'Page',
      pageSize: 'PageSize',
      punishDomain: 'PunishDomain',
      punishIp: 'PunishIp',
      punishStatuses: 'PunishStatuses',
      punishUrl: 'PunishUrl',
      punishUrlFull: 'PunishUrlFull',
      sourceCodes: 'SourceCodes',
      startDate: 'StartDate',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antiStatuses: { 'type': 'array', 'itemType': 'string' },
      bussinessCodes: { 'type': 'array', 'itemType': 'string' },
      class: 'string',
      endDate: 'number',
      eventCodes: { 'type': 'array', 'itemType': 'string' },
      extRequestId: 'string',
      id: 'number',
      idType: 'string',
      instanceId: 'string',
      page: 'number',
      pageSize: 'number',
      punishDomain: 'string',
      punishIp: 'string',
      punishStatuses: { 'type': 'array', 'itemType': 'string' },
      punishUrl: 'string',
      punishUrlFull: 'string',
      sourceCodes: { 'type': 'array', 'itemType': 'string' },
      startDate: 'number',
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.antiStatuses)) {
      $dara.Model.validateArray(this.antiStatuses);
    }
    if(Array.isArray(this.bussinessCodes)) {
      $dara.Model.validateArray(this.bussinessCodes);
    }
    if(Array.isArray(this.eventCodes)) {
      $dara.Model.validateArray(this.eventCodes);
    }
    if(Array.isArray(this.punishStatuses)) {
      $dara.Model.validateArray(this.punishStatuses);
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

