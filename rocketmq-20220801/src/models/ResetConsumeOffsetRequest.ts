// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetConsumeOffsetRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the consumer offset is reset.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  resetTime?: string;
  /**
   * @remarks
   * The method that is used to reset the consumer offset. Valid values: LATEST_OFFSET and SPECIFIED_TIME.
   * 
   * @example
   * LATEST_OFFSET
   */
  resetType?: string;
  static names(): { [key: string]: string } {
    return {
      resetTime: 'resetTime',
      resetType: 'resetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resetTime: 'string',
      resetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

