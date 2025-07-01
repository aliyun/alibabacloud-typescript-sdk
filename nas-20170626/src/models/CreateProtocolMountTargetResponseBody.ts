// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProtocolMountTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the export directory for the protocol service.
   * 
   * @example
   * exp-123****
   */
  exportId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportId: 'ExportId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportId: 'string',
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

