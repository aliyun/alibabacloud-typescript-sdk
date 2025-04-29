// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AcceptInquiredSystemEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4DD56CA6-6D75-4D33-BE34-E4A44EBE1C3D
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

