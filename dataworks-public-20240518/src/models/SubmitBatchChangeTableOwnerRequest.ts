// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitBatchChangeTableOwnerRequest extends $dara.Model {
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
  tableMetaEntityIds?: string[];
  static names(): { [key: string]: string } {
    return {
      enableCrossTenant: 'EnableCrossTenant',
      owner: 'Owner',
      tableMetaEntityIds: 'TableMetaEntityIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableCrossTenant: 'boolean',
      owner: 'string',
      tableMetaEntityIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableMetaEntityIds)) {
      $dara.Model.validateArray(this.tableMetaEntityIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

