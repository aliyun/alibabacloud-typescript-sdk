// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTableShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * connector-d51861492df64257
   */
  connectorId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tableColumnsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ads_wjjr_basc_enterprise_di
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      connectorId: 'ConnectorId',
      tableColumnsShrink: 'TableColumns',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorId: 'string',
      tableColumnsShrink: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

