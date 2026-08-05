// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainTimeShiftDataRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain to query.
   * 
   * > 
   * > - When you specify DomainName, make sure that the specified domain is a live streaming domain and that the user calling this operation has permissions on the specified domain.
   * > - You can specify a single domain or multiple domains. Separate multiple domains with commas (,).
   * > - If this parameter is left empty, the merged data of all live streaming domains is returned by default.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2021-03-03T02:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the queried data. Unit: seconds. Valid values:
   * 
   * - 300.
   * - 3600.
   * - 86400.
   * 
   * If you do not specify this parameter or specify an unsupported value, the default value 300 is used.
   * 
   * @example
   * 300
   */
  interval?: string;
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
   * The start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * > - The minimum data granularity is 5 minutes.
   * > - If you do not specify this parameter, data of the last 24 hours is returned by default.
   * 
   * @example
   * 2021-03-03T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
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

