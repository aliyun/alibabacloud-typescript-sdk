// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeRoutineRecordsRequest extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  recordMatchType?: string;
  recordName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recordMatchType: 'RecordMatchType',
      recordName: 'RecordName',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      recordMatchType: 'string',
      recordName: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

