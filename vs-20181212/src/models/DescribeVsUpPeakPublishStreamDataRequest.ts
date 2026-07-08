// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsUpPeakPublishStreamDataRequest extends $dara.Model {
  /**
   * @remarks
   * Domain name to query. Returns data at the domain granularity.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Enables or disables domain-level statistics. Valid values: on or off. When set to on, the response shows domain-level data. When set to off or omitted, the response shows user-level data. Default is user-level data.
   * 
   * @example
   * on
   */
  domainSwitch?: string;
  /**
   * @remarks
   * End time of stream ingest, in UTC format. The time range between StartTime and EndTime must be within 30 days. EndTime must be later than the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-12-10T21:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * Start time of stream ingest, in UTC format. The time range between StartTime and EndTime must be within 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-12-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainSwitch: 'DomainSwitch',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainSwitch: 'string',
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

