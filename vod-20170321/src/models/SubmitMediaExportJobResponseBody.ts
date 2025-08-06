// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMediaExportJobResponseBody extends $dara.Model {
  fileURL?: string;
  jobId?: string;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      fileURL: 'FileURL',
      jobId: 'JobId',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURL: 'string',
      jobId: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

