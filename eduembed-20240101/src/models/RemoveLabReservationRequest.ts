// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveLabReservationRequest extends $dara.Model {
  accountId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  labReservationId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      labReservationId: 'LabReservationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      labReservationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

