// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContextStoreRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to simultaneously delete the memory output dataset (memory type). Default value: false.
   * 
   * @example
   * false
   */
  deleteOutputDataset?: boolean;
  static names(): { [key: string]: string } {
    return {
      deleteOutputDataset: 'deleteOutputDataset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteOutputDataset: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

