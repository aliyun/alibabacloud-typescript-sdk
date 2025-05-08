// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMountTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 70EACC9C-D07A-4A34-ADA4-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The state of the mount target. Valid values:
   * 
   * *   active
   * *   inactive
   * *   pending
   * *   deleting
   * 
   * @example
   * pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

