// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainPublishErrorCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The application name. The data is aggregated based on the application. If you specify this parameter, the DomainName parameter is required.
   * 
   * @example
   * AppName
   */
  appName?: string;
  /**
   * @remarks
   * The ingest domain. If you want to specify multiple ingest domains, separate them with commas (,).
   * 
   * >  This parameter is required.
   * 
   * @example
   * example.com,example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. Specify the time in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * >  If you do not configure StartTime, the data within the previous hour is queried.
   * 
   * @example
   * 2016-06-29T09:10:00Z
   */
  endTime?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The start time. Specify the time in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * >  If you do not configure StartTime, the data within the previous hour is queried.
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

