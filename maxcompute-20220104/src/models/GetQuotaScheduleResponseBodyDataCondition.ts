// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaScheduleResponseBodyDataCondition extends $dara.Model {
  /**
   * @remarks
   * The start time when the quota plan takes effect.
   * 
   * @example
   * 2022-04-25T04:23:04Z
   */
  after?: string;
  /**
   * @remarks
   * The time when the quota plan takes effect.
   * 
   * @example
   * 0900
   */
  at?: string;
  static names(): { [key: string]: string } {
    return {
      after: 'after',
      at: 'at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      after: 'string',
      at: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

