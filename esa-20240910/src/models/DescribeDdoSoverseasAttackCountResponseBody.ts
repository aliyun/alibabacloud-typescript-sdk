// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSOverseasAttackCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EBCECE18-DA96-5307-8506-01E5A0E21530
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of attacks supported by the plan.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of attacks that have been used.
   * 
   * @example
   * 0
   */
  usedCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      usedCount: 'UsedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      usedCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

