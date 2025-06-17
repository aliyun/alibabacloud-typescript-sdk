// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainPvDataResponseBodyPvDataIntervalUsageData extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2015-11-28T03:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The number of PVs.
   * 
   * @example
   * 9292
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

