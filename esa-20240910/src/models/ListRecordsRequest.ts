// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecordsRequest extends $dara.Model {
  bizName?: string;
  pageNumber?: number;
  pageSize?: number;
  proxied?: boolean;
  recordMatchType?: string;
  recordName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  sourceType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      proxied: 'Proxied',
      recordMatchType: 'RecordMatchType',
      recordName: 'RecordName',
      siteId: 'SiteId',
      sourceType: 'SourceType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      proxied: 'boolean',
      recordMatchType: 'string',
      recordName: 'string',
      siteId: 'number',
      sourceType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

