// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainRecordDataRequest extends $dara.Model {
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
   * End time of the data range. Must be later than StartTime. Use ISO 8601 notation in UTC. Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 2021-11-19T15:59:59Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * Region information
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * Start time of the data range. Use ISO 8601 notation in UTC. Format: YYYY-MM-DDThh:mm:ssZ. Minimum data granularity is 5 minutes. If you omit this parameter, the API returns data from the last 24 hours.
   * 
   * @example
   * 2021-09-29T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
      region: 'string',
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

