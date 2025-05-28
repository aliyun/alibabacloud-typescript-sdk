// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmartqAuthTransferRequest extends $dara.Model {
  /**
   * @remarks
   * Source user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ASDHASD*************12EASDA
   */
  originUserId?: string;
  /**
   * @remarks
   * Target user ID array, separated by English commas.
   * >Warning: The number of user IDs cannot exceed 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 12313********dasfa,ASDASF*****SDAFEEG
   */
  targetUserIds?: string;
  static names(): { [key: string]: string } {
    return {
      originUserId: 'OriginUserId',
      targetUserIds: 'TargetUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originUserId: 'string',
      targetUserIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

