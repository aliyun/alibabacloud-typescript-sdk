// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainPvDataRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name for Visual Edge Computing Service.
   * 
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the \\`YYYY-MM-DDThh:mm:ssZ\\` format. The time must be in UTC.
   * 
   * @example
   * 2021-10-15T15:59:59Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the \\`YYYY-MM-DDThh:mm:ssZ\\` format. The time must be in UTC.<br>The minimum data granularity is 1 hour.<br>If you do not set this parameter, the data in the last 24 hours is returned.<br><br>
   * 
   * @example
   * 2021-10-10T17:00:00Z
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

