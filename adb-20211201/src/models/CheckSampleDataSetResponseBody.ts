// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSampleDataSetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0CE655C3-C211-513D-A42F-D4AE2D1A867C
   */
  requestId?: string;
  /**
   * @remarks
   * The state of the built-in dataset. Valid values:
   * 
   * *   **SUCCEED**: The dataset is loaded.
   * *   **INIT**: The dataset is being loaded.
   * *   **FAILED**: The dataset failed to be loaded.
   * *   **UNINITIALIZED**: The dataset is not loaded.
   * 
   * @example
   * UNINITIALIZED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

