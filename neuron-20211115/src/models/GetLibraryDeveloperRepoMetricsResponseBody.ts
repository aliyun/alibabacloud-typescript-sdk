// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LibraryDeveloperRepoMetricResult } from "./LibraryDeveloperRepoMetricResult";


export class GetLibraryDeveloperRepoMetricsResponseBody extends $dara.Model {
  requestId?: string;
  result?: LibraryDeveloperRepoMetricResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: LibraryDeveloperRepoMetricResult,
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

