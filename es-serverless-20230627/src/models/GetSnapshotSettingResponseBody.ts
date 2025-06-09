// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSnapshotSettingResponseBodyResult } from "./GetSnapshotSettingResponseBodyResult";


export class GetSnapshotSettingResponseBody extends $dara.Model {
  /**
   * @example
   * 7B6CE6E1-5BA0-56DA-BFFD-8D90692F1EFC
   */
  requestId?: string;
  result?: GetSnapshotSettingResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetSnapshotSettingResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

