// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCommandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the command.
   * 
   * @example
   * c-7d2a745b412b4601b2d47f6a768d****
   */
  commandId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
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

