// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTraceDetailRequest extends $dara.Model {
  /**
   * @example
   * 2022-10-27 15:05:48
   */
  endTime?: string;
  /**
   * @example
   * TEST
   */
  env?: string;
  /**
   * @example
   * 2022-10-28 14:36:53
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      env: 'env',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      env: 'string',
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

