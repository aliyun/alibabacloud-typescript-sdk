// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectResponseBodyDataPropertiesTableLifecycle extends $dara.Model {
  /**
   * @remarks
   * The lifecycle type. Valid values:
   * 
   * *   **mandatory**: The lifecycle clause is required in a table creation statement.
   * *   **optional**: The lifecycle clause is optional in a table creation statement. If you do not configure a lifecycle for a table, the table does not expire.
   * *   **inherit**: If you do not configure a lifecycle for a table when you create the table, the value of the odps.table.lifecycle.value parameter is used as the table lifecycle by default.
   * 
   * @example
   * optional
   */
  type?: string;
  /**
   * @remarks
   * The table lifecycle. Unit: days. Valid values: 1 to 37231. Default value: 37231.
   * 
   * @example
   * 37231
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

