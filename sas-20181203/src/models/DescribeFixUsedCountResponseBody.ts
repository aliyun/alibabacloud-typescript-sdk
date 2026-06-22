// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFixUsedCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier that Alibaba Cloud generates for the request and can be used to troubleshoot issues.
   * 
   * @example
   * CB1CE824-7F80-546D-8AF8-4A5209F9B698
   */
  requestId?: string;
  /**
   * @remarks
   * The number of vulnerability fixes used.
   * 
   * @example
   * 10
   */
  usedCount?: number;
  /**
   * @remarks
   * The number of vulnerability fixes used in regions in the Chinese mainland.
   * 
   * @example
   * 5
   */
  usedCountCn?: number;
  /**
   * @remarks
   * The number of vulnerability fixes used in regions outside the Chinese mainland.
   * 
   * @example
   * 5
   */
  usedCountSg?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usedCount: 'UsedCount',
      usedCountCn: 'UsedCountCn',
      usedCountSg: 'UsedCountSg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usedCount: 'number',
      usedCountCn: 'number',
      usedCountSg: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

