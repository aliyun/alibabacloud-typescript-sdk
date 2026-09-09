// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitBatchChangeTableOwnerRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow transferring ownership to an owner in a different tenant. Default value: false.
   * 
   * @example
   * false
   */
  enableCrossTenant?: boolean;
  /**
   * @remarks
   * The target owner after the transfer. Use the Alibaba Cloud UID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2xxxxx8146415628
   */
  owner?: string;
  /**
   * @remarks
   * The list of MaxCompute table metadata entity IDs to transfer. A maximum of 100 tables are allowed per request. Duplicate values are not allowed.
   * 
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

