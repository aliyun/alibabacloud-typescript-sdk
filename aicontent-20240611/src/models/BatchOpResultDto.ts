// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchFailedItemDTO } from "./BatchFailedItemDto";


export class BatchOpResultDTO extends $dara.Model {
  /**
   * @example
   * []
   */
  failed?: BatchFailedItemDTO[];
  /**
   * @example
   * []
   */
  succeeded?: number[];
  static names(): { [key: string]: string } {
    return {
      failed: 'failed',
      succeeded: 'succeeded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: { 'type': 'array', 'itemType': BatchFailedItemDTO },
      succeeded: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.failed)) {
      $dara.Model.validateArray(this.failed);
    }
    if(Array.isArray(this.succeeded)) {
      $dara.Model.validateArray(this.succeeded);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

