// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchPunishRequestShrinkRequest extends $dara.Model {
  antiStatusesShrink?: string;
  bussinessCodesShrink?: string;
  class?: string;
  endDate?: number;
  eventCodesShrink?: string;
  extRequestId?: string;
  id?: number;
  idType?: string;
  instanceId?: string;
  page?: number;
  pageSize?: number;
  punishDomain?: string;
  punishIp?: string;
  punishStatusesShrink?: string;
  punishUrl?: string;
  punishUrlFull?: string;
  sourceCodesShrink?: string;
  startDate?: number;
  userIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      antiStatusesShrink: 'AntiStatuses',
      bussinessCodesShrink: 'BussinessCodes',
      class: 'Class',
      endDate: 'EndDate',
      eventCodesShrink: 'EventCodes',
      extRequestId: 'ExtRequestId',
      id: 'Id',
      idType: 'IdType',
      instanceId: 'InstanceId',
      page: 'Page',
      pageSize: 'PageSize',
      punishDomain: 'PunishDomain',
      punishIp: 'PunishIp',
      punishStatusesShrink: 'PunishStatuses',
      punishUrl: 'PunishUrl',
      punishUrlFull: 'PunishUrlFull',
      sourceCodesShrink: 'SourceCodes',
      startDate: 'StartDate',
      userIdsShrink: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antiStatusesShrink: 'string',
      bussinessCodesShrink: 'string',
      class: 'string',
      endDate: 'number',
      eventCodesShrink: 'string',
      extRequestId: 'string',
      id: 'number',
      idType: 'string',
      instanceId: 'string',
      page: 'number',
      pageSize: 'number',
      punishDomain: 'string',
      punishIp: 'string',
      punishStatusesShrink: 'string',
      punishUrl: 'string',
      punishUrlFull: 'string',
      sourceCodesShrink: 'string',
      startDate: 'number',
      userIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

