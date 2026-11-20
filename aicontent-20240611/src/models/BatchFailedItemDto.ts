// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchFailedItemDTO extends $dara.Model {
  /**
   * @remarks
   * The reason for failure.
   * 
   * @example
   * Missing member node
   */
  reason?: string;
  /**
   * @remarks
   * The user ID of the failed member.
   * 
   * @example
   * 1
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      reason: 'reason',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

