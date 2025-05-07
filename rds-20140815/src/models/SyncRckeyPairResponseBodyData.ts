// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncRCKeyPairResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the synchronization succeeded. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isSyncInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      isSyncInfo: 'IsSyncInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSyncInfo: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

