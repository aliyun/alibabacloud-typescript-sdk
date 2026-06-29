// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableColumnLineagesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions.
   */
  filterQueryShrink?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The GUID of the table, which is the unique identifier of the asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 1121
   */
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      filterQueryShrink: 'FilterQuery',
      opTenantId: 'OpTenantId',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterQueryShrink: 'string',
      opTenantId: 'number',
      tableGuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

