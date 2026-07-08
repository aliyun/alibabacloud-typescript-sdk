// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainSnapshotDataRequest extends $dara.Model {
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
   * End time of the data range. Must be later than StartTime. Use ISO 8601 notation and UTC time.<br>Format: YYYY-MM-DDThh:mm:ssZ<br>
   * 
   * @example
   * 2021-10-18T16:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * Start time of the data range. Use ISO 8601 notation and UTC time.<br>Format: YYYY-MM-DDThh:mm:ssZ<br>Minimum data granularity is 5 minutes.<br>If you omit this parameter, the API returns data from the last 24 hours.<br><br><br>
   * 
   * @example
   * 2021-10-05T16:00:00Z
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

