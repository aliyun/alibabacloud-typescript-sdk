// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem extends $dara.Model {
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * SnapshotId
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * s-j6c9lpuyxo2uxxnx****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

