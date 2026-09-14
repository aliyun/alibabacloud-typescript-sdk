// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceSystemDiskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the new system disk.
   * 
   * @example
   * d-bp67acfmxazb4ph****
   */
  diskId?: string;
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
      diskId: 'DiskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
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

