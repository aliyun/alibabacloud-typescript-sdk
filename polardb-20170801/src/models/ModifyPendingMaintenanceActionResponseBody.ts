// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPendingMaintenanceActionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 111111
   */
  ids?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 93061E17-B56A-4324-BC95-D0FFD2******
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

