// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFixUsedCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB1CE824-7F80-546D-8AF8-4A5209F9B698
   */
  requestId?: string;
  /**
   * @remarks
   * The number of vulnerabilities that are fixed by the vulnerability fixing feature.
   * 
   * @example
   * 10
   */
  usedCount?: number;
  /**
   * @remarks
   * The number of vulnerabilities that are fixed by the vulnerability fixing feature in China.
   * 
   * @example
   * 5
   */
  usedCountCn?: number;
  /**
   * @remarks
   * The number of vulnerabilities that are fixed by the vulnerability fixing feature outside China.
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

