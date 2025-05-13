// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDatasetLabelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 64B50C1D-D4C2-560C-86A3-A6ED****16D
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

