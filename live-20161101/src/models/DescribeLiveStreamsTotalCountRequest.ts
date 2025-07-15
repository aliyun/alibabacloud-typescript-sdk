// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamsTotalCountRequest extends $dara.Model {
  /**
   * @remarks
   * The ingest domain or streaming domain. This parameter is required if you want to query data based on domain names. You can specify up to 10 domain names. Separate multiple domain names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * >  The maximum time range for a query is 15 days. The end time must be earlier than the current time. Data of the current day can be queried on the next day.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-07-25T16:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * >  You can query data in the last 18 months.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-07-24T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The type of data that you want to query. If you leave this parameter empty, data is returned by domain name. If you want to query data by UID, specify the UID for this parameter.
   * 
   * @example
   * aliuid
   */
  typ?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      startTime: 'StartTime',
      typ: 'Typ',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
      regionId: 'string',
      startTime: 'string',
      typ: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

