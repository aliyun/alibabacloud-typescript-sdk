// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSensitiveDataAuditLogResponseBodySensitiveDataAuditLogListSensitiveDataLog extends $dara.Model {
  /**
   * @remarks
   * The name of the column that contains sensitive data.
   * 
   * @example
   * ExampleColumnName
   */
  columnName?: string;
  /**
   * @remarks
   * The permission that the user has on the column. Valid values:
   * 
   * *   **No permission**
   * *   **Partial redaction**
   * *   **Plaintext**
   * *   **Change**
   * *   **Enable data masking**
   * *   **Disable data masking**
   * 
   * @example
   * Change
   */
  columnPermissionType?: string;
  /**
   * @remarks
   * The algorithm used for data masking.
   * 
   * @example
   * Default - Full redaction
   */
  desensitizationRule?: string;
  /**
   * @remarks
   * The sensitivity level of the data. Valid values:
   * 
   * *   **Low**
   * *   **Medium**
   * *   **High**
   * 
   * @example
   * Low
   */
  securityLevel?: string;
  /**
   * @remarks
   * The name of the table that stores the sensitive data.
   * 
   * @example
   * ExampleTableName
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnPermissionType: 'ColumnPermissionType',
      desensitizationRule: 'DesensitizationRule',
      securityLevel: 'SecurityLevel',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnPermissionType: 'string',
      desensitizationRule: 'string',
      securityLevel: 'string',
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

