// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDatasetVersionLabelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B2E89D7E-74F8-5656-A5D6-81D83403F9A8
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

