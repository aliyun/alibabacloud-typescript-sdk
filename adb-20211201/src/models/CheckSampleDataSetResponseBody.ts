// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSampleDataSetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0CE655C3-C211-513D-A42F-D4AE2D1A867C
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the built-in dataset. Valid values:
   * 
   * - **SUCCEED**: The dataset loaded successfully.
   * 
   * - **INIT**: Loading in progress.
   * 
   * - **FAILED**: Failed to load the dataset.
   * 
   * - **UNINITIALIZED**: Not loaded.
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

