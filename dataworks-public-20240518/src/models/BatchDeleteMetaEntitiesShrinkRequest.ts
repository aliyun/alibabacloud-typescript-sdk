// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteMetaEntitiesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of entity IDs to delete. A maximum of 10 IDs are supported. All entities in the same batch must be of the same entityType.
   * 
   * This parameter is required.
   */
  idsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      idsShrink: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

