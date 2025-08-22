// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnUserSecDropByMinuteRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Example: 2006-01-02T15:05:04Z.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2006-01-02T15:05:04Z
   */
  endTime?: string;
  /**
   * @remarks
   * The language. Valid values: en and zh. Default value: en
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The object that triggered rate limiting.
   * 
   * @example
   * robot_fingerprint_ai
   */
  object?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The rule that was triggered.
   * 
   * @example
   * robot_ai
   */
  ruleName?: string;
  /**
   * @remarks
   * The name of the security feature.
   * 
   * This parameter is required.
   * 
   * @example
   * robot
   */
  secFunc?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Example: 2006-01-02T15:04:04Z.
   * 
   * @example
   * 2006-01-02T15:04:04Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      lang: 'Lang',
      object: 'Object',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ruleName: 'RuleName',
      secFunc: 'SecFunc',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      lang: 'string',
      object: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ruleName: 'string',
      secFunc: 'string',
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

