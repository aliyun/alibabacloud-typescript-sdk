// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeContainerAppRecordsResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * The CNAME of the associated domain name.
   * 
   * @example
   * kdxceo****.yun****.com
   */
  cname?: string;
  /**
   * @remarks
   * The configuration ID of the associated domain name.
   * 
   * @example
   * 27522948436****
   */
  configId?: number;
  /**
   * @remarks
   * The time when the domain name was added. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2023-12-24T02:01:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The record ID of the associated domain name.
   * 
   * @example
   * 266****
   */
  recordId?: number;
  /**
   * @remarks
   * The associated domain name.
   * 
   * @example
   * a.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The scheduling domain ID of the associated domain name.
   * 
   * @example
   * 123456
   */
  schemdId?: number;
  /**
   * @remarks
   * The website ID.
   * 
   * @example
   * 5407498413****
   */
  siteId?: number;
  /**
   * @remarks
   * The time when the scheduling domain ID or CNAME was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-22T08:32:02Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cname: 'Cname',
      configId: 'ConfigId',
      createTime: 'CreateTime',
      recordId: 'RecordId',
      recordName: 'RecordName',
      schemdId: 'SchemdId',
      siteId: 'SiteId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cname: 'string',
      configId: 'number',
      createTime: 'string',
      recordId: 'number',
      recordName: 'string',
      schemdId: 'number',
      siteId: 'number',
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

