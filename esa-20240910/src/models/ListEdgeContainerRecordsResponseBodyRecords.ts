// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeContainerRecordsResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The time when the record was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-12-24T02:01:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The CNAME. If you use CNAME setup when you add your website to ESA, the value is the CNAME that you configured.
   * 
   * @example
   * a.example.com.cnamezone.com
   */
  recordCname?: string;
  /**
   * @remarks
   * The record name.
   * 
   * @example
   * a.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The website ID.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The website name.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * The time when the record was updated. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-22T08:32:02Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      recordCname: 'RecordCname',
      recordName: 'RecordName',
      siteId: 'SiteId',
      siteName: 'SiteName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      recordCname: 'string',
      recordName: 'string',
      siteId: 'number',
      siteName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

