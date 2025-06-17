// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainSrcQpsDataResponseBodySrcQpsDataPerIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2015-12-10T21:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The QPS value.
   * 
   * @example
   * 0
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

