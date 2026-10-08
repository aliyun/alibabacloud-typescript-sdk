// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrecheckDuckDBDependencyResponseBodyFailedCheckItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the item can be fixed with one click.
   * 
   * - **true**: The item can be fixed with one click by calling the [ModifyDBInstanceConfig](https://help.aliyun.com/document_detail/2623684.html) operation.
   * - **false**: The item cannot be fixed with one click.
   * 
   * 
   * >Notice: If the major engine version of the database instance does not meet the requirements, you must perform a [manual upgrade](https://help.aliyun.com/document_detail/2623684.html).
   * 
   * @example
   * false
   */
  allowAutoModify?: boolean;
  /**
   * @remarks
   * The current value of the check item.
   * 
   * @example
   * 15.0
   */
  currentValue?: string;
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * MajorVersion
   */
  name?: string;
  /**
   * @remarks
   * The target value or target range of the check item.
   * 
   * @example
   * 17.0
   */
  requiredValue?: string;
  /**
   * @remarks
   * The check item type. Valid values:
   * 
   * - **Parameter**: parameter.
   * - **MinorVersion**: minor engine version.
   * - **MajorVersion**: major engine version.
   * 
   * @example
   * Parameter
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      allowAutoModify: 'AllowAutoModify',
      currentValue: 'CurrentValue',
      name: 'Name',
      requiredValue: 'RequiredValue',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowAutoModify: 'boolean',
      currentValue: 'string',
      name: 'string',
      requiredValue: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrecheckDuckDBDependencyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The items that do not meet the prerequisites for creating a DuckDB-based analytical instance.
   */
  failedCheckItems?: PrecheckDuckDBDependencyResponseBodyFailedCheckItems[];
  /**
   * @remarks
   * Indicates whether the prerequisite check for creating a DuckDB-based analytical instance is passed. Valid values:
   * 
   * - **true**: The check is passed.
   * - **false**: The check is not passed.
   * 
   * @example
   * false
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      failedCheckItems: 'FailedCheckItems',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCheckItems: { 'type': 'array', 'itemType': PrecheckDuckDBDependencyResponseBodyFailedCheckItems },
      result: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.failedCheckItems)) {
      $dara.Model.validateArray(this.failedCheckItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

