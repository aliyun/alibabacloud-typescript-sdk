// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateMetaEntitiesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * An entity list. You can create up to five entities in a batch. All entities in the batch must have the same `EntityType`.
   * 
   * This parameter is required.
   * 
   * @example
   * []
   */
  entitiesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      entitiesShrink: 'Entities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entitiesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

