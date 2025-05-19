// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BackflowFeatureConsistencyCheckJobDataResponseBody extends $dara.Model {
  /**
   * @example
   * BDB621CB-A81E-5D39-8793-39A365CBCC74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

