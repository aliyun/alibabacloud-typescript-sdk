// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataResultsValue } from "./DataResultsValue";


export class BatchUndeployHttpApiRoutesResponseBodyData extends $dara.Model {
  failedCount?: number;
  results?: { [key: string]: DataResultsValue };
  skippedCount?: number;
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedCount: 'failedCount',
      results: 'results',
      skippedCount: 'skippedCount',
      successCount: 'successCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCount: 'number',
      results: { 'type': 'map', 'keyType': 'string', 'valueType': DataResultsValue },
      skippedCount: 'number',
      successCount: 'number',
    };
  }

  validate() {
    if(this.results) {
      $dara.Model.validateMap(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUndeployHttpApiRoutesResponseBody extends $dara.Model {
  code?: string;
  data?: BatchUndeployHttpApiRoutesResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BatchUndeployHttpApiRoutesResponseBodyData,
      message: 'string',
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

