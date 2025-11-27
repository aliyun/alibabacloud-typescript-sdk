// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBackupFileResponseBodyDeletedBaksetIds extends $dara.Model {
  deletedBaksetIds?: number[];
  static names(): { [key: string]: string } {
    return {
      deletedBaksetIds: 'DeletedBaksetIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletedBaksetIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.deletedBaksetIds)) {
      $dara.Model.validateArray(this.deletedBaksetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

