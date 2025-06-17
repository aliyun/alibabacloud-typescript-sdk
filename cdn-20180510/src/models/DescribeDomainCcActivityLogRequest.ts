// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainCcActivityLogRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. You can specify multiple domain names and separate them with commas (,).
   * 
   * If you do not specify this parameter, data of all accelerated domain names under your account is queried.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * The end time must be later than the start time.
   * 
   * @example
   * 2018-12-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * A custom rule name. Valid values:
   * 
   * *   default_normal: rule for the normal mode
   * *   default_attack: rule for the emergency mode
   * 
   * If you leave this parameter empty, events that triggered rate limiting based on all rules are queried.
   * 
   * @example
   * test2
   */
  ruleName?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * The minimum time granularity of data collection is 5 minutes.
   * 
   * If you leave this parameter empty, the data collected over the last 24 hours is queried.
   * 
   * @example
   * 2018-12-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The trigger of rate limiting by which you want to query data.
   * 
   * If you leave this parameter empty, all events that triggered rate limiting are queried.
   * 
   * @example
   * IP
   */
  triggerObject?: string;
  /**
   * @remarks
   * The value of the trigger.
   * 
   * If you leave this parameter empty, all events recorded for the trigger are queried.
   * 
   * @example
   * 1.2.3.4
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ruleName: 'RuleName',
      startTime: 'StartTime',
      triggerObject: 'TriggerObject',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ruleName: 'string',
      startTime: 'string',
      triggerObject: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

