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

export class SyncRCKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the result.
   */
  data?: SyncRCKeyPairResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 60478CCB-95EA-5D06-8A51-CAC83A316E9A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SyncRCKeyPairResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

