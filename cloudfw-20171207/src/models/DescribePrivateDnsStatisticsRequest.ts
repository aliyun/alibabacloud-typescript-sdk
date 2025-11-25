// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrivateDnsStatisticsRequest extends $dara.Model {
  /**
   * @example
   * 1726305596
   */
  domainNameCreatedEndTime?: number;
  /**
   * @example
   * 1725864531
   */
  domainNameCreatedStartTime?: number;
  static names(): { [key: string]: string } {
    return {
      domainNameCreatedEndTime: 'DomainNameCreatedEndTime',
      domainNameCreatedStartTime: 'DomainNameCreatedStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNameCreatedEndTime: 'number',
      domainNameCreatedStartTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

