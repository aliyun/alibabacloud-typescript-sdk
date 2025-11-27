// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Dataset } from "./Dataset";


export class CreateDatasetResponseBody extends $dara.Model {
  /**
   * @remarks
   * Dataset information.
   */
  dataset?: Dataset;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 6D74B3A9-5AC0-49F9-914D-E01589D3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataset: 'Dataset',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataset: Dataset,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataset && typeof (this.dataset as any).validate === 'function') {
      (this.dataset as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

