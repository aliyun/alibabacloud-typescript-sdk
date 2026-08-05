// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamsTotalCountRequest extends $dara.Model {
  /**
   * @remarks
   * The ingest domain or streaming domain. This parameter is required when you query domain-level data. You can specify up to 10 domain names in a batch query. Separate multiple domain names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. The end time must be later than the start time. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * > The interval between StartTime and EndTime must be within 15 days, and EndTime cannot be later than the current time. Data for the current day can be queried only on the next day.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-07-25T16:00:00Z
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
   * The start time. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * > The maximum query range is the last 1.5 years.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-07-24T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * If you leave this parameter empty, domain-level data is queried by default. Set this parameter to aliuid to query UID-level data.
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

