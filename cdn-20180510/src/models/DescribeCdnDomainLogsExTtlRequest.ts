// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnDomainLogsExTtlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * 2019-12-22T12:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @example
   * 300
   */
  pageSize?: number;
  /**
   * @example
   * 2019-12-21T12:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

