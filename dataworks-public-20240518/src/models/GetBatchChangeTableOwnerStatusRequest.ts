// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchChangeTableOwnerStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 524257_openapi-req-abc123
   */
  batchId?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

