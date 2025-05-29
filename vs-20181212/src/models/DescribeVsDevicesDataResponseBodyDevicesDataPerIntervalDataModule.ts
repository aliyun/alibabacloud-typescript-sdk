// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDevicesDataResponseBodyDevicesDataPerIntervalDataModule extends $dara.Model {
  /**
   * @example
   * 128
   */
  devicesDataValue?: string;
  /**
   * @example
   * 2022-01-04T16:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      devicesDataValue: 'DevicesDataValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devicesDataValue: 'string',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

