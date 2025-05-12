// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesktopTimerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud computers for which you successfully configure the scheduled task.
   */
  desktopIds?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4638719F-3CAB-5704-BD54-55617BFF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopIds: 'DesktopIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopIds)) {
      $dara.Model.validateArray(this.desktopIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

