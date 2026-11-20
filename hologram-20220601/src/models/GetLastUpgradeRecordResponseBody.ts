// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLastUpgradeRecordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The initial version.
   * 
   * @example
   * r3.2.11
   */
  fromVersion?: string;
  /**
   * @remarks
   * The start time of the read-only state. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-09-24 17:29:57
   */
  startReadonlyTime?: string;
  /**
   * @remarks
   * The end time of the read-only state. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-09-24 18:23:22
   */
  stopReadonlyTime?: string;
  /**
   * @remarks
   * The target version.
   * 
   * @example
   * r4.0.2
   */
  toVersion?: string;
  static names(): { [key: string]: string } {
    return {
      fromVersion: 'fromVersion',
      startReadonlyTime: 'startReadonlyTime',
      stopReadonlyTime: 'stopReadonlyTime',
      toVersion: 'toVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromVersion: 'string',
      startReadonlyTime: 'string',
      stopReadonlyTime: 'string',
      toVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLastUpgradeRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetLastUpgradeRecordResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 819A7F0F-2951-540F-BD94-6A41ECF0281F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetLastUpgradeRecordResponseBodyData,
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

