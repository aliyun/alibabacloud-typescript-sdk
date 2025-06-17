// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainUvDataResponseBodyUvDataIntervalUsageData extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2019-11-29T00:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The number of UVs.
   * 
   * @example
   * 318
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

