// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchFailedItemDTO extends $dara.Model {
  /**
   * @example
   * Member node is missing
   */
  reason?: string;
  /**
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

