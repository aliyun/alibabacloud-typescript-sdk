// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMaintenanceActionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The O\\&M event ID.
   * 
   * @example
   * 11111
   */
  ids?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7856CBE7-5BD0-4EE1-AC62-749392******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

