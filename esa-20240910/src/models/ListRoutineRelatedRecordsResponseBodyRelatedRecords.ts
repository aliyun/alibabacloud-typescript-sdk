// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutineRelatedRecordsResponseBodyRelatedRecords extends $dara.Model {
  /**
   * @example
   * 509348423011904
   */
  recordId?: number;
  /**
   * @example
   * test-record-1.example.com
   */
  recordName?: string;
  /**
   * @example
   * 54362329990032
   */
  siteId?: number;
  /**
   * @example
   * example.com
   */
  siteName?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      recordName: 'RecordName',
      siteId: 'SiteId',
      siteName: 'SiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'number',
      recordName: 'string',
      siteId: 'number',
      siteName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

