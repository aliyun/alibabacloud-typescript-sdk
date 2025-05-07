// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PunishResourceSearchShrinkRequest extends $dara.Model {
  actionCodesShrink?: string;
  bussinessCodesShrink?: string;
  class?: string;
  domain?: string;
  endDate?: number;
  instanceId?: string;
  ip?: string;
  page?: number;
  pageSize?: number;
  sourceCodesShrink?: string;
  startDate?: number;
  status?: string;
  url?: string;
  userIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      actionCodesShrink: 'ActionCodes',
      bussinessCodesShrink: 'BussinessCodes',
      class: 'Class',
      domain: 'Domain',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      ip: 'Ip',
      page: 'Page',
      pageSize: 'PageSize',
      sourceCodesShrink: 'SourceCodes',
      startDate: 'StartDate',
      status: 'Status',
      url: 'Url',
      userIdsShrink: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCodesShrink: 'string',
      bussinessCodesShrink: 'string',
      class: 'string',
      domain: 'string',
      endDate: 'number',
      instanceId: 'string',
      ip: 'string',
      page: 'number',
      pageSize: 'number',
      sourceCodesShrink: 'string',
      startDate: 'number',
      status: 'string',
      url: 'string',
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

