// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelMediaExportJobsResponseBody extends $dara.Model {
  failedJobIds?: string[];
  nonExistJobIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedJobIds: 'FailedJobIds',
      nonExistJobIds: 'NonExistJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedJobIds: { 'type': 'array', 'itemType': 'string' },
      nonExistJobIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.failedJobIds)) {
      $dara.Model.validateArray(this.failedJobIds);
    }
    if(Array.isArray(this.nonExistJobIds)) {
      $dara.Model.validateArray(this.nonExistJobIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

