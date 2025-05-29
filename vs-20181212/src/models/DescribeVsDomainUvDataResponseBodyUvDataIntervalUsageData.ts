// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainUvDataResponseBodyUvDataIntervalUsageData extends $dara.Model {
  /**
   * @example
   * 2015-11-29T15:00:00Z
   */
  timeStamp?: string;
  /**
   * @example
   * 100
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
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

