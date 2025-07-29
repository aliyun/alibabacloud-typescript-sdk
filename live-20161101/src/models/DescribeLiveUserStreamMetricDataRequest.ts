// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveUserStreamMetricDataRequest extends $dara.Model {
  /**
   * @example
   * app
   */
  appName?: string;
  /**
   * @example
   * test.com
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2015-12-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * flv
   */
  protocol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2015-12-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * test.flv
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      protocol: 'Protocol',
      startTime: 'StartTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      protocol: 'string',
      startTime: 'string',
      streamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

