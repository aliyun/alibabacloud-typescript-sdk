// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainPathDataRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * > You can specify only one domain name in each call.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. The interval between the start time and end time must be less than 30 days. Example: 2016-10-21T04:00:00Z.
   * 
   * @example
   * 2016-10-21T04:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: integers from **1** to **1000**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The paths that you want to query. Separate paths with forward slashes (/). If you do not set this parameter, all paths are queried. If you set the value to a directory, it must end with a forward slash (/).
   * 
   * > Fuzzy match is not supported. If you want data to be collected based on a directory, you can specify a specific directory, for example, directory/path/. In this case, bandwidth data is collected based on directory/path/.
   * 
   * @example
   * /path/
   */
  path?: string;
  /**
   * @remarks
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Example: 2016-10-20T04:00:00Z.
   * 
   * @example
   * 2016-10-20T04:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      path: 'Path',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      path: 'string',
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

