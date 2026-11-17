// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelSelectionDelta extends $dara.Model {
  /**
   * @remarks
   * The actual source model IDs to add to the unique ModelAPI. Already selected IDs must not be added again.
   */
  addModelCardIds?: string[];
  /**
   * @remarks
   * The actual source model IDs to remove from the unique ModelAPI. This operation does not delete models in the source. You cannot clear the API or remove backup models that are still referenced by other entry points.
   */
  removeModelCardIds?: string[];
  static names(): { [key: string]: string } {
    return {
      addModelCardIds: 'addModelCardIds',
      removeModelCardIds: 'removeModelCardIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addModelCardIds: { 'type': 'array', 'itemType': 'string' },
      removeModelCardIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.addModelCardIds)) {
      $dara.Model.validateArray(this.addModelCardIds);
    }
    if(Array.isArray(this.removeModelCardIds)) {
      $dara.Model.validateArray(this.removeModelCardIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

