// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveSnapshotNotifyConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 32A96B9A-F203-4EC5-8E43-CB92E68F4I79E
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

