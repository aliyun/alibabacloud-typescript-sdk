// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainIpaConnDataRequest extends $dara.Model {
  /**
   * @remarks
   * The domain names accelerated by IPA. Separate multiple domain names with commas (,).
   * 
   * > If you do not specify this parameter, the merged data of all accelerated domain names is returned.
   * 
   * @example
   * example1.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2015-02-22T7:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies how query results are grouped. By default, this parameter is empty. Valid values:
   * 
   * *   domain: Query results are grouped by accelerated domain name.
   * *   An empty string: Query results are not grouped.
   * 
   * @example
   * domain
   */
  splitBy?: string;
  /**
   * @remarks
   * The start of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2015-02-21T07:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      splitBy: 'SplitBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      splitBy: 'string',
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

