// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainPublishErrorCodeRequest extends $dara.Model {
  /**
   * @remarks
   * Filters and aggregates data by AppName. If you specify AppName, you must set DomainName to a specific ingest domain.
   * 
   * @example
   * AppName
   */
  appName?: string;
  /**
   * @remarks
   * The ingest domain. You can specify multiple ingest domains. Separate multiple domain names with commas (,).
   * 
   * > This parameter is required.
   * 
   * @example
   * example1.aliyundoc.com,example2.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * > If you do not set this parameter, data from the last hour is queried by default.
   * 
   * @example
   * 2016-06-29T09:10:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * > If you do not set this parameter, data from the last hour is queried by default.
   * 
   * @example
   * 2016-06-29T09:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

