// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchPunishRecordsRequest extends $dara.Model {
  actionCodes?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  aliUid?: string;
  bussinessCodes?: string;
  caseCodes?: string[];
  domain?: string;
  endTime?: number;
  eventCodes?: string[];
  ip?: string;
  page?: string;
  pageSize?: string;
  punishStatus?: string[];
  resourceId?: string;
  sourceCodes?: string[];
  startTime?: number;
  url?: string;
  urlFuzzy?: string;
  static names(): { [key: string]: string } {
    return {
      actionCodes: 'ActionCodes',
      aliUid: 'AliUid',
      bussinessCodes: 'BussinessCodes',
      caseCodes: 'CaseCodes',
      domain: 'Domain',
      endTime: 'EndTime',
      eventCodes: 'EventCodes',
      ip: 'Ip',
      page: 'Page',
      pageSize: 'PageSize',
      punishStatus: 'PunishStatus',
      resourceId: 'ResourceId',
      sourceCodes: 'SourceCodes',
      startTime: 'StartTime',
      url: 'Url',
      urlFuzzy: 'UrlFuzzy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCodes: { 'type': 'array', 'itemType': 'string' },
      aliUid: 'string',
      bussinessCodes: 'string',
      caseCodes: { 'type': 'array', 'itemType': 'string' },
      domain: 'string',
      endTime: 'number',
      eventCodes: { 'type': 'array', 'itemType': 'string' },
      ip: 'string',
      page: 'string',
      pageSize: 'string',
      punishStatus: { 'type': 'array', 'itemType': 'string' },
      resourceId: 'string',
      sourceCodes: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
      url: 'string',
      urlFuzzy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actionCodes)) {
      $dara.Model.validateArray(this.actionCodes);
    }
    if(Array.isArray(this.caseCodes)) {
      $dara.Model.validateArray(this.caseCodes);
    }
    if(Array.isArray(this.eventCodes)) {
      $dara.Model.validateArray(this.eventCodes);
    }
    if(Array.isArray(this.punishStatus)) {
      $dara.Model.validateArray(this.punishStatus);
    }
    if(Array.isArray(this.sourceCodes)) {
      $dara.Model.validateArray(this.sourceCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

