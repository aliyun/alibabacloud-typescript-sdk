// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChannelDistributionStatDataResponseBodyStatList extends $dara.Model {
  /**
   * @example
   * 1
   */
  callUserCount?: number;
  /**
   * @example
   * 1.0000
   */
  callUserRatio?: string;
  /**
   * @example
   * OS
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      callUserCount: 'CallUserCount',
      callUserRatio: 'CallUserRatio',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callUserCount: 'number',
      callUserRatio: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

