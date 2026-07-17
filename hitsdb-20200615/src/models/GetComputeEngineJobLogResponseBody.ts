// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeEngineJobLogResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  jobId?: string;
  logs?: string[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      jobId: 'JobId',
      logs: 'Logs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      jobId: 'string',
      logs: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

