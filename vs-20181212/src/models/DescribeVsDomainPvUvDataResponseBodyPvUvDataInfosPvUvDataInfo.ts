// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainPvUvDataResponseBodyPvUvDataInfosPvUvDataInfo extends $dara.Model {
  /**
   * @example
   * 100
   */
  PV?: string;
  /**
   * @example
   * 2021-10-14T23:00:00Z
   */
  timeStamp?: string;
  /**
   * @example
   * 100
   */
  UV?: string;
  static names(): { [key: string]: string } {
    return {
      PV: 'PV',
      timeStamp: 'TimeStamp',
      UV: 'UV',
    };
  }

  static types(): { [key: string]: any } {
    return {
      PV: 'string',
      timeStamp: 'string',
      UV: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

