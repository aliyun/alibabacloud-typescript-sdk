// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPkgThresholdNewResponseBody extends $dara.Model {
  packageWarningLimit?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      packageWarningLimit: 'PackageWarningLimit',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageWarningLimit: 'number',
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

