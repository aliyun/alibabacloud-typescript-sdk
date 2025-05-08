// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteTimeSeriesDataResponseBodyDataDetailData extends $dara.Model {
  /**
   * @example
   * 2023-04-08T16:00:00Z
   */
  timeStamp?: string;
  /**
   * @example
   * 123
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

