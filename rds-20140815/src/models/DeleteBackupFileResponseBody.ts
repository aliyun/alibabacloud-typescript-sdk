// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteBackupFileResponseBodyDeletedBaksetIds } from "./DeleteBackupFileResponseBodyDeletedBaksetIds";


export class DeleteBackupFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the IDs of deleted backup sets.
   */
  deletedBaksetIds?: DeleteBackupFileResponseBodyDeletedBaksetIds;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C7B3A91C-0ACD-4948-ACAE-xxxxxxxD4069
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deletedBaksetIds: 'DeletedBaksetIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletedBaksetIds: DeleteBackupFileResponseBodyDeletedBaksetIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.deletedBaksetIds && typeof (this.deletedBaksetIds as any).validate === 'function') {
      (this.deletedBaksetIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

