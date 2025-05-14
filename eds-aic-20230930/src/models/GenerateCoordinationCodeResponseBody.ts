// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateCoordinationCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collaboration code.
   * 
   * @example
   * CSHGDK
   */
  coordinatorCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1A923337-44D9-5CAD-9A53-95084BD4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      coordinatorCode: 'CoordinatorCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinatorCode: 'string',
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

