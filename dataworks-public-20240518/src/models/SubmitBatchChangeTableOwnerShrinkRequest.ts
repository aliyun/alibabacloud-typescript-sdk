// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitBatchChangeTableOwnerShrinkRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  enableCrossTenant?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2xxxxx8146415628
   */
  owner?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tableMetaEntityIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      enableCrossTenant: 'EnableCrossTenant',
      owner: 'Owner',
      tableMetaEntityIdsShrink: 'TableMetaEntityIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableCrossTenant: 'boolean',
      owner: 'string',
      tableMetaEntityIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

