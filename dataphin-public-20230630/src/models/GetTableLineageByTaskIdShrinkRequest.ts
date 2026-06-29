// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableLineageByTaskIdShrinkRequest extends $dara.Model {
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
   * The data structure for querying table lineage.
   * 
   * This parameter is required.
   */
  tableLineageByTaskIdQueryShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      tableLineageByTaskIdQueryShrink: 'TableLineageByTaskIdQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      tableLineageByTaskIdQueryShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

