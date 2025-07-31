// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferClusterBackupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instance is switched to the cluster backup mode. If the value of this parameter is **1**, the instance is switched to the cluster backup mode.
   * 
   * @example
   * 1
   */
  alreadyDone?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3C4A2494-85C4-45C5-93CF-548DB3375193
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alreadyDone: 'AlreadyDone',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadyDone: 'string',
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

