// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableColumnLineageByTaskIdShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  tableColumnLineageByTaskIdQueryShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      tableColumnLineageByTaskIdQueryShrink: 'TableColumnLineageByTaskIdQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      tableColumnLineageByTaskIdQueryShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

