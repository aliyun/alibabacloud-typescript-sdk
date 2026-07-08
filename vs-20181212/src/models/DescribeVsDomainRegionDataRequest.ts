// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainRegionDataRequest extends $dara.Model {
  /**
   * @remarks
   * Visual Edge Computing Service domain name.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * End time of the data range. The end time must be later than the start time. Specify the time in ISO 8601 format in UTC.<br>Format: YYYY-MM-DDThh:mm:ssZ.<br>
   * 
   * @example
   * 2021-10-31T15:59:59Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * Start time of the data range. Specify the time in ISO 8601 format in UTC.<br>Format: YYYY-MM-DDThh:mm:ssZ.<br>Minimum data granularity is 5 minutes.<br>If you do not specify this parameter, data from the last 24 hours is returned by default.<br><br><br>
   * 
   * @example
   * 2021-10-30T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
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

