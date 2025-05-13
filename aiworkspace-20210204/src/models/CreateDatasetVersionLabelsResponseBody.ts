// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetVersionLabelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8D7B2E70-F770-505B-A672-09F1D8F2EC1E
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

