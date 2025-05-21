// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationMaintainConfResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A156332-D2AC-5C98-8872-9779EA1CC022
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

