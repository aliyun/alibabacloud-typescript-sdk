// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchPunishRecordsShrinkRequest extends $dara.Model {
  actionCodesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  aliUid?: string;
  bussinessCodes?: string;
  caseCodesShrink?: string;
  domain?: string;
  endTime?: number;
  eventCodesShrink?: string;
  ip?: string;
  page?: string;
  pageSize?: string;
  punishStatusShrink?: string;
  resourceId?: string;
  sourceCodesShrink?: string;
  startTime?: number;
  url?: string;
  urlFuzzy?: string;
  static names(): { [key: string]: string } {
    return {
      actionCodesShrink: 'ActionCodes',
      aliUid: 'AliUid',
      bussinessCodes: 'BussinessCodes',
      caseCodesShrink: 'CaseCodes',
      domain: 'Domain',
      endTime: 'EndTime',
      eventCodesShrink: 'EventCodes',
      ip: 'Ip',
      page: 'Page',
      pageSize: 'PageSize',
      punishStatusShrink: 'PunishStatus',
      resourceId: 'ResourceId',
      sourceCodesShrink: 'SourceCodes',
      startTime: 'StartTime',
      url: 'Url',
      urlFuzzy: 'UrlFuzzy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCodesShrink: 'string',
      aliUid: 'string',
      bussinessCodes: 'string',
      caseCodesShrink: 'string',
      domain: 'string',
      endTime: 'number',
      eventCodesShrink: 'string',
      ip: 'string',
      page: 'string',
      pageSize: 'string',
      punishStatusShrink: 'string',
      resourceId: 'string',
      sourceCodesShrink: 'string',
      startTime: 'number',
      url: 'string',
      urlFuzzy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

